import type { ImageMetadata } from 'astro';

// Uma foto por serviço (src/assets/fotos/<slug>.jpg). Origem de cada foto em fotos/CREDITOS.md.
// Os originais ficam em fotos/<slug>/ na raiz do repositório (ver fotos/README.md).
// Enquanto um serviço não tiver foto, o site mostra o ícone do serviço no lugar.
const arquivos = import.meta.glob<{ default: ImageMetadata }>('../assets/fotos/*.jpg', { eager: true });

const alts: Record<string, string> = {
  'desentupimento-de-pia': 'Profissional desentupindo pia com desentupidor',
  'desentupimento-de-vaso-sanitario': 'Vaso sanitário branco em banheiro',
  'desentupimento-de-ralo': 'Desentupimento de ralo com cabo de mola',
  'desentupimento-de-cano': 'Máquina rotativa desentupindo cano de esgoto',
  'desentupimento-de-esgoto': 'Desentupimento de esgoto com mangueira de alta pressão',
  'desentupimento-de-rede-de-esgoto': 'Hidrojateamento de rede de esgoto pelo poço de visita',
  'desentupimento-de-coluna': 'Desentupimento de coluna com hidrojateamento pela pia da cozinha',
  hidrojateamento: 'Hidrojateamento de tubulação com jato de água em alta pressão',
  'limpeza-de-fossa': 'Caminhão limpa fossa fazendo a sucção com mangueira',
  'limpeza-de-caixa-de-gordura': 'Profissional fazendo limpeza de caixa de gordura',
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
