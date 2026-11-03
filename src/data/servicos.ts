import type { IconName } from './icons';

export interface Faq {
  q: string;
  a: string;
}

export interface Servico {
  slug: string;
  nome: string;
  // Palavra-chave principal da página (usada no H1 e no title)
  keyword: string;
  resumo: string;
  metaDescription: string;
  icon: IconName;
  intro: string[];
  sinais: string[];
  comoFazemos: string[];
  faq: Faq[];
  destaque?: boolean;
}

export const servicos: Servico[] = [
  {
    slug: 'desentupimento-de-pia',
    nome: 'Desentupimento de Pia',
    keyword: 'Desentupimento de pia 24 horas',
    resumo: 'Pia da cozinha, do banheiro e tanque desentupidos sem quebrar a bancada nem o piso.',
    metaDescription:
      'Desentupimento de pia 24 horas em Campinas e região: cozinha, banheiro e tanque. Atendimento emergencial, chegamos em até 20 minutos. Chame no WhatsApp.',
    icon: 'sink',
    destaque: true,
    intro: [
      'Pia entupida é um dos chamados mais comuns, principalmente na cozinha, onde gordura, borra de café e restos de comida vão se acumulando no sifão e na tubulação até a água parar de descer.',
      'A Hidro Resolve atende desentupimento de pia 24 horas. Usamos máquina de cabo rotativo (mola) e, quando a gordura já endureceu no cano, hidrojateamento, para limpar a tubulação por dentro sem quebrar azulejo ou bancada.',
    ],
    sinais: [
      'Água demorando para descer ou parada na cuba',
      'Cheiro ruim saindo do ralo da pia',
      'Barulho de borbulhas quando a água escoa',
      'Água voltando no tanque ou no ralo da área de serviço',
      'Desentupidor de borracha e produtos caseiros não resolveram',
    ],
    comoFazemos: [
      'Desmontamos e limpamos o sifão e a válvula da pia',
      'Passamos a máquina de cabo rotativo até o ponto da obstrução',
      'Se houver gordura endurecida, fazemos hidrojateamento do trecho',
      'Testamos o escoamento com água corrente antes de ir embora',
    ],
    faq: [
      {
        q: 'Soda cáustica resolve pia entupida?',
        a: 'Às vezes alivia na hora, mas pode danificar canos e sifões e reagir com a gordura, formando uma massa ainda mais dura. Em entupimento recorrente, o certo é a limpeza mecânica da tubulação.',
      },
      {
        q: 'Precisa quebrar a parede para desentupir a pia?',
        a: 'Na grande maioria dos casos, não. A máquina alcança a obstrução por dentro do cano. Só indicamos abertura se o cano estiver quebrado, e sempre com o seu aceite antes.',
      },
    ],
  },
  {
    slug: 'desentupimento-de-vaso-sanitario',
    nome: 'Desentupimento de Vaso Sanitário',
    keyword: 'Desentupimento de vaso sanitário 24 horas',
    resumo: 'Vaso que não desce, transborda ou volta água. Desentupimento sem retirar a louça sempre que possível.',
    metaDescription:
      'Desentupimento de vaso sanitário 24h em Campinas e região. Vaso transbordando ou que não desce? Chegamos em até 20 minutos. Atendimento emergencial.',
    icon: 'toilet',
    destaque: true,
    intro: [
      'Vaso sanitário entupido é emergência: ninguém pode esperar até o dia seguinte com o banheiro parado. Os motivos mais comuns são excesso de papel, lenço umedecido, absorvente, fio dental e objetos que caem na louça.',
      'Atendemos 24 horas e usamos equipamentos próprios para vaso, como desentupidor de pressão e cabo rotativo, que alcançam a obstrução sem precisar retirar a louça na maioria dos casos.',
    ],
    sinais: [
      'Água subindo até a borda quando dá descarga',
      'Vaso descendo devagar ou com nível de água alto',
      'Barulho de borbulhas no vaso quando outro ralo escoa',
      'Mau cheiro de esgoto no banheiro',
      'Água voltando pelo ralo do box ao dar descarga',
    ],
    comoFazemos: [
      'Avaliamos se a obstrução está na louça, no ramal ou no esgoto',
      'Usamos desentupidor de pressão ou cabo rotativo próprio para vaso',
      'Se o problema estiver na rede, desobstruímos pela caixa de inspeção',
      'Damos várias descargas de teste e deixamos o banheiro limpo',
    ],
    faq: [
      {
        q: 'Precisa tirar o vaso do lugar para desentupir?',
        a: 'Na maioria dos atendimentos, não. A retirada só é necessária quando há um objeto preso dentro da própria louça.',
      },
      {
        q: 'Lenço umedecido entope o vaso?',
        a: 'Sim, é uma das principais causas. Mesmo os que dizem ser “descartáveis” não se desfazem como papel higiênico e formam bolos na tubulação.',
      },
    ],
  },
  {
    slug: 'desentupimento-de-ralo',
    nome: 'Desentupimento de Ralo',
    keyword: 'Desentupimento de ralo 24 horas',
    resumo: 'Ralo do box, da área de serviço e do quintal desentupidos e sem mau cheiro.',
    metaDescription:
      'Desentupimento de ralo 24h em Campinas e região: box, área de serviço, quintal e garagem. Acabamos com água parada e mau cheiro. Chegamos em até 20 minutos.',
    icon: 'drain',
    destaque: true,
    intro: [
      'Cabelo, sabão, areia e folhas são os vilões dos ralos. Com o tempo eles formam uma massa que segura a água no box ou deixa o quintal alagado na primeira chuva.',
      'Desentupimos ralos de banheiro, área de serviço, cozinha, quintal e garagem, limpando também a caixa sifonada, que é onde o problema costuma estar e de onde vem o mau cheiro.',
    ],
    sinais: [
      'Água acumulando no box durante o banho',
      'Cheiro de esgoto vindo do ralo',
      'Ralo do quintal ou da garagem transbordando na chuva',
      'Água voltando no ralo quando a máquina de lavar esvazia',
      'Baratas e insetos saindo pelo ralo',
    ],
    comoFazemos: [
      'Abrimos e limpamos a caixa sifonada',
      'Desobstruímos o ramal com cabo rotativo ou hidrojateamento',
      'Conferimos o fecho hídrico, que impede a volta do mau cheiro',
      'Testamos com água corrente e deixamos o local limpo',
    ],
    faq: [
      {
        q: 'Por que o ralo do banheiro fica com cheiro de esgoto?',
        a: 'Normalmente é a caixa sifonada suja ou sem o fecho hídrico, a camada de água que bloqueia o gás do esgoto. Limpando e ajustando a caixa, o cheiro some.',
      },
      {
        q: 'Vocês desentopem ralo de quintal e garagem?',
        a: 'Sim. Ralos externos costumam entupir com terra, folhas e areia. Fazemos a limpeza completa até a caixa de passagem.',
      },
    ],
  },
  {
    slug: 'desentupimento-de-cano',
    nome: 'Desentupimento de Cano',
    keyword: 'Desentupimento de cano e tubulação',
    resumo: 'Tubulações internas e externas desobstruídas por dentro, sem quebra-quebra.',
    metaDescription:
      'Desentupimento de cano e tubulação 24h em Campinas e região. Máquina rotativa e hidrojateamento, sem quebrar parede. Chegamos em até 20 minutos.',
    icon: 'pipe',
    intro: [
      'Quando mais de um ponto da casa começa a escoar devagar, o entupimento geralmente está no cano que liga esses pontos, dentro da parede ou embaixo do piso.',
      'Fazemos o desentupimento de canos de PVC, ferro e cerâmica com máquinas de cabo rotativo e hidrojateamento, alcançando a obstrução por dentro, sem abrir parede nem piso sempre que possível.',
    ],
    sinais: [
      'Vários ralos e pias escoando devagar ao mesmo tempo',
      'Água voltando em outro cômodo ao usar a pia ou o chuveiro',
      'Barulho de gorgolejo nos canos',
      'Entupimento que volta poucos dias depois de desentupir',
    ],
    comoFazemos: [
      'Localizamos o trecho entupido pelos pontos de acesso da tubulação',
      'Escolhemos o equipamento conforme o material e o diâmetro do cano',
      'Desobstruímos e, se necessário, fazemos hidrojateamento para limpar as paredes do cano',
      'Testamos todos os pontos ligados à tubulação',
    ],
    faq: [
      {
        q: 'Como vocês acham o ponto do entupimento?',
        a: 'Pelo comportamento dos ralos e pias e pelos pontos de acesso, como caixas de inspeção e sifões. Assim chegamos ao trecho certo sem abrir parede.',
      },
      {
        q: 'O entupimento sempre volta. O que pode ser?',
        a: 'Pode ser gordura incrustada, raiz invadindo o cano ou um trecho com caimento errado. Nesses casos indicamos hidrojateamento e explicamos o que precisa ser corrigido.',
      },
    ],
  },
  {
    slug: 'desentupimento-de-esgoto',
    nome: 'Desentupimento de Esgoto',
    keyword: 'Desentupimento de esgoto 24 horas',
    resumo: 'Esgoto residencial e comercial, caixas de inspeção e ramais desobstruídos 24h.',
    metaDescription:
      'Desentupimento de esgoto 24h em Campinas e região: caixa de inspeção, ramal e saída para a rua. Atendimento emergencial, chegamos em até 20 minutos.',
    icon: 'sewer',
    destaque: true,
    intro: [
      'Esgoto entupido costuma aparecer como caixa de inspeção transbordando, mau cheiro forte no quintal ou todos os vasos e ralos da casa parando ao mesmo tempo.',
      'A Hidro Resolve faz desentupimento de esgoto em casas, apartamentos, comércios e empresas, do ramal interno até a saída para a rede pública, com máquinas rotativas e hidrojateamento.',
    ],
    sinais: [
      'Caixa de inspeção ou de passagem transbordando',
      'Todos os vasos e ralos da casa escoando mal',
      'Mau cheiro forte no quintal ou na calçada',
      'Retorno de esgoto pelo ralo mais baixo da casa',
    ],
    comoFazemos: [
      'Abrimos as caixas de inspeção para localizar o trecho entupido',
      'Desobstruímos com cabo rotativo ou hidrojateamento de alta pressão',
      'Limpamos as caixas e retiramos os resíduos',
      'Testamos o fluxo até a saída para a rede pública',
    ],
    faq: [
      {
        q: 'O entupimento é meu ou da concessionária?',
        a: 'Se o problema está dentro do imóvel, até a caixa de ligação, a responsabilidade é do morador. Avaliamos no local e, se o entupimento estiver na rede pública, orientamos como acionar a concessionária.',
      },
      {
        q: 'Vocês atendem esgoto de comércio e restaurante?',
        a: 'Sim. Atendemos comércios, restaurantes, condomínios e indústrias, inclusive fora do horário comercial para não parar o funcionamento.',
      },
    ],
  },
  {
    slug: 'desentupimento-de-rede-de-esgoto',
    nome: 'Desentupimento de Rede',
    keyword: 'Desentupimento de rede de esgoto',
    resumo: 'Redes coletoras de condomínios, empresas e indústrias limpas com hidrojateamento.',
    metaDescription:
      'Desentupimento de rede de esgoto e pluvial em Campinas e região: condomínios, empresas e indústrias. Hidrojateamento 24h, chegamos em até 20 minutos.',
    icon: 'network',
    intro: [
      'Redes de esgoto e de águas pluviais de condomínios, galpões e indústrias têm trechos longos e de maior diâmetro, que acumulam areia, gordura e resíduos ao longo dos anos.',
      'Fazemos o desentupimento e a limpeza de redes coletoras com hidrojateamento de alta pressão, trecho a trecho entre as caixas de passagem, devolvendo a capacidade de vazão da tubulação.',
    ],
    sinais: [
      'Caixas de passagem do condomínio transbordando',
      'Alagamento em pátios e estacionamentos na chuva',
      'Mau cheiro nas áreas comuns',
      'Entupimentos repetidos em várias unidades ligadas à mesma rede',
    ],
    comoFazemos: [
      'Mapeamos as caixas de passagem e o sentido do fluxo',
      'Desobstruímos e lavamos a rede com hidrojateamento',
      'Retiramos areia e resíduos acumulados nas caixas',
      'Testamos a vazão de cada trecho atendido',
    ],
    faq: [
      {
        q: 'Vocês fazem manutenção preventiva de rede?',
        a: 'Sim. Para condomínios, empresas e restaurantes, a limpeza periódica da rede evita entupimentos de emergência. Combinamos a frequência conforme o uso.',
      },
      {
        q: 'Atendem rede de águas pluviais?',
        a: 'Sim. Limpamos redes pluviais, calhas de piso e caixas de areia, que entopem com terra e folhas.',
      },
    ],
  },
  {
    slug: 'desentupimento-de-coluna',
    nome: 'Desentupimento de Coluna',
    keyword: 'Desentupimento de coluna de prédio',
    resumo: 'Colunas de esgoto e de gordura de prédios desobstruídas de cima a baixo.',
    metaDescription:
      'Desentupimento de coluna de esgoto e de gordura em prédios de Campinas e região. Atendimento 24h para condomínios, chegamos em até 20 minutos.',
    icon: 'building',
    intro: [
      'Em prédios, a coluna recebe o esgoto de todos os andares. Quando ela entope, o retorno aparece nos apartamentos dos andares de baixo, muitas vezes pela pia da cozinha ou pelo ralo da área de serviço.',
      'Atendemos condomínios residenciais e comerciais com desentupimento de colunas de esgoto e de gordura, trabalhando pelos pontos de acesso e pelo térreo, com o mínimo de transtorno para os moradores.',
    ],
    sinais: [
      'Retorno de água e espuma na pia ou no tanque dos primeiros andares',
      'Vários apartamentos da mesma prumada com o mesmo problema',
      'Mau cheiro na área de serviço ou no shaft',
      'Caixa de gordura do térreo transbordando',
    ],
    comoFazemos: [
      'Identificamos a coluna e o andar onde está a obstrução',
      'Desobstruímos com cabo rotativo e hidrojateamento pelos pontos de acesso',
      'Limpamos a caixa de gordura ou de inspeção que recebe a coluna',
      'Testamos o escoamento com os moradores dos andares afetados',
    ],
    faq: [
      {
        q: 'Quem paga o desentupimento da coluna?',
        a: 'Em geral a coluna é área comum, então o serviço é contratado pelo condomínio. O síndico ou a administradora pode chamar a gente direto pelo WhatsApp.',
      },
      {
        q: 'Precisa entrar em todos os apartamentos?',
        a: 'Normalmente não. Trabalhamos pelos pontos de acesso da coluna e entramos apenas nas unidades onde há retorno, quando necessário.',
      },
    ],
  },
  {
    slug: 'hidrojateamento',
    nome: 'Hidrojateamento',
    keyword: 'Hidrojateamento de tubulações',
    resumo: 'Água em alta pressão para remover gordura, lodo, areia e raízes das tubulações.',
    metaDescription:
      'Hidrojateamento de tubulações, redes e caixas em Campinas e região. Remove gordura, lodo e raízes sem quebrar. Atendimento 24h, chegamos em até 20 minutos.',
    icon: 'jet',
    destaque: true,
    intro: [
      'O hidrojateamento usa água em alta pressão, por meio de uma mangueira com bico especial, para desobstruir e lavar a parede interna dos canos. Ele remove gordura, lodo, areia e raízes que a máquina comum só perfura.',
      'É o serviço indicado para entupimentos que voltam, tubulações de restaurantes e cozinhas industriais, redes de condomínios e manutenção preventiva.',
    ],
    sinais: [
      'Entupimento que volta pouco tempo depois de desentupido',
      'Tubulação com muita gordura acumulada',
      'Raízes invadindo a rede de esgoto',
      'Rede de condomínio ou empresa sem limpeza há muito tempo',
    ],
    comoFazemos: [
      'Avaliamos o diâmetro e o material da tubulação',
      'Escolhemos o bico e a pressão adequados',
      'Fazemos o jateamento trecho a trecho, entre as caixas de acesso',
      'Retiramos os resíduos e testamos a vazão',
    ],
    faq: [
      {
        q: 'Hidrojateamento estraga o cano?',
        a: 'Não, quando feito com a pressão e o bico corretos para cada tubulação. Por isso avaliamos o material e o estado do cano antes de começar.',
      },
      {
        q: 'Qual a diferença entre hidrojateamento e desentupimento comum?',
        a: 'O desentupimento com máquina abre passagem na obstrução. O hidrojateamento, além de desobstruir, lava a parede interna do cano, o que reduz a chance de entupir de novo.',
      },
    ],
  },
  {
    slug: 'limpeza-de-fossa',
    nome: 'Limpeza de Fossa',
    keyword: 'Limpa fossa 24 horas',
    resumo: 'Esgotamento e limpeza de fossa séptica e sumidouro com caminhão limpa fossa.',
    metaDescription:
      'Limpa fossa 24h em Campinas e região: esgotamento de fossa séptica, sumidouro e poço negro em casas, chácaras e empresas. Chegamos em até 20 minutos.',
    icon: 'truck',
    destaque: true,
    intro: [
      'Em casas, chácaras, sítios e condomínios que não estão ligados à rede de esgoto, a fossa precisa ser esvaziada periodicamente. Quando ela enche, o esgoto volta pelos vasos e ralos e o mau cheiro toma conta do terreno.',
      'A Hidro Resolve faz limpeza de fossa séptica, sumidouro e poço negro com caminhão limpa fossa a vácuo, e dá destino ao resíduo conforme as normas ambientais.',
    ],
    sinais: [
      'Vasos e ralos escoando devagar em toda a casa',
      'Esgoto voltando pelos ralos mais baixos',
      'Mau cheiro forte no quintal, perto da fossa',
      'Terreno encharcado ou com mato mais verde em volta da fossa',
      'Muito tempo sem limpeza (o comum é a cada 1 ou 2 anos)',
    ],
    comoFazemos: [
      'Localizamos e abrimos a tampa da fossa',
      'Fazemos a sucção completa do conteúdo com o caminhão a vácuo',
      'Verificamos entrada, saída e sumidouro',
      'Fechamos a fossa e orientamos sobre a próxima limpeza',
    ],
    faq: [
      {
        q: 'De quanto em quanto tempo devo limpar a fossa?',
        a: 'Depende do tamanho da fossa e do número de moradores, mas em residências o comum é a cada 1 ou 2 anos. Sinais como ralos lentos e mau cheiro indicam que já passou da hora.',
      },
      {
        q: 'Vocês atendem chácaras e sítios?',
        a: 'Sim. Atendemos chácaras, sítios, condomínios e empresas em Campinas e região, inclusive em áreas rurais.',
      },
    ],
  },
  {
    slug: 'limpeza-de-caixa-de-gordura',
    nome: 'Limpeza de Caixa de Gordura',
    keyword: 'Limpeza de caixa de gordura',
    resumo: 'Caixa de gordura residencial, de condomínio e de restaurante limpa e sem mau cheiro.',
    metaDescription:
      'Limpeza de caixa de gordura em Campinas e região: casas, condomínios, restaurantes e cozinhas industriais. Atendimento 24h, chegamos em até 20 minutos.',
    icon: 'grease',
    destaque: true,
    intro: [
      'A caixa de gordura segura a gordura da pia da cozinha antes que ela chegue ao esgoto. Quando fica cheia, a gordura passa para a tubulação, a pia entope e o cheiro fica insuportável.',
      'Fazemos a limpeza de caixas de gordura em casas, condomínios, restaurantes, padarias e cozinhas industriais, com retirada dos resíduos e limpeza das entradas e saídas.',
    ],
    sinais: [
      'Pia da cozinha entupindo com frequência',
      'Mau cheiro de gordura vindo do quintal ou da cozinha',
      'Caixa de gordura transbordando',
      'Camada grossa de gordura endurecida na caixa',
    ],
    comoFazemos: [
      'Abrimos a caixa e retiramos a gordura e os resíduos',
      'Limpamos as paredes, a entrada e a saída da caixa',
      'Se a tubulação estiver engordurada, fazemos hidrojateamento',
      'Fechamos a caixa e orientamos sobre a frequência de limpeza',
    ],
    faq: [
      {
        q: 'De quanto em quanto tempo limpar a caixa de gordura?',
        a: 'Em casas, geralmente a cada 3 a 6 meses. Em restaurantes e cozinhas industriais, a limpeza pode precisar ser mensal ou até semanal, conforme o volume.',
      },
      {
        q: 'Vocês fazem limpeza programada para restaurantes?',
        a: 'Sim. Combinamos uma rotina de limpeza para o seu estabelecimento não parar por causa de entupimento.',
      },
    ],
  },
];

export const servicosDestaque = servicos.filter((s) => s.destaque);

export function getServico(slug: string) {
  return servicos.find((s) => s.slug === slug);
}
