/* 
addEventListener - parte 2
Evento mouseover

mouseover é ativando quando o ponteiro do mouse passa em cima do elemento
mouseout é quando o ponteiro do mouse sai do elemento
*/

const title = document.querySelector('#title')

title.addEventListener('mouseover', function (e) {
  title.style.backgroundColor = "yellow";
  // remover classe hide para desaparecer o form
  var legenda = document.querySelector("#legenda"); // seleciona o elemento que vai acionar o event mouse
  //legenda.classList.remove("hide"); // remove a classe que está ocultando o evento
  // lembrando que o elemento está sendo oculto no css
})
title.addEventListener('mouseout', () => {
  title.style.backgroundColor = "pink";
  // adiciona classe hide para aparecer o form
  var legenda = document.querySelector("#legenda"); // seleciona o elemento que vai acionar o event mouse
  legenda.classList.add("hide"); // adiciona a classe que está oculta ou que foi ocultada pelo evento do mouse
})
/*
keydown - eventos de teclado
é ativado quando uma tecla é pressionada
keyup - é ativado quando uma tecla volta a posição normal

*/ 
document.addEventListener('keydown', function (e) {
    //console.log(e.key)  // mapea a tecla precionada no teclado
    if (e.key === 'Enter') {
        console.log('apertou')
    }
})

document.addEventListener('keyup', function (e) {
    //console.log(e.key)
    if (e.key === 'Enter') {
        console.log('soltou Enter')
    }
})

