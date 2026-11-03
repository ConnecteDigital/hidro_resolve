// Dados centrais da empresa. Altere aqui e o site inteiro é atualizado.

// Formato: 55 + DDD + número, só dígitos
const PHONE_DIGITS = '5519971522046';

export const site = {
  name: 'Hidro Resolve',
  legalName: 'Desentupidora Hidro Resolve',
  url: 'https://desentupidorahidroresolve.com.br',
  // Cidade-base usada no schema (endereço). Títulos da home não citam cidade.
  city: 'Campinas',
  state: 'SP',
  region: 'Campinas e região',
  phoneDigits: PHONE_DIGITS,
  // Exibição: (19) 97152-2046
  phoneDisplay: `(${PHONE_DIGITS.slice(2, 4)}) ${PHONE_DIGITS.slice(4, 9)}-${PHONE_DIGITS.slice(9)}`,
  tel: `tel:+${PHONE_DIGITS}`,
  arrivalMinutes: 20,
  description:
    'Desentupidora 24 horas no interior: pia, ralo, vaso, cano, esgoto, rede, coluna, hidrojateamento, limpa fossa e caixa de gordura. Atendimento emergencial, chegamos em até 20 minutos.',
};

export const DEFAULT_WHATSAPP_MESSAGE = 'Olá! Vim pelo site da Hidro Resolve e preciso de uma desentupidora.';

export function whatsappUrl(message: string = DEFAULT_WHATSAPP_MESSAGE) {
  return `https://api.whatsapp.com/send?phone=${site.phoneDigits}&text=${encodeURIComponent(message)}`;
}

// Tag do Google (gtag.js). Deixe vazio até ter o ID (ex.: 'G-XXXXXXX' ou 'AW-XXXXXXX').
export const googleTagId = '';

// Contêiner do Google Tag Manager (ex.: 'GTM-XXXXXXX'). Vazio = não instala.
export const gtmId = '';
