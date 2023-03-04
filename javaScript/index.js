/*
function onClickHabilidades() {
  document.getElementById("habilidades").scrollIntoView();
}
function onClickPortifolio() {
  document.getElementById("portifolio").scrollIntoView();
}
function onClickExperiencias() {
  document.getElementById("experiencias").scrollIntoView();
}*/



/*

UMA MANEIRA MAIS FACIL DE FAZER FUNÇÕES PARA O COMANDO DE CIMA É:
IR NA ANCORA (LINK) E ANEXAR .... 
onclick="onClickScrollTo('nome do id pra onde quer ir')"
A PARTE DO ID É COM ASPAS SIMPLES!!!!
E NA PARTE DO SCRIPT
ESCREVER A FUNÇÃO QUE VAI EXECUTAR ISSO
function onClickScrollTo(id){
  document.getElementById(id).scrollIntoView();
}
*/
function onClickScrollTo(id) {
  document.getElementById(id).scrollIntoView();
}

function onClickLink(url) {
  window.open(url);
}