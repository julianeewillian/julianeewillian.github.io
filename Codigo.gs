/* =====================================================================
   BACKEND GRATUITO DO SITE DE CASAMENTO — Google Apps Script
   ---------------------------------------------------------------------
   Guarda RSVP (lista fechada: cada convite já traz o nome de cada pessoa), recados e avisos de presentes
   numa Planilha do Google. Veja o passo 3 do Guia para instalar.

   1) Cole este código em Extensões > Apps Script da sua planilha.
   2) Rode a função "configurarPlanilha" uma vez (botão ▶ Executar).
   3) Implante como "App da Web" (acesso: Qualquer pessoa).
   ===================================================================== */

const PRAZO_RSVP = new Date('2027-03-03T23:59:59-03:00');
const LIMITE_POR_PRESENTE = 3;  // depois de informado 3 vezes, o presente some da lista do site
const MODERAR_RECADOS = false;  // false = o recado aparece na hora no site (true = só depois de marcar "Aprovado")
const URL_DO_SITE = 'https://julianeewillian.github.io/';  // endereço do site (usado para gerar os links dos convites)

const ABA = {
  convidados: 'Convidados',
  respostas: 'Respostas',
  presentes: 'Presentes',
  recados: 'Recados',
  painel: 'Painel'
};

/* ------------------------------------------------------------------ */
/*  Rotas                                                              */
/* ------------------------------------------------------------------ */
function doGet(e) {
  const p = (e && e.parameter) || {};
  try {
    if (p.action === 'lookup') return json(buscarConvite_(p.codigo));
    if (p.action === 'recados') return json(listarRecados_());
    if (p.action === 'presentes') return json(contarPresentes_());
    return json({ ok: true, status: 'API do casamento funcionando 💍' });
  } catch (err) {
    return json({ ok: false, erro: 'Erro no servidor: ' + err.message });
  }
}

function doPost(e) {
  const lock = LockService.getScriptLock();
  lock.waitLock(20000);
  try {
    const d = JSON.parse(e.postData.contents || '{}');
    if (d.tipo === 'rsvp') return json(salvarRsvp_(d));
    if (d.tipo === 'presente') return json(salvarPresente_(d));
    if (d.tipo === 'recado') return json(salvarRecado_(d));
    return json({ ok: false, erro: 'Tipo inválido.' });
  } catch (err) {
    return json({ ok: false, erro: 'Erro no servidor: ' + err.message });
  } finally {
    lock.releaseLock();
  }
}

/* ------------------------------------------------------------------ */
/*  RSVP                                                               */
/* ------------------------------------------------------------------ */
function buscarConvite_(codigo) {
  const cod = normCodigo_(codigo);
  if (!cod) return { ok: false, erro: 'Digite o código do convite.' };
  const conv = acharConvidado_(cod);
  if (!conv) return { ok: false, erro: 'Código não encontrado. Confira o convite e tente de novo.' };
  return { ok: true, convidado: { codigo: conv.codigo, nome: conv.nome, pessoas: conv.pessoas }, resposta: acharResposta_(cod) };
}

function salvarRsvp_(d) {
  if (new Date() > PRAZO_RSVP) return { ok: false, erro: 'O prazo de confirmação terminou.' };
  const cod = normCodigo_(d.codigo);
  const conv = acharConvidado_(cod);
  if (!conv) return { ok: false, erro: 'Convite não encontrado.' };

  // Só vale quem está na lista do convite (lista fechada).
  // d.vao = [{ nome, crianca }]  — crianca = menor de 8 anos, marcado pelo convidado
  const pedidos = {};
  (Array.isArray(d.vao) ? d.vao : []).forEach(x => {
    const nome = String(typeof x === 'object' ? x.nome : x).trim().toLowerCase();
    if (nome) pedidos[nome] = typeof x === 'object' ? !!x.crianca : null;
  });
  const vao = d.presenca === 'Sim'
    ? conv.pessoas.filter(p => p.nome.toLowerCase() in pedidos)
        .map(p => ({ nome: p.nome, crianca: pedidos[p.nome.toLowerCase()] === null ? p.crianca : pedidos[p.nome.toLowerCase()] }))
    : [];
  if (d.presenca === 'Sim' && !vao.length) return { ok: false, erro: 'Marque pelo menos uma pessoa que vai.' };
  const nomesVao = vao.map(p => p.nome);
  const naoVao = conv.pessoas.filter(p => nomesVao.indexOf(p.nome) < 0);
  const presenca = vao.length ? 'Sim' : 'Não';
  const rotulo = p => p.nome + (p.crianca ? ' (criança até 8 anos)' : '');
  const linha = [
    new Date(), conv.codigo, conv.nome, presenca,
    vao.map(rotulo).join(', '), naoVao.map(rotulo).join(', '),
    vao.filter(p => p.crianca).length, vao.filter(p => !p.crianca).length, vao.length,
    limpa_(d.telefone, 20), limpa_(d.mensagem, 600),
    JSON.stringify(vao)
  ];

  const sh = aba_(ABA.respostas);
  const row = linhaDaResposta_(sh, conv.codigo);
  if (row) sh.getRange(row, 1, 1, linha.length).setValues([linha]);
  else sh.appendRow(linha);
  return { ok: true };
}

