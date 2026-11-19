/* =====================================================================
   CONFIGURAÇÃO DO SITE — Juliane & Willian
   ---------------------------------------------------------------------
   Este é o ÚNICO arquivo que vocês precisam editar para personalizar
   o site. Altere apenas o texto entre aspas "..." e os números.
   Depois de editar, salve e atualize o site (veja o Guia).
   ===================================================================== */

window.CASAMENTO = {

  /* ---------- 1. NOIVOS E DATA ---------- */
  noiva: "Juliane",
  noivo: "Willian",
  noivaCompleto: "Juliane Costa",
  noivoCompleto: "Willian Ribeiro",

  /* ---------- IDENTIDADE VISUAL (artes de vocês, na pasta "imagens") ---------- */
  imagens: {
    monograma: "imagens/monograma.png",          // J&W com flores (fundo transparente)
    convite: "imagens/convite-2027.jpg",              // convite principal
    conviteIndividual: "imagens/convite-individual.jpg",
    /* Área do QR code dentro do convite principal (em frações da imagem).
       O site cobre essa área com um QR code REAL que leva ao site/RSVP.
       Só mude se trocar a arte do convite. */
    areaQr: { x: 0.4277, y: 0.8242, w: 0.1426, h: 0.0924 }
  },
  dataISO: "2027-04-03T17:00:00-03:00",      // data/hora da cerimônia (não mexer no -03:00)
  dataTexto: "Sábado, 03 de abril de 2027",
  prazoRSVP: "2027-03-14T23:59:59-03:00",    // depois disso o RSVP fecha sozinho
  prazoRSVPTexto: "14/03/2027",
  hashtag: "#JulianeEWillian",
  frase: "Com a bênção de Deus e de nossos pais, temos a alegria de convidar você para celebrar o nosso casamento.",

  /* Endereço público do site (preencha depois de publicar).
     Ex.: "https://julianeewillian.github.io"  — usado no QR code e nos links. */
  urlSite: "https://julianeewillian.github.io/",

  /* URL do Google Apps Script (passo 3 do Guia).
     Enquanto estiver vazio, o site funciona em MODO DEMONSTRAÇÃO. */
  apiUrl: "",

  /* WhatsApp dos noivos para dúvidas (só números, com DDI 55 e DDD). Ex.: "5531999999999" */
  whatsapp: "5531984340468",   // Willian (noivo)

  /* ---------- 2. LOCAIS ---------- */
  cerimonia: {
    titulo: "Cerimônia religiosa",
    nome: "Paróquia Nossa Senhora de Fátima",
    endereco: "Rua Padre Hildebrando de Freitas, 286 - Vila Tanque, João Monlevade - MG",
    horario: "17:00",
    mapa: "Rua Padre Hildebrando de Freitas, 286, Vila Tanque, João Monlevade, MG"
  },
  recepcao: {
    titulo: "Recepção",
    nome: "Sítio Alto da Colina",
    endereco: "Rua A, 795 - Loanda, João Monlevade - MG",
    horario: "18:00",
    obs: "Logo após a cerimônia",
    mapa: "Rua A, 795, Loanda, João Monlevade, MG"
  },

  /* ---------- 3. NOSSA HISTÓRIA (edite à vontade) ---------- */
  historia: [
    { quando: "05.01.2015", titulo: "Um “oi” que mudou tudo",
      texto: "Tudo começou numa conversa pelo Facebook. Foi a Juliane quem puxou assunto, com um “oi” para quebrar o gelo. O Willian respondeu, e a conversa nunca mais parou.",
      midia: { tipo: "chat", nome: "Juliane Costa", data: "5 de janeiro de 2015",
               mensagens: [ ["ela", "Oi"], ["ele", "Oi, tudo bem?"], ["ela", "mandei um oi para quebrar o gelo, rsrs"], ["ele", "kkk"] ] } },
    { quando: "17.04.2015", titulo: "O primeiro encontro",
      texto: "Depois de meses de conversa, marcamos de nos conhecer pessoalmente em Uberlândia (MG), onde a Juliane fazia estágio na Universidade Federal de Uberlândia. Foi ali que o “oi” virou “nós”.",
      midia: { tipo: "foto", src: "imagens/historia-primeiro-encontro.jpg", legenda: "Uberlândia · 17.04.2015", quadrada: true } },
    { quando: "22.02.2025", titulo: "O sim",
      texto: "Num passeio por Santa Bárbara, numa pizzaria, chegou uma carta de Hogwarts convidando a Juliane para a maior aventura de todas: o casamento. A resposta veio com um anel no dedo.",
      midia: { tipo: "foto", src: "imagens/historia-pedido.jpg", legenda: "Santa Bárbara · 22.02.2025" } },
    { quando: "03.04.2027", titulo: "Para sempre",
      texto: "E agora queremos você ao nosso lado no dia mais especial das nossas vidas.",
      midia: { tipo: "foto", src: "imagens/historia-para-sempre.jpg", legenda: "Para sempre · 03.04.2027", formato: "paisagem" } }
  ],


  /* ---------- 4. FOTOS ----------
     Coloque as fotos na pasta "fotos" e escreva os nomes aqui.
     Ex.: ["fotos/01.jpg", "fotos/02.jpg"]. Deixe vazio para esconder a galeria.
     fotoSaveTheDate: foto do "Save the Date" no topo do site, ao lado da contagem regressiva.
     Deixe vazio ("") para mostrar o topo sem foto. */
  fotoSaveTheDate: "imagens/save-the-date.jpg",
  fotos: [
    "fotos/casal-01.jpg",
    "fotos/casal-02.jpg",
    "fotos/casal-03.jpg",
    "fotos/casal-04.jpg",
    "fotos/casal-05.jpg",
    "fotos/casal-06.jpg",
    "fotos/casal-07.jpg",
    "fotos/casal-08.jpg",
    "fotos/casal-09.jpg",
    "fotos/casal-10.jpg",
    "fotos/casal-11.jpg",
    "fotos/casal-12.jpg",
    "fotos/casal-13.jpg",
    "fotos/casal-14.jpg",
    "fotos/casal-15.jpg",
    "fotos/casal-16.jpg",
    "fotos/casal-17.jpg",
    "fotos/casal-18.jpg",
    "fotos/casal-19.jpg",
    "fotos/casal-20.jpg",
    "fotos/casal-21.jpg",
    "fotos/casal-22.jpg"
  ],

  /* ---------- 5. TRAJE ---------- */
  traje: {
    titulo: "Traje: Esporte fino",
    texto: "Nossa paleta é azul-marinho, marsala e dourado — fique à vontade para combinar com ela. Pedimos, com carinho, que as convidadas evitem o branco e tons muito claros, reservados à noiva. A recepção é em um sítio: sapatos de salto grosso são mais confortáveis na grama.",
    cores: ["#1C2B5A", "#8A3343", "#B8935A", "#7C8A7A", "#D9CFC4"]
  },

  /* ---------- 6. PAGAMENTOS ----------
     PIX: o dinheiro cai DIRETO na conta dos noivos, sem taxa.
       chave: sua chave Pix (CPF só números, e-mail, celular no formato +5531999999999, ou chave aleatória)
       nomeRecebedor: nome do titular SEM acentos (até 25 letras)
       cidade: cidade SEM acentos (até 15 letras)
     CARTÃO: link do PicPay criado sob pedido pelo WhatsApp (veja abaixo).
       O convidado digita os dados do cartão no ambiente seguro do PicPay, nunca no site. */
  pix: {
    chave: "10447310607",
    nomeRecebedor: "WILLIAN GONCALVES RIBEIRO",
    cidade: "JOAO MONLEVADE"
  },
  /* CARTÃO SOB PEDIDO (padrão): os links do PicPay vencem em 30 dias, então
     NÃO precisa criar links antes. No cartão, o convidado toca em
     "Pedir link no WhatsApp" e cai no WhatsApp do Willian com o presente e o
     valor no cartão já escritos. Aí é só criar o link no PicPay e responder.

     LINKS PRONTOS (opcional, ex.: perto de uma data de muitas compras):
     cole os links abaixo e escreva em "linksCriadosEm" o dia em que criou.
     Depois de "validadeLinkDias" o site esconde os links sozinho e volta
     para o pedido pelo WhatsApp, então ninguém cai num link vencido. */
  linksCriadosEm: "",       // ex.: "2027-02-10" (ano-mês-dia)
  validadeLinkDias: 30,
  linksCartao: {
    controle:   "",   // R$ 94,80  ·  Controle remoto reserva
    planta:     "",   // R$ 100,04  ·  Plantinha que a noiva promete não matar
    protetor:   "",   // R$ 104,95  ·  Protetor solar pro noivo não virar camarão
    pizza:      "",   // R$ 110,84  ·  Pizza do primeiro domingo de casados
    chocolate:  "",   // R$ 116,51  ·  Chocolate de reconciliação
    ressaca:    "",   // R$ 122,06  ·  Kit ressaca do dia seguinte
    pqueijo:    "",   // R$ 128,22  ·  Forma de pão de queijo (somos mineiros, uai)
    cafe:       "",   // R$ 134,58  ·  Café da manhã na lua de mel
    sono:       "",   // R$ 141,58  ·  Vale dormir até meio-dia depois da festa
    paciencia:  "",   // R$ 150,37  ·  Paciência pro noivo nas compras
    bagagem:    "",   // R$ 163,29  ·  Excesso de bagagem da noiva
    toalhas:    "",   // R$ 173,00  ·  Jogo de toalhas
    ferram:     "",   // R$ 180,73  ·  Ferramentas pro noivo fingir que sabe consertar
    dr:         "",   // R$ 190,41  ·  Kit DR resolvida (vinho + chocolate)
    razao:      "",   // R$ 200,11  ·  Certificado: a noiva sempre tem razão
    datas:      "",   // R$ 208,99  ·  Garantia de que o noivo vai lembrar das datas
    ronco:      "",   // R$ 220,66  ·  Fone de ouvido pro ronco do noivo
    uber:       "",   // R$ 231,54  ·  Uber dos noivos depois da festa
    drinks:     "",   // R$ 243,70  ·  Drinks na beira da piscina
    edredom:    "",   // R$ 255,59  ·  Edredom extra
    liquid:     "",   // R$ 273,37  ·  Liquidificador
    jantar:     "",   // R$ 298,14  ·  Jantar romântico na lua de mel
    cama:       "",   // R$ 324,48  ·  Jogo de cama casal
    spa:        "",   // R$ 351,32  ·  Dia de salão pra noiva se recuperar dos preparativos
    cafeteira:  "",   // R$ 377,94  ·  Cafeteira
    jogo:       "",   // R$ 406,27  ·  Ingresso pro jogo do time do noivo
    luz:        "",   // R$ 432,47  ·  Primeira conta de luz da casa nova
    passeio:    "",   // R$ 458,78  ·  Passeio turístico na lua de mel
    filhos:     "",   // R$ 486,32  ·  Taxa pra não perguntar "e os filhos?" na festa
    churras:    "",   // R$ 512,07  ·  Kit churrasco do noivo
    airfryer:   "",   // R$ 543,11  ·  Air fryer
    vestido:    "",   // R$ 600,05  ·  Ajuda para pagar o vestido da noiva
    upgrade:    "",   // R$ 658,63  ·  Upgrade para quarto com vista para o mar
    aparelho:   "",   // R$ 712,92  ·  Aparelho de jantar
    sogra:      "",   // R$ 769,45  ·  Cota do primeiro aluguel
    terno:      "",   // R$ 823,03  ·  Ajuda para pagar o terno do noivo
    panelas:    "",   // R$ 878,32  ·  Panelas pro noivo aprender a cozinhar
    massagem:   "",   // R$ 925,81  ·  Massagem relaxante para os dois
    barco:      "",   // R$ 973,92  ·  Passeio de barco
    culinaria:  "",   // R$ 1.021,17  ·  Curso de culinária pro noivo
    diaria:     "",   // R$ 1.128,21  ·  Uma diária a mais na lua de mel
    sofa:       "",   // R$ 1.239,49  ·  Cota do sofá das maratonas de série
    bebe:       "",   // R$ 1.310,96  ·  Fundo pro primeiro bebê
    robo:       "",   // R$ 1.543,10  ·  Robô aspirador
    hotel:      "",   // R$ 1.757,37  ·  Cota da hospedagem da lua de mel
    passagem:   "",   // R$ 1.946,86  ·  Cota das passagens da lua de mel
    tv:         "",   // R$ 2.269,68  ·  Cota da TV gigante
    geladeira:  "",   // R$ 2.453,05  ·  Cota da geladeira nova
    cozinha:    "",   // R$ 3.609,38  ·  Cota da cozinha planejada
    patrocinio: ""     // R$ 5.174,67  ·  Lua de mel patrocinada por você
  },
  linkCartaoPadrao: "",   // opcional: link usado quando o presente não tiver link na tabela acima (também vence)
  /* Repassar a taxa do cartão ao convidado (em %). Plano PicPay "Recebimento em 31 dias",
     até 6x sem juros: taxa máxima 3,59% (6x). 3.75 cobre isso e vocês recebem o valor
     cheio. 0 = vocês absorvem a taxa. Permitido pela Lei 13.455/2017. */
  acrescimoCartao: 3.75,
  /* Empresa dos links de cartão e aviso sobre parcelamento (aparece na aba "Cartão") */
  empresaCartao: "PicPay",
  textoParcelamento: "",
  maxParcelas: 6,          // parcelas sem juros no cartão (configure o mesmo no PicPay)

  /* ---------- 7. LISTA DE PRESENTES (descontraída) ----------
     id: código curto único | cat: lua | casa | rir  (categoria do filtro)
     foto: número da foto no Pexels (pexels.com, banco de fotos gratuito). Para trocar,
       abra a foto no Pexels: o número é o final do endereço
       (pexels.com/photo/nome-da-foto-9186047/ → foto: 9186047).
     cena: 2 ou 3 emojis usados só se a foto não carregar (o 1º é o maior).
       As figuras vêm da internet (Twemoji); se alguma faltar, aparece o
       emoji do próprio celular, o que também funciona.
     valor: em reais, com ponto nos centavos (91.37). Faixas: 90–150, 150–250,
       250–500, 500–1000 e acima de 1000 (10 presentes em cada).
     Para tirar um presente, apague a linha inteira. Para criar, copie uma linha. */
  categoriasPresentes: { lua: "Lua de mel", casa: "Casa nova", rir: "Para rir (e ajudar)" },
  valorMinimoLivre: 90,
  /* Quantas vezes cada presente pode ser dado. Ao chegar no limite, ele some da lista.
     (Com a planilha ligada, quem manda é LIMITE_POR_PRESENTE no Codigo.gs.) */
  limitePorPresente: 3,
  /* Cartões prontos que o convidado pode escolher depois de pagar o presente
     (ele também pode escrever a própria mensagem). Edite à vontade.
     foto: número da foto no Pexels (final do endereço pexels.com/photo/...-NUMERO/) */
  cartoesProntos: [
    { foto: 6018398,  texto: "Que o amor de vocês seja como pão de queijo: quentinho, simples e impossível de enjoar. Felicidades!" },
    { foto: 26960731, texto: "Desejo a vocês uma vida a dois cheia de risadas, parceria e muitos cafés da manhã juntos. Parabéns!" },
    { foto: 56926,    texto: "Que Deus abençoe esse lar e essa família que começa agora. Com todo o carinho!" },
    { foto: 14403867, texto: "Aproveitem cada minuto da lua de mel… e não esqueçam de mandar fotos! Muitas felicidades!" },
    { foto: 636006,   texto: "Casamento é dividir o edredom, o controle remoto e a vida. Que vocês sejam muito felizes!" }
  ],
  /* foto do cartão "Escrever minha própria mensagem" (número da foto no Pexels) */
  cartaoProprioFoto: 540522,
  fotoValorLivre: 8014845,
  faixasPresentes: [
    { nome: "Até R$ 150",        min: 0,    max: 150 },
    { nome: "R$ 150 a 250",      min: 150,  max: 250 },
    { nome: "R$ 250 a 500",      min: 250,  max: 500 },
    { nome: "R$ 500 a 1.000",    min: 500,  max: 1000 },
    { nome: "Acima de R$ 1.000", min: 1000, max: 999999 }
  ],
  presentes: [
    /* ----- LUA DE MEL ----- */
    { id: "cafe",      cat: "lua",  icone: "☕", nome: "Café da manhã na lua de mel",              descricao: "Porque sem café ninguém é feliz, nem em lua de mel.", foto: 3575143, cena: ["☕", "🥐", "💕"], valor: 129.71 },
    { id: "protetor",  cat: "lua",  icone: "🦐", nome: "Protetor solar pro noivo não virar camarão", descricao: "Ele jura que não precisa. A gente sabe que precisa.", foto: 7425767, cena: ["🦐", "☀️", "🧴"], valor: 101.15 },
    { id: "drinks",    cat: "lua",  icone: "🍹", nome: "Drinks na beira da piscina",               descricao: "Um brinde a nós (e a você, que pagou).", foto: 13450977, cena: ["🍹", "🌴", "🥂"], valor: 234.89 },
    { id: "uber",      cat: "lua",  icone: "🚗", nome: "Uber dos noivos depois da festa",           descricao: "Porque ninguém vai ter condição de dirigir.", foto: 5902146, cena: ["🚗", "🥴", "🎉"], valor: 223.17 },
    { id: "bagagem",   cat: "lua",  icone: "🧳", nome: "Excesso de bagagem da noiva",               descricao: "Ela vai levar \"só o essencial\". Doze sapatos, no caso.", foto: 9186047, cena: ["🧳", "👠", "👗"], valor: 157.38 },
    { id: "passeio",   cat: "lua",  icone: "🗺️", nome: "Passeio turístico na lua de mel",           descricao: "Fotos lindas garantidas para encher o seu feed.", foto: 6324298, cena: ["🗺️", "📸", "🤳"], valor: 442.19 },
    { id: "jantar",    cat: "lua",  icone: "🍷", nome: "Jantar romântico na lua de mel",            descricao: "Luz de velas, vinho e zero assunto de casamento.", foto: 2950327, cena: ["🍷", "🕯️", "💑"], valor: 287.36 },
    { id: "massagem",  cat: "lua",  icone: "💆", nome: "Massagem relaxante para os dois",           descricao: "Depois de organizar um casamento, a gente merece.", foto: 19695969, cena: ["💆", "🧖", "😌"], valor: 892.34 },
    { id: "barco",     cat: "lua",  icone: "⛵", nome: "Passeio de barco",                          descricao: "O noivo promete não enjoar. Não prometemos nada.", foto: 18314162, cena: ["⛵", "🤢", "🌊"], valor: 938.71 },
    { id: "upgrade",   cat: "lua",  icone: "🌊", nome: "Upgrade para quarto com vista para o mar",  descricao: "Acordar e ver o mar em vez do estacionamento.", foto: 14746032, cena: ["🌊", "🏨", "🤩"], valor: 634.82 },
    { id: "diaria",    cat: "lua",  icone: "🏨", nome: "Uma diária a mais na lua de mel",           descricao: "Só mais um diazinho antes de voltar pra realidade.", foto: 6466488, cena: ["🏨", "⏰", "🙏"], valor: 1087.43 },
    { id: "passagem",  cat: "lua",  icone: "✈️", nome: "Cota das passagens da lua de mel",          descricao: "Ajude a gente a decolar (de preferência, na janela).", foto: 2497973, cena: ["✈️", "💺", "🥳"], valor: 1876.49 },
    { id: "hotel",     cat: "lua",  icone: "🏝️", nome: "Cota da hospedagem da lua de mel",         descricao: "Pé na areia, água de coco e nenhum grupo de WhatsApp.", foto: 8249266, cena: ["🏝️", "🥥", "📵"], valor: 1693.85 },
    { id: "patrocinio",cat: "lua",  icone: "🌴", nome: "Lua de mel patrocinada por você", descricao: "Seu nome vai no agradecimento oficial e em todas as fotos de pôr do sol.", foto: 1024984, cena: ["🌅", "🌴", "🙌"], valor: 4987.63 },

    /* ----- CASA NOVA ----- */
    { id: "planta",    cat: "casa", icone: "🪴", nome: "Plantinha que a noiva promete não matar",   descricao: "Dessa vez vai. Confia.", foto: 6640461, cena: ["🪴", "😬", "💧"], valor: 96.42 },
    { id: "toalhas",   cat: "casa", icone: "🛁", nome: "Jogo de toalhas",                           descricao: "Para acabar com a toalha do noivo de 2015.", foto: 4210372, cena: ["🛁", "🧼", "🦆"], valor: 166.74 },
    { id: "ferram",    cat: "casa", icone: "🔧", nome: "Ferramentas pro noivo fingir que sabe consertar", descricao: "No fim, quem chama o técnico é a noiva.", foto: 6050244, cena: ["🔧", "😅", "🔨"], valor: 174.19 },
    { id: "pqueijo",   cat: "casa", icone: "🧀", nome: "Forma de pão de queijo (somos mineiros, uai)", descricao: "Item obrigatório em toda casa de Minas.", foto: 2932677, cena: ["🧀", "☕", "🥰"], valor: 123.58 },
    { id: "liquid",    cat: "casa", icone: "🥤", nome: "Liquidificador",                            descricao: "Para as vitaminas da nova vida saudável (que começa segunda).", foto: 7937006, cena: ["🥤", "🍌", "🥦"], valor: 263.48 },
    { id: "churras",   cat: "casa", icone: "🔥", nome: "Kit churrasco do noivo",                    descricao: "Ele promete o primeiro churrasco pra você. Vai cobrar?", foto: 9144103, cena: ["🔥", "🥩", "🍺"], valor: 493.56 },
    { id: "cafeteira", cat: "casa", icone: "☕", nome: "Cafeteira",                                 descricao: "Para o cafezinho mineiro de toda visita.", foto: 9811854, cena: ["☕", "🫖", "😋"], valor: 364.27 },
    { id: "cama",      cat: "casa", icone: "🛏️", nome: "Jogo de cama casal",                        descricao: "Lençóis macios para o lar novo.", foto: 3030684, cena: ["🛏️", "😴", "💤"], valor: 312.75 },
    { id: "aparelho",  cat: "casa", icone: "🍽️", nome: "Aparelho de jantar",                        descricao: "Para receber você em casa (avisa antes, tá?).", foto: 262882, cena: ["🍽️", "👋", "🏠"], valor: 687.15 },
    { id: "panelas",   cat: "casa", icone: "🍳", nome: "Panelas pro noivo aprender a cozinhar",     descricao: "Um investimento no futuro alimentar da noiva.", foto: 3298687, cena: ["🍳", "👨‍🍳", "😱"], valor: 846.57 },
    { id: "airfryer",  cat: "casa", icone: "🍟", nome: "Air fryer",                                 descricao: "Para tudo, até pão de queijo.", foto: 2741461, cena: ["🍟", "🍗", "😋"], valor: 523.47 },
    { id: "sofa",      cat: "casa", icone: "🛋️", nome: "Cota do sofá das maratonas de série",       descricao: "Onde os episódios \"só mais um\" acontecem.", foto: 6336657, cena: ["🛋️", "🍿", "📺"], valor: 1194.68 },
    { id: "robo",      cat: "casa", icone: "🤖", nome: "Robô aspirador",                            descricao: "Para ninguém discutir de quem é a vez de varrer.", foto: 8566426, cena: ["🤖", "🧹", "😎"], valor: 1487.32 },
    { id: "geladeira", cat: "casa", icone: "🧊", nome: "Cota da geladeira nova",                    descricao: "Para guardar as marmitas da sogra.", foto: 4061622, cena: ["🧊", "🍱", "👵"], valor: 2364.38 },
    { id: "tv",        cat: "casa", icone: "📺", nome: "Cota da TV gigante",                        descricao: "Pros jogos do noivo e pras novelas da noiva. Cabe tudo.", foto: 23495482, cena: ["📺", "⚽", "💃"], valor: 2187.64 },
    { id: "cozinha",   cat: "casa", icone: "🏡", nome: "Cota da cozinha planejada",                 descricao: "Onde o noivo vai (finalmente) aprender a cozinhar.", foto: 6283970, cena: ["🏡", "🍝", "🙏"], valor: 3478.92 },

    /* ----- PARA RIR (E AJUDAR) ----- */
    { id: "controle",  cat: "rir",  icone: "📺", nome: "Controle remoto reserva",                   descricao: "Para evitar a primeira briga do casamento.", foto: 7991795, cena: ["📺", "⚔️", "🫣"], valor: 91.37 },
    { id: "pizza",     cat: "rir",  icone: "🍕", nome: "Pizza do primeiro domingo de casados",      descricao: "Porque ninguém vai querer cozinhar.", foto: 4348786, cena: ["🍕", "🛋️", "😋"], valor: 106.83 },
    { id: "chocolate", cat: "rir",  icone: "🍫", nome: "Chocolate de reconciliação",                descricao: "Para a primeira DR. Melhor ter em estoque.", foto: 352779, cena: ["🍫", "😤", "💘"], valor: 112.29 },
    { id: "ressaca",   cat: "rir",  icone: "🥤", nome: "Kit ressaca do dia seguinte",               descricao: "Água de coco, analgésico e silêncio.", foto: 3771115, cena: ["🤕", "🥥", "💊"], valor: 117.64 },
    { id: "edredom",   cat: "rir",  icone: "🧣", nome: "Edredom extra",                             descricao: "Porque a noiva rouba o edredom todas as noites.", foto: 7623558, cena: ["🛌", "🥶", "😤"], valor: 246.35 },
    { id: "sono",      cat: "rir",  icone: "😴", nome: "Vale dormir até meio-dia depois da festa",  descricao: "Não perturbe. Estamos casados e cansados.", foto: 7555900, cena: ["😴", "💤", "🚫"], valor: 136.46 },
    { id: "paciencia", cat: "rir",  icone: "🛍️", nome: "Paciência pro noivo nas compras",           descricao: "\"Só vou dar uma olhadinha\" — a noiva, há 3 horas.", foto: 5869605, cena: ["🛍️", "⏳", "🫠"], valor: 144.93 },
    { id: "ronco",     cat: "rir",  icone: "🎧", nome: "Fone de ouvido pro ronco do noivo",         descricao: "Para a noiva conseguir dormir em paz.", foto: 7556565, cena: ["🎧", "😴", "📢"], valor: 212.68 },
    { id: "razao",     cat: "rir",  icone: "👑", nome: "Certificado: a noiva sempre tem razão",     descricao: "Válido por toda a vida. Sem direito a recurso.", foto: 5729222, cena: ["👑", "👰", "✅"], valor: 192.87 },
    { id: "datas",     cat: "rir",  icone: "📅", nome: "Garantia de que o noivo vai lembrar das datas", descricao: "Aniversário de namoro, de casamento, do primeiro beijo…", foto: 8933374, cena: ["📅", "🧠", "💐"], valor: 201.43 },
    { id: "dr",        cat: "rir",  icone: "🍷", nome: "Kit DR resolvida (vinho + chocolate)",      descricao: "Resolve 9 em cada 10 discussões.", foto: 2101186, cena: ["🍷", "🍫", "🕊️"], valor: 183.52 },
    { id: "luz",       cat: "rir",  icone: "💡", nome: "Primeira conta de luz da casa nova",        descricao: "A parte nada romântica da vida a dois.", foto: 7926672, cena: ["💡", "💸", "😵"], valor: 416.83 },
    { id: "jogo",      cat: "rir",  icone: "⚽", nome: "Ingresso pro jogo do time do noivo",        descricao: "Para ele parar de pedir pra assistir na casa do sogro.", foto: 17071576, cena: ["⚽", "🏟️", "📣"], valor: 391.58 },
    { id: "spa",       cat: "rir",  icone: "💅", nome: "Dia de salão pra noiva se recuperar dos preparativos", descricao: "Ela organizou tudo. Ela merece.", foto: 19239100, cena: ["💅", "💇‍♀️", "✨"], valor: 338.62 },
    { id: "filhos",    cat: "rir",  icone: "🙊", nome: "Taxa pra não perguntar \"e os filhos?\" na festa", descricao: "Pagou, tá liberado de puxar o assunto. Até o próximo ano.", foto: 3822693, cena: ["🙊", "👶", "❓"], valor: 468.74 },
    { id: "culinaria", cat: "rir",  icone: "👨‍🍳", nome: "Curso de culinária pro noivo",              descricao: "Porque miojo não é janta.", foto: 29514695, cena: ["👨‍🍳", "🍜", "🚫"], valor: 984.26 },
    { id: "terno",     cat: "rir",  icone: "🤵", nome: "Ajuda para pagar o terno do noivo",         descricao: "Ele ficou lindo. O cartão dele, nem tanto.", foto: 17015332, cena: ["🤵", "💳", "😅"], valor: 793.28 },
    { id: "vestido",   cat: "rir",  icone: "👗", nome: "Ajuda para pagar o vestido da noiva",       descricao: "Valeu cada centavo. Mas foram muitos centavos.", foto: 7666509, cena: ["👰", "💸", "✨"], valor: 578.36 },
    { id: "sogra",     cat: "rir",  icone: "🏠", nome: "Cota do primeiro aluguel",                  descricao: "Para os noivos não precisarem morar com a sogra.", foto: 7937959, cena: ["🏠", "🔑", "🏃"], valor: 741.63 },
    { id: "bebe",      cat: "rir",  icone: "👶", nome: "Fundo pro primeiro bebê",                   descricao: "Quando vier. Sem pressão, tá, família?", foto: 12243589, cena: ["👶", "🍼", "🤞"], valor: 1263.57 }
  ],
  /* Permite que o convidado escolha qualquer valor a partir de valorMinimoLivre (somente Pix) */
  presenteValorLivre: false,

  /* ---------- 8. HOSPEDAGEM (para quem vem de fora) ---------- */
  hospedagem: [
    { nome: "Sugestão de hotel 1", info: "Edite em config.js: nome, distância e telefone.", link: "" },
    { nome: "Sugestão de hotel 2", info: "Edite em config.js: nome, distância e telefone.", link: "" }
  ],

  /* ---------- 9. PERGUNTAS FREQUENTES ---------- */
  faq: [
    { p: "Posso levar alguém que não está no convite?", r: "Nosso RSVP é nominal: o número de acompanhantes de cada convite já está definido. Se tiver alguma dúvida, fale com a gente pelo WhatsApp." },
    { p: "Crianças são bem-vindas?", r: "Sim, desde que estejam incluídas no seu convite como acompanhantes." },
    { p: "Até quando devo confirmar presença?", r: "Pedimos que confirme até 14/03/2027. Depois dessa data o formulário é encerrado." },
    { p: "Posso mudar minha resposta?", r: "Pode! Até o prazo, basta entrar novamente com seu código de convite e enviar uma nova resposta." },
    { p: "É seguro pagar o presente pelo site?", r: "Sim. O Pix é feito pelo aplicativo do seu banco. No cartão, você é levado para a página segura da empresa de pagamentos — o nosso site nunca vê nem guarda os dados do seu cartão." },
    { p: "Posso parcelar o presente no cartão?", r: "Sim, em até 12x. Os juros do parcelamento ficam por conta de quem presenteia; à vista, no crédito ou no Pix, não há acréscimo." },
    { p: "Haverá estacionamento?", r: "Edite esta resposta em config.js com as informações de estacionamento da igreja e do sítio." }
  ],

  /* ---------- 10. CONVIDADOS DE DEMONSTRAÇÃO ----------
     Usado APENAS enquanto apiUrl estiver vazio, para vocês testarem.
     A lista real fica na Planilha do Google (fica escondida do público). */
  convidadosDemo: [
    { codigo: "TESTE1", nome: "Família Silva", pessoas: "Carlos Silva; Ana Silva; Pedro Silva (criança)" },
    { codigo: "TESTE2", nome: "Maria e José",  pessoas: "Maria Souza; José Souza" },
    { codigo: "TESTE3", nome: "João Pereira",  pessoas: "João Pereira" }
  ]
};
