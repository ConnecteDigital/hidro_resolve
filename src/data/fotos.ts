import type { ImageMetadata } from 'astro';

// Uma foto por serviço (src/assets/fotos/<slug>.jpg). Enquanto não houver fotos próprias,
// use apenas imagens com licença de uso comercial (ex.: Unsplash, Pexels) e nunca do Google Imagens.
// Os originais ficam em fotos/<slug>/ na raiz do repositório (ver fotos/README.md).
// Enquanto um serviço não tiver foto, o site mostra o ícone do serviço no lugar.
const arquivos = import.meta.glob<{ default: ImageMetadata }>('../assets/fotos/*.jpg', { eager: true });

const alts: Record<string, string> = {
  'desentupimento-de-pia': 'Mão com luva limpando pia de cozinha de inox',
  'desentupimento-de-vaso-sanitario': 'Vaso sanitário branco em banheiro',
  'desentupimento-de-ralo': 'Banheiro com box de vidro e ralo de chuveiro',
  'desentupimento-de-cano': 'Profissional trabalhando em conexão de tubulação',
  'desentupimento-de-esgoto': 'Trabalhadores fazendo manutenção em tubulação enterrada',
  'desentupimento-de-rede-de-esgoto': 'Galeria de rede de drenagem e esgoto',
  'desentupimento-de-coluna': 'Prédio residencial de vários andares',
  hidrojateamento: 'Jato de água em alta pressão usado na limpeza',
  'limpeza-de-fossa': 'Caminhão-tanque para esgotamento',
  'limpeza-de-caixa-de-gordura': 'Cozinha industrial com panelas no fogão',
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
