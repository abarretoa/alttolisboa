---
name: altto-art-direction
description: Direção de arte oficial da marca Altto (restaurante/hospitality) — editorial contemporâneo, minimalismo premium, fotografia como protagonista, paleta reduzida e escura, composição assimétrica. Use SEMPRE que for criar ou revisar qualquer peça visual do projeto Altto — telas de UI, artifacts, mockups, posts, cardápios, apresentações, imagens geradas, arquivos Figma — mesmo que o pedido não mencione "direção de arte" explicitamente (ex: "faz um post pro Instagram", "cria a tela de reservas", "gera uma imagem do prato"). Consulte antes de escolher cores, fontes, grid ou estilo de fotografia, e antes de aceitar qualquer resultado como pronto.
---

# Direção de Arte — Altto

A Altto é um restaurante. A direção de arte precisa parecer feita sob medida para
esse lugar específico — não um template de "restaurante genérico" nem uma
estética visivelmente gerada por IA. Se o resultado poderia ser reaproveitado
por qualquer outro restaurante trocando o logo, ele está errado.

## Essência da marca

Editorial contemporâneo + minimalismo premium. A referência mental é uma
revista de design/hospitality bem produzida, não um painel de admin nem um
folder de marketing corporativo. A sensação-alvo: urbana, elegante, social,
contemporânea — premium mas acessível. Nunca "luxo corporativo" (frio,
distante, cheio de serifs douradas e brasões).

Ao tomar qualquer decisão visual, pergunte: isso parece uma escolha editorial
deliberada, ou o default de uma ferramenta? Se for a segunda, refaça.

## Paleta

Reduzida e escura, com espaço negativo usado com intenção — nunca só "fundo
escuro para parecer premium".

- Base: tons profundos e quase neutros (carvão, preto quente, castanhos muito
  escuros) — evite preto puro (#000) chapado, que acha achatado; prefira
  escuros com uma leve temperatura (quente ou fria, mas consistente).
- Contraponto: off-whites/creme quentes para texto e respiro, não branco puro.
- Acento: no máximo uma ou duas cores de apoio (terrosos, âmbar, vinho,
  metálicos foscos), usadas com moderação — como tempero, não como base.
- Este projeto ainda não tem os tokens exatos (hex/HSL) documentados aqui.
  Não invente valores definitivos: se precisar de precisão de pixel, pergunte
  ao usuário ou procure um guia de marca antes de fixar hex codes num
  arquivo de produção. Está tudo bem em protótipos usar valores aproximados
  que sigam esta descrição, deixando claro que são provisórios.

## Tipografia

Expressiva, não neutra. A tipografia é uma peça de design, não só
informação — pense em como uma boa revista trata título vs. legenda vs. corpo.

- Contraste de escala forte entre títulos e corpo de texto — títulos podem
  ser grandes e assumir protagonismo, o corpo permanece discreto e legível.
- Prefira uma serifada com personalidade (editorial, com caráter) para
  títulos/destaques e uma sans-serif limpa para corpo/UI — ou uma única
  família bem escolhida com pesos e itálicos expressivos, se for mais
  coerente com o que já existe.
- Evite fontes de sistema genéricas (Arial, default de framework) em
  qualquer peça voltada ao usuário final.

## Fotografia

A fotografia é protagonista, não ilustração de apoio.

- Composições com respiro, luz natural/ambiente, imperfeição controlada —
  nunca still de banco de imagens com iluminação de estúdio genérica e
  sorrisos perfeitos.
- Prato, ambiente e pessoas devem parecer reais e específicos daquele
  restaurante, não substituíveis por qualquer imagem de stock.
- Ao gerar imagens (Higgsfield ou outra ferramenta), direcione explicitamente
  para esse tom: luz quente/ambiente, enquadramento assimétrico, grão sutil,
  nada de simetria perfeita nem "brilho de render 3D".

## Composição e layout

- Assimetria com ritmo — não simetria "seguranca". O olho deve se mover pela
  página como numa spread de revista, não escanear uma grade uniforme.
- Espaço negativo é um elemento de design ativo: dar respiro a um elemento
  importante comunica hierarquia mais do que uma borda ou sombra.
- Evite grids rígidos demais e repetição óbvia de cards idênticos — se três
  elementos precisam da mesma informação, varie escala, alinhamento ou
  tratamento visual entre eles em vez de clonar o mesmo componente três vezes.
- Hierarquia por escala e posição, não por decoração (evite excesso de
  bordas, sombras, gradientes ou ícones para indicar importância).

## O que evitar — anti-padrões de "estética de IA genérica"

Trate isto como uma checklist negativa antes de considerar qualquer peça
pronta:

- Grid perfeitamente simétrico e cards repetidos com o mesmo tratamento.
- Gradientes decorativos, glassmorphism, sombras suaves genéricas "tech SaaS".
- Paleta arco-íris ou pastel neutro de dashboard.
- Ícones de biblioteca genérica em vez de tipografia/fotografia carregando o
  peso visual.
- Fotografia de stock com iluminação de estúdio perfeita e sorrisos
  encenados.
- Copy/UI com aparência de landing page de SaaS (hero centralizado, badge de
  feature, três colunas de ícone+título+parágrafo).
- Excesso corporativo: serifs douradas, brasões, texturas de mármore
  clichê — isso é "luxo corporativo", não o tom que a Altto quer.

## Aplicação por contexto

- **UI / telas de produto**: hierarquia editorial mesmo em componentes de
  interface — títulos de seção podem ser grandes e tipográficos, não apenas
  um label pequeno em caixa alta. Evite o visual de admin/dashboard.
- **Artifacts e mockups**: antes de publicar, carregue também a skill
  `frontend-design` (ou `artifact-design` quando for um Artifact) para a
  execução técnica — esta skill define a direção, aquelas definem a
  implementação. As duas trabalham juntas, não substituem uma à outra.
- **Peças de marketing/social**: composição assimétrica, fotografia grande e
  respirada, tipografia como elemento gráfico — nunca o template padrão de
  "post de restaurante" com preço em balão colorido.
- **Imagens geradas (Higgsfield/outras)**: escreva o prompt citando
  explicitamente os termos desta direção (editorial, luz ambiente,
  assimetria, sem simetria de estúdio) em vez de deixar a ferramenta usar
  seu default.
- **Figma**: ao usar as skills `figma-generate-design` / `figma-generate-library`,
  garanta que os tokens e componentes criados reflitam esta paleta reduzida e
  esta tipografia expressiva — não aceite os defaults de variantes de UI
  kit genérico.

## Antes de entregar qualquer peça

Passe pela checklist de anti-padrões acima e responda: um curador de revista
de hospitality aprovaria isso, ou ele reconheceria como "feito por IA em cinco
minutos"? Se houver dúvida, prefira menos elementos, mais espaço negativo e
uma escolha tipográfica/fotográfica mais ousada em vez de mais segura.