/* ------------------------------------------------------------------ */
/*  Presentes e recados                                                */
/* ------------------------------------------------------------------ */
function salvarPresente_(d) {
  // Sempre registra (o convidado já pagou); o limite só esconde o presente do site.
  aba_(ABA.presentes).appendRow([
    new Date(), limpa_(d.presente, 100), Number(d.valor) || 0, limpa_(d.forma, 20),
    limpa_(d.nome, 80), limpa_(d.mensagem, 500), limpa_(d.codigo, 12), false, limpa_(d.id, 30)
  ]);
  return { ok: true, contagem: contarPresentes_().contagem, limite: LIMITE_POR_PRESENTE };
}

/* Quantas vezes cada presente foi informado. Para liberar um presente de novo,
   apague a linha do aviso na aba Presentes. */
function contarPresentes_() {
  const sh = aba_(ABA.presentes), last = sh.getLastRow(), contagem = {};
  if (last >= 2) {
    sh.getRange(2, 9, last - 1, 1).getValues().forEach(r => {
      const id = String(r[0] || '').trim();
      if (id) contagem[id] = (contagem[id] || 0) + 1;
    });
  }
  return { ok: true, contagem: contagem, limite: LIMITE_POR_PRESENTE };
}

function salvarRecado_(d) {
  const nome = limpa_(d.nome, 80), msg = limpa_(d.mensagem, 600);
  if (!nome || !msg) return { ok: false, erro: 'Preencha nome e mensagem.' };
  aba_(ABA.recados).appendRow([new Date(), nome, msg, !MODERAR_RECADOS]);
  return { ok: true, moderado: MODERAR_RECADOS };
}

function listarRecados_() {
  const v = aba_(ABA.recados).getDataRange().getValues().slice(1);
  const recados = v.filter(r => r[3] === true && r[2])
                   .reverse().slice(0, 200)
                   .map(r => ({ nome: String(r[1]), mensagem: String(r[2]) }));
  return { ok: true, recados };
}

/* ------------------------------------------------------------------ */
/*  Auxiliares                                                         */
/* ------------------------------------------------------------------ */
/* "Carlos Silva; Ana Silva; Pedro Silva (criança)" → lista de pessoas */
function lerPessoas_(texto, nomeConvite) {
  const partes = String(texto || '').split(/[;\n]+/).map(t => t.trim()).filter(Boolean);
  const lista = partes.length ? partes : [String(nomeConvite || '').trim()];
  return lista.map(t => {
    const crianca = /\(\s*crian[cç]a\s*\)/i.test(t);
    return { nome: t.replace(/\(\s*crian[cç]a\s*\)/ig, '').replace(/\s+/g, ' ').trim(), crianca: crianca };
  }).filter(p => p.nome);
}

function acharConvidado_(cod) {
  const v = aba_(ABA.convidados).getDataRange().getValues();
  for (let i = 1; i < v.length; i++) {
    if (normCodigo_(v[i][0]) === cod && cod) {
      const nome = String(v[i][1]).trim();
      return { codigo: cod, nome: nome, pessoas: lerPessoas_(v[i][2], nome) };
    }
  }
  return null;
}

function acharResposta_(cod) {
  const sh = aba_(ABA.respostas);
  const row = linhaDaResposta_(sh, cod);
  if (!row) return null;
  const r = sh.getRange(row, 1, 1, 12).getValues()[0];
  let vao = [];
  try { vao = JSON.parse(r[11] || '[]'); } catch (e) {}
  return {
    data: r[0] instanceof Date ? r[0].toISOString() : '', presenca: r[3], total: r[8],
    telefone: String(r[9]), mensagem: String(r[10]), vao: vao
  };
}

