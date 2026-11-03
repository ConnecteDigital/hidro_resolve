# Hidro Resolve · site

Site institucional com foco em SEO local (desentupidora e limpa fossa 24h em Campinas e região, DDD 19). Feito com [Astro](https://astro.build), gera páginas estáticas e pode ser publicado na Vercel.

## Rodar localmente

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # gera dist/
```

## Onde editar

| O quê | Arquivo |
| --- | --- |
| Telefone/WhatsApp, nome, tempo de chegada, Google Tag e GTM | `src/data/site.ts` |
| Serviços (textos, FAQ, SEO) | `src/data/servicos.ts` |
| Cidades atendidas | `src/data/cidades.ts` |
| Posts do blog | `src/content/blog/*.md` |
| Fotos dos serviços | `fotos/<serviço>/` (ver `fotos/README.md`) |
| Logo (PNG sem fundo) | `src/assets/logo.png` (site) e `public/logo.png` (Google/compartilhamento) |

Cada serviço vira `/servicos/<slug>/`, cada cidade vira `/desentupidora-em-<slug>/` e cada post vira `/blog/<arquivo>/`. O sitemap é gerado automaticamente.

A Tag do Google e o GTM só são instalados quando os IDs forem preenchidos em `src/data/site.ts`.
