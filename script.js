let elemento = document.getElementById('texto-habilidades')
let outroElemento = document.getElementById('texto-interesses')

function explicacaoHtml() {
  let menssagemHtml =
    'A Linguagem de Marcação de Hipertexto (HTML) é uma linguagem de computador que compõe a maior parte das páginas da internet e dos aplicativos online. Um hipertexto é um texto usado para fazer referência a outros textos, enquanto uma linguagem de marcação é composta por uma série de marcações que dizem para os servidores da web qual é o estilo e a estrutura de um documento.'
  elemento.innerHTML = menssagemHtml
}

function explicacaoCss() {
  let menssagemCss =
    'O CSS é uma linguagem de folhas de estilos que é utilizada para definir como os documentos escritos na linguagem de marcação (HTML ou XML) devem ser apresentados em termos de formatação, de layout. Em um cenário ideal, enquanto o HTML é usado para estruturar os conteúdos, o CSS é utilizado para formatá-los. Dessa forma há uma enorme integração entre o HTML e o CSS.'
  elemento.innerHTML = menssagemCss
}

function explicacaoJavaScript() {
  let menssagemJavaScript =
    'JavaScript é uma linguagem de programação que permite a você implementar itens complexos em páginas web — toda vez que uma página da web faz mais do que simplesmente mostrar a você informação estática — mostrando conteúdo que se atualiza em um intervalo de tempo, mapas interativos ou gráficos 2D/3D animados, etc. — você pode apostar que o JavaScript provavelmente está envolvido.'
  elemento.innerHTML = menssagemJavaScript
}

function explicacaoReact() {
  let menssagemReact =
    'O React é uma biblioteca front-end JavaScript de código aberto com foco em criar interfaces de usuário em páginas web.'
  elemento.innerHTML = menssagemReact
}

function explicacaoGit() {
  let menssagemGit =
    'Git é o sistema de controle de versão open source mais usado no mundo atualmente! Ele é usado para controlar o histórico de alterações de arquivos e principalmente de projetos de desenvolvimento de software. Ele permite mais flexibilidade no fluxo de trabalho, segurança e desempenho.'
  elemento.innerHTML = menssagemGit
}

function explicacaoPython() {
  let menssagemPython =
    'O Python é uma linguagem de programação que foi desenvolvido para ser simples, fácil de aprender e muito versátil, ou seja, você vai poder utilizar essa linguagem para diversas tarefas. Pode construir aplicativos, criar sites, desenvolver programas, criar jogos, fazer análise de dados, inteligência artificial, entre outras atividades.'
  outroElemento.innerHTML = menssagemPython
}

function explicacaoDjango() {
  let menssagemDjango =
    'O Django é um framework gratuito e de código aberto escrito em Python para desenvolvimento web. Sua utilização permite a construção de aplicações web de alto desempenho.'
  outroElemento.innerHTML = menssagemDjango
}

function explicacaoNode() {
  let menssagemNode =
    "De acordo com sua definição oficial, o Node é um runtime, que nada mais é do que um conjunto de códigos, APi's, ou seja, são bibliotecas responsáveis pelo tempo de execução '(é o que faz o seu programa rodar)' que funciona como um interpretador de JavaScript fora do ambiente do navegador web."
  outroElemento.innerHTML = menssagemNode
}

function explicacaoReactNative() {
  let menssagemReactNative =
    'React Native é uma biblioteca Javascript criada pelo Facebook. É usada para desenvolver aplicativos para os sistemas Android e iOS de forma nativa..'
  outroElemento.innerHTML = menssagemReactNative
}