function linhaDaResposta_(sh, cod) {
  const last = sh.getLastRow();
  if (last < 2) return 0;
  const cods = sh.getRange(2, 2, last - 1, 1).getValues();
  for (let i = 0; i < cods.length; i++) if (normCodigo_(cods[i][0]) === cod) return i + 2;
  return 0;
}

function normCodigo_(c) { return String(c || '').trim().toUpperCase().replace(/[^A-Z0-9]/g, ''); }

/* Remove espaços extras, limita tamanho e impede "injeção de fórmulas" */
function limpa_(s, max) {
  let t = String(s == null ? '' : s).replace(/\s+/g, ' ').trim().slice(0, max || 200);
  if (/^[=+\-@]/.test(t)) t = "'" + t;
  return t;
}

function aba_(nome) {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  return ss.getSheetByName(nome) || ss.insertSheet(nome);
}

function json(o) {
  return ContentService.createTextOutput(JSON.stringify(o)).setMimeType(ContentService.MimeType.JSON);
}

/* =====================================================================
   MENU "💍 Casamento" NA PLANILHA
   Depois da primeira configuração, aparece um menu "💍 Casamento" no topo
   da planilha — não é preciso voltar ao Apps Script para gerar códigos.
   ===================================================================== */
function onOpen() {
  SpreadsheetApp.getUi().createMenu('💍 Casamento')
    .addItem('Gerar códigos e links dos convites', 'gerarCodigos')
    .addSeparator()
    .addItem('Configurar planilha (só na primeira vez)', 'configurarPlanilha')
    .addToUi();
}

/* =====================================================================
   FUNÇÕES PARA RODAR MANUALMENTE (menu ▶ Executar)
   ===================================================================== */

/* Cria as abas, cabeçalhos, exemplos e o painel de resumo. Rode UMA vez. */
function configurarPlanilha() {
  const cab = (sh, h, cor) => {
    sh.getRange(1, 1, 1, h.length).setValues([h]).setFontWeight('bold').setBackground(cor).setFontColor('#ffffff');
    sh.setFrozenRows(1);
  };

  const conv = aba_(ABA.convidados);
  if (conv.getLastRow() < 1) {
    cab(conv, ['Código', 'Nome do convite', 'Pessoas do convite (separe com ; e marque (criança))', 'Telefone', 'Link do convite', 'Mensagem pronta para WhatsApp', 'Respondeu?'], '#1C2B5A');
    conv.getRange(2, 1, 3, 4).setValues([
      ['', 'Família Silva', 'Carlos Silva; Ana Silva; Pedro Silva (criança)', ''],
      ['', 'Maria e José', 'Maria Souza; José Souza', ''],
      ['', 'João Pereira', 'João Pereira', '']
    ]);
    conv.getRange('C1').setNote('Escreva o nome de cada pessoa convidada, separados por ponto e vírgula (;).\nOpcional: escreva (criança) depois do nome de quem tem menos de 8 anos; ele já aparece marcado no site, e o convidado pode corrigir.\nEx.: Carlos Silva; Ana Silva; Pedro Silva (criança)');
    conv.setColumnWidth(2, 220); conv.setColumnWidth(3, 420); conv.setColumnWidth(5, 320); conv.setColumnWidth(6, 360);
  }

  const resp = aba_(ABA.respostas);
  if (resp.getLastRow() < 1) {
    cab(resp, ['Data', 'Código', 'Convite', 'Presença', 'Quem vai', 'Quem não vai', 'Crianças até 8 anos', 'Adultos', 'Total de pessoas', 'WhatsApp', 'Mensagem', '(dados técnicos)'], '#8A3343');
    resp.hideColumns(12);
  }

  const pres = aba_(ABA.presentes);
  if (pres.getLastRow() < 1) {
    cab(pres, ['Data', 'Presente', 'Valor (R$)', 'Forma', 'Nome do convidado', 'Mensagem', 'Código', 'Conferido no extrato?', '(id do presente)'], '#B8996A');
    pres.getRange('C:C').setNumberFormat('R$ #,##0.00');
    pres.getRange('H2:H1000').insertCheckboxes();
    pres.setColumnWidth(9, 110);
  }

  const rec = aba_(ABA.recados);
  if (rec.getLastRow() < 1) {
    cab(rec, ['Data', 'Nome', 'Mensagem', 'Aprovado'], '#B5838D');
    rec.getRange('D2:D2000').insertCheckboxes();
    rec.setColumnWidth(3, 420);
  }

  const pn = aba_(ABA.painel);
  pn.clear();
  pn.getRange('A1').setValue('Painel do casamento 💍').setFontSize(16).setFontWeight('bold');
  const linhas = [
    ['Convites cadastrados', '=COUNTA(Convidados!B2:B)'],
    ['Pessoas convidadas', '=SUMPRODUCT((LEN(TRIM(Convidados!C2:C))>0)*(LEN(Convidados!C2:C)-LEN(SUBSTITUTE(Convidados!C2:C,";",""))+1))'],
    ['Convites respondidos', '=COUNTA(Respostas!B2:B)'],
    ['Convites sem resposta', '=B2-B4'],
    ['✅ Pessoas confirmadas', '=SUMIF(Respostas!D2:D,"Sim",Respostas!I2:I)'],
    ['   adultos', '=SUMIF(Respostas!D2:D,"Sim",Respostas!H2:H)'],
    ['   crianças até 8 anos', '=SUMIF(Respostas!D2:D,"Sim",Respostas!G2:G)'],
    ['⏳ Pessoas ainda sem resposta', '=B3-SUMPRODUCT((LEN(TRIM(Convidados!C2:C))>0)*(Convidados!G2:G<>"⏳ aguardando")*(LEN(Convidados!C2:C)-LEN(SUBSTITUTE(Convidados!C2:C,";",""))+1))'],
    ['❌ Convites que não irão', '=COUNTIF(Respostas!D2:D,"Não")'],
    ['🎁 Presentes informados', '=COUNTA(Presentes!B2:B)'],
    ['🎁 Total informado (R$)', '=SUM(Presentes!C2:C)'],
    ['💌 Recados aguardando aprovação', '=COUNTIFS(Recados!C2:C,"<>",Recados!D2:D,FALSE)']
  ];
  pn.getRange(2, 1, linhas.length, 2).setValues(linhas);
  pn.getRange('B12').setNumberFormat('R$ #,##0.00');
  pn.getRange('A2:A13').setFontWeight('bold');
  pn.setColumnWidth(1, 300);

  gerarCodigos();
  SpreadsheetApp.getActiveSpreadsheet().setActiveSheet(conv);
  onOpen();
  SpreadsheetApp.getActive().toast('Planilha configurada! Agora implante como App da Web.', '💍 Pronto', 8);
}

