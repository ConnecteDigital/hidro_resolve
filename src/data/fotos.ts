import type { ImageMetadata } from 'astro';

// Uma foto por serviço (src/assets/fotos/<slug>.jpg). Enquanto não houver fotos próprias,
// use apenas imagens com licença de uso comercial (ex.: Unsplash, Pexels) e nunca do Google Imagens.
// Os originais ficam em fotos/<slug>/ na raiz do repositório (ver fotos/README.md).
// Enquanto um serviço não tiver foto, o site mostra o ícone do serviço no lugar.
const arquivos = import.meta.glob<{ default: ImageMetadata }>('../assets/fotos/*.jpg', { eager: true });

const alts: Record<string, string> = {
  'desentupimento-de-pia': 'Desentupimento de pia de cozinha',
  'desentupimento-de-vaso-sanitario': 'Desentupimento de vaso sanitário em banheiro residencial',
  'desentupimento-de-ralo': 'Desentupimento de ralo e limpeza de caixa sifonada',
  'desentupimento-de-cano': 'Desentupimento de cano com máquina de cabo rotativo',
  'desentupimento-de-esgoto': 'Desentupimento de esgoto pela caixa de inspeção',
  'desentupimento-de-rede-de-esgoto': 'Limpeza de rede de esgoto de condomínio com hidrojateamento',
  'desentupimento-de-coluna': 'Desentupimento de coluna de esgoto em prédio',
  hidrojateamento: 'Hidrojateamento de tubulação com água em alta pressão',
  'limpeza-de-fossa': 'Caminhão limpa fossa fazendo o esgotamento de fossa séptica',
  'limpeza-de-caixa-de-gordura': 'Limpeza de caixa de gordura',
};

export interface Foto {
  src: ImageMetadata;
  alt: string;
}

export function fotoDoServico(slug: string): Foto | undefined {
  const mod = arquivos[`../assets/fotos/${slug}.jpg`];
  if (!mod) return undefined;
  return { src: mod.default, alt: alts[slug] ?? 'Serviço de desentupidora' };
}

export function temFotos() {
  return Object.keys(arquivos).length > 0;
}
