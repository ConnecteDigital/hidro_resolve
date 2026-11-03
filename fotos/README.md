# Fotos dos serviços

Coloque as fotos reais de cada serviço na pasta com o nome dele (por exemplo `fotos/limpeza-de-fossa/foto.jpg`).
Ao rodar `npm run dev` ou `npm run build`, a primeira foto de cada pasta é otimizada e vira
`src/assets/fotos/<pasta>.jpg`, aparecendo no card do serviço, na página do serviço e na galeria.

- A foto de `desentupimento-de-esgoto` também é usada como fundo do topo da página inicial.
- A pasta `geral` fica guardada como acervo e não é publicada.
- Para trocar uma foto, apague o `.jpg` correspondente em `src/assets/fotos/` e rode o build de novo.