/* Preenche códigos aleatórios para quem estiver sem código e
   gera o link personalizado + mensagem pronta para WhatsApp.
   Rode sempre que adicionar novos convidados. */
function gerarCodigos() {
  const sh = aba_(ABA.convidados);
  const last = sh.getLastRow();
  if (last < 2) return;
  const rng = sh.getRange(2, 1, last - 1, 7);
  const v = rng.getValues();
  const usados = new Set(v.map(r => normCodigo_(r[0])).filter(Boolean));
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789'; // sem 0/O e 1/I para não confundir
  const base = (URL_DO_SITE || 'COLOQUE_A_URL_DO_SITE/').replace(/\/?$/, '/');

  v.forEach((r, i) => {
    if (!String(r[1]).trim()) return;
    if (!normCodigo_(r[0])) {
      let c; do { c = ''; for (let k = 0; k < 6; k++) c += chars[Math.floor(Math.random() * chars.length)]; } while (usados.has(c));
      usados.add(c); r[0] = c;
    }
    const link = base + '?convite=' + normCodigo_(r[0]) + '#rsvp';
    r[4] = link;
    r[5] = 'Olá, ' + String(r[1]).trim() + '! 💍 Juliane e Willian vão se casar em 03/04/2027 e você é nosso convidado especial. ' +
           'Veja o convite e confirme sua presença até 03/03/2027 neste link: ' + link + '  (seu código: ' + normCodigo_(r[0]) + ')';
    r[6] = ''; // preenchido pela fórmula abaixo
  });
  rng.setValues(v);
  // Coluna "Respondeu?" com fórmula
  const f = [];
  for (let i = 2; i <= last; i++) f.push(['=IF(A' + i + '="","",IFERROR(INDEX(Respostas!D:D,MATCH(A' + i + ',Respostas!B:B,0)),"⏳ aguardando"))']);
  sh.getRange(2, 7, last - 1, 1).setFormulas(f);
  SpreadsheetApp.getActive().toast('Códigos, links e mensagens gerados na aba Convidados.', '💍 Pronto', 6);
}
