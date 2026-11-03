export type Grupo = 'Principais cidades' | 'Região de Campinas';

export interface Cidade {
  slug: string;
  nome: string;
  grupo: Grupo;
  // Texto exclusivo da página para não repetir conteúdo entre cidades
  sobre: string;
  // Bairros e distritos citados na página da cidade (pode ficar vazio)
  bairros: string[];
  vizinhas: string[];
}

export const ordemGrupos: Grupo[] = ['Principais cidades', 'Região de Campinas'];
export const grupoPrioritario: Grupo = 'Principais cidades';

export const cidades: Cidade[] = [
  {
    slug: 'campinas',
    nome: 'Campinas',
    grupo: 'Principais cidades',
    sobre:
      'Campinas é a maior cidade da região e tem de tudo: prédios no Cambuí e no Centro, casas e sobrados nos bairros residenciais, condomínios em Barão Geraldo e chácaras em Sousas e Joaquim Egídio. Por isso atendemos desde pia e vaso entupidos em apartamentos até coluna de prédio, rede de condomínio e limpeza de fossa nas áreas sem rede de esgoto.',
    bairros: ['Centro', 'Cambuí', 'Taquaral', 'Barão Geraldo', 'Sousas', 'Joaquim Egídio', 'Castelo', 'Ouro Verde', 'Campo Grande', 'Nova Campinas', 'Jardim Proença'],
    vizinhas: ['Valinhos', 'Hortolândia', 'Sumaré', 'Paulínia'],
  },
  {
    slug: 'valinhos',
    nome: 'Valinhos',
    grupo: 'Principais cidades',
    sobre:
      'Valinhos tem muitos condomínios horizontais, casas de alto padrão e chácaras nas áreas mais afastadas do centro. Além do desentupimento de pia, ralo e esgoto, é comum o chamado para limpeza de fossa e de caixa de gordura em residências e chácaras.',
    bairros: ['Centro', 'Jardim Paiquerê', 'Macuco'],
    vizinhas: ['Campinas', 'Vinhedo', 'Itatiba', 'Louveira'],
  },
  {
    slug: 'vinhedo',
    nome: 'Vinhedo',
    grupo: 'Principais cidades',
    sobre:
      'Vinhedo combina centro comercial, bairros residenciais e grandes condomínios fechados, além de empresas às margens das rodovias. Atendemos casas, condomínios e empresas com desentupimento, hidrojateamento de redes e limpa fossa.',
    bairros: ['Centro', 'Capela', 'Pinheirinho'],
    vizinhas: ['Valinhos', 'Louveira', 'Itatiba', 'Campinas'],
  },
  {
    slug: 'hortolandia',
    nome: 'Hortolândia',
    grupo: 'Principais cidades',
    sobre:
      'Hortolândia cresceu rápido, com muitos conjuntos residenciais, condomínios de prédios e áreas industriais. Atendemos com frequência desentupimento de esgoto e de coluna em condomínios e limpeza de rede e de caixa de gordura em empresas.',
    bairros: ['Centro', 'Jardim Amanda', 'Jardim Rosolém', 'Jardim Santa Clara do Lago'],
    vizinhas: ['Sumaré', 'Campinas', 'Monte Mor', 'Paulínia'],
  },
  {
    slug: 'sumare',
    nome: 'Sumaré',
    grupo: 'Região de Campinas',
    sobre:
      'Sumaré tem bairros residenciais grandes, como Nova Veneza e Área Cura, e um forte polo industrial. Atendemos residências, comércios e indústrias com desentupimento de esgoto, redes e caixas de gordura, 24 horas.',
    bairros: ['Centro', 'Nova Veneza', 'Área Cura', 'Matão', 'Maria Antônia', 'Jardim Picerno'],
    vizinhas: ['Hortolândia', 'Nova Odessa', 'Campinas', 'Paulínia'],
  },
  {
    slug: 'paulinia',
    nome: 'Paulínia',
    grupo: 'Região de Campinas',
    sobre:
      'Paulínia reúne bairros residenciais, condomínios e um grande polo industrial e petroquímico. Atendemos casas e condomínios no dia a dia e empresas que precisam de hidrojateamento e limpeza de redes sem parar a operação.',
    bairros: ['Centro', 'João Aranha', 'Morumbi', 'Betel'],
    vizinhas: ['Campinas', 'Sumaré', 'Cosmópolis', 'Jaguariúna'],
  },
  {
    slug: 'indaiatuba',
    nome: 'Indaiatuba',
    grupo: 'Região de Campinas',
    sobre:
      'Indaiatuba tem muitos condomínios residenciais, bairros planejados e um distrito industrial ativo. Atendemos desentupimento de pia, vaso e esgoto em residências e limpeza de rede, coluna e caixa de gordura em condomínios e empresas.',
    bairros: ['Centro', 'Cidade Nova', 'Jardim Morada do Sol', 'Itaici'],
    vizinhas: ['Campinas', 'Monte Mor', 'Salto', 'Itupeva'],
  },
  {
    slug: 'americana',
    nome: 'Americana',
    grupo: 'Região de Campinas',
    sobre:
      'Americana tem tradição industrial, com muitos comércios e casas antigas, onde as tubulações de esgoto já têm décadas de uso. Nesses imóveis o hidrojateamento é o caminho para acabar com entupimentos que voltam.',
    bairros: ['Centro', 'Praia Azul', 'São Vito', 'Vila Santa Catarina'],
    vizinhas: ['Nova Odessa', 'Santa Bárbara d’Oeste', 'Sumaré', 'Limeira'],
  },
  {
    slug: 'nova-odessa',
    nome: 'Nova Odessa',
    grupo: 'Região de Campinas',
    sobre:
      'Nova Odessa é uma cidade residencial, com casas e condomínios, entre Sumaré e Americana. Atendemos desentupimento de pia, ralo, vaso e esgoto, além de limpa fossa em chácaras e áreas sem rede.',
    bairros: [],
    vizinhas: ['Americana', 'Sumaré', 'Santa Bárbara d’Oeste', 'Hortolândia'],
  },
  {
    slug: 'santa-barbara-d-oeste',
    nome: 'Santa Bárbara d’Oeste',
    grupo: 'Região de Campinas',
    sobre:
      'Santa Bárbara d’Oeste tem bairros residenciais extensos e muitos comércios. Atendemos 24 horas desentupimento de esgoto, ralo e vaso em residências e limpeza de caixa de gordura em restaurantes e lanchonetes.',
    bairros: [],
    vizinhas: ['Americana', 'Nova Odessa', 'Piracicaba', 'Limeira'],
  },
  {
    slug: 'jaguariuna',
    nome: 'Jaguariúna',
    grupo: 'Região de Campinas',
    sobre:
      'Jaguariúna tem condomínios, chácaras e empresas ao longo da rodovia. Nas áreas de chácara a limpeza de fossa é um dos serviços mais pedidos; nos condomínios e empresas, desentupimento de rede e hidrojateamento.',
    bairros: [],
    vizinhas: ['Campinas', 'Paulínia', 'Pedreira', 'Holambra'],
  },
  {
    slug: 'itatiba',
    nome: 'Itatiba',
    grupo: 'Região de Campinas',
    sobre:
      'Itatiba tem centro movimentado, bairros residenciais e muitas chácaras e condomínios rurais. Atendemos desde desentupimento de pia e vaso até limpeza de fossa séptica e sumidouro nas propriedades afastadas.',
    bairros: [],
    vizinhas: ['Valinhos', 'Vinhedo', 'Louveira', 'Morungaba'],
  },
  {
    slug: 'louveira',
    nome: 'Louveira',
    grupo: 'Região de Campinas',
    sobre:
      'Louveira mistura área urbana, chácaras e um polo de galpões logísticos às margens das rodovias. Atendemos residências, chácaras e empresas com desentupimento, limpa fossa e limpeza de redes.',
    bairros: [],
    vizinhas: ['Vinhedo', 'Valinhos', 'Itatiba', 'Jundiaí'],
  },
  {
    slug: 'monte-mor',
    nome: 'Monte Mor',
    grupo: 'Região de Campinas',
    sobre:
      'Monte Mor tem bairros residenciais, chácaras e áreas industriais. Em muitos pontos da cidade ainda há imóveis com fossa, por isso o limpa fossa é muito procurado, junto com o desentupimento de esgoto e de pia.',
    bairros: [],
    vizinhas: ['Hortolândia', 'Campinas', 'Indaiatuba', 'Elias Fausto'],
  },
];

export function cidadePath(c: Cidade) {
  return `/desentupidora-em-${c.slug}/`;
}

export function cidadesPorGrupo() {
  return ordemGrupos
    .map((grupo) => ({ grupo, cidades: cidades.filter((c) => c.grupo === grupo) }))
    .filter((g) => g.cidades.length > 0);
}
