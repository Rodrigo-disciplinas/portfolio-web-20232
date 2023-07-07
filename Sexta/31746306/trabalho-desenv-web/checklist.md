# Requisitos

## Para este trabalho, seu site deverá cumprir os seguintes requisitos:

● Páginas: Seu site deve apresentar ao menos 6 páginas com conteúdos eobjetivos distintos (home, contato, sobre nós, etc...)
 `Contem 7 paginas HTML`

● Contato: Dentre as 6 páginas mínimas, deve existir uma página decontato, identificando quem é você (usada para dar nota depois).
 `Home > Sobre > Curriculo`

● CSS: Deve-se utilizar CSS externo, porém deve existir pelo menos um estilo interno e um inline.
`Externo tem varios, interno esta em html5/html/estrutura.html iniciando a linha 9 e inline esta em css3/html/seletores.html iniciando na linha 49`

● Vídeo: Seu site deve apresentar ao menos 1 vídeo, seja local ouimportado de sites como o YouTube.
`Video esta em css3/html/seletores.html iniciando na linha 96`

● Imagens: Seu site deve apresentar ao menos 5 figuras, ao menos 3 delasdevem ser locais (estar na pasta do seu projeto).
`Pagina Inicial contem 3 imagens do simbolo de HTML, CSS e JS e um imagem/icone da Pagina Inicial. E a ultima imagem esta em html5/html/estrutura.html, é uma imagem do simbolo da W3C!`

● Tabelas: Seu site deve apresentar ao menos 1 tabela.
`caminho: css3/html/seletores.html iniciando na linha 25`

● Listas: Seu site deve apresentar ao menos 1 lista (nem que seja a do menu).
`Todos os menus são listas`

● Menu: Deve existir um menu para transitar entre suas páginas.
`Todas as paginas tem menus para transitarem entre si`

● Organização: Os arquivos devem estar organizados, com uma pasta paraarquivos HTML, uma pasta para CSS, outra para JS, outra para imagens,etc...
`Todos os arquivos estão separados por pastas`

● Flex: O flex deve ser utilizado ao menos uma vez para posicionar seus lementos.
`Utilizei display: flex em todos os botões de "Modo Escuro / Modo Claro`

● Grid: O grid deve ser utilizado ao menos uma vez para posicionar seus elementos.
`Estruturei todas as paginas utilizando grid`

● Transições: Deve existir ao menos uma transição em seu site. (na dúvida implemente transições nos botões do menu).
`Todos os botões de "Modo Escuro / Modo Claro tem pequenas transições`

● Animações: Deve existir ao menos uma animação em seu site.
`Tem uma animação na imagem do W3C  caminho: html5/html/estrutura.html`

● Responsividade: Seu site deve ser responsivo, funcionando paradispositivos de diferentes tamanhos. Considere o menor tamanhopossível como 200px. (caso não seja possível, defina um tamanho mínimoe evite que o site quebre com menos que isso...)
`Todas as paginas estão totalmente responsivas para os seguintes tamanhos:`

```css
/* DISPOSITIVO MOVEL G - MAX 425 */
@media screen and (max-width: 425px) {
}

/* TABLET - MAX 768 */
@media screen and (min-width: 426px) and (max-width: 768px) {
}

/* LEPTOP - MAX 1024 */
@media screen and (min-width: 769px) and (max-width: 1024px) {
}

/* MAIOR QUE 1024 */
@media screen and (min-width: 1025px) {
}
```

● Boas práticas: Seu código deve seguir as boas práticas, utilizar tags semânticas e utilizar tags para definir as partes da página (header,main/section/article, aside, footer, ...)● Comentários: Seu código deve ser comentado para fácil compreensão.
`Todo o site utiliza boas praticas, tags semânticas e tags para definição de partições da pagina`

● Modelo BOX: É necessário utilizar ao menos uma vez (cada uma) daspropriedades do modelo BOX (width, height, padding, border e margin).
`Todos os arquivos .css utilizam modelo BOX`

● Modo escuro: Deve existir ao menos um botão para, utilizando JS, alteraras propriedades da página para um modo escuro (e depois voltar aomodo normal ao apertar novamente).
`Todas as paginas contem um botão no canto superior direito para alternar entre os modos Claro e Escuro`

● Easter egg: Deve existir ao menos 1 easter egg em sua página. Porexemplo, uma combinação de elementos que, se apertados em ordem,mostram alguma mensagem ou criam um novo elemento na página.
`Clicando 10 vezes no icone da casinha ao lado da escrita "Pagina Inicial" seŕa redirecionado a uma pagina onde é dado os creditos para o criador (eu). Existe um botão de Voltar no canto superior Esquerdo da tela`