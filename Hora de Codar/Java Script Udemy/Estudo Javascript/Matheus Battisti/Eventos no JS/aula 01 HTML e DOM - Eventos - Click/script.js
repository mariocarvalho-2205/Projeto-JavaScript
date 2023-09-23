/*

// DOM e JS - Eventos em JS
* O que São eventos em JS?
* São açoes condicionadas a algum tipo de resposta feita pelo usuario
EX: Quando clicamos em algum botão, apertamos alguma tecla ou giramos o 
scroll do mouse.
atraves dessas ações, conseguimos alterar a logica e o comportamento da pagina realizada 
pelo usuario por meio de Handlers = lidar ou tratar algum evento.

Para adicionar um evento, utilizamos o metodo addEventListener(listener - Ouvidor),
esse metodo e adicionado ao elemento, para que ele possa captar a ação efetuada pelo
usuario. 
Após adicionar o listener e o tipo de argumento(evento), o elemento responderá
ao evento, 




*/
// Adicionando Evento
let btn = document.getElementById('btn')

btn.addEventListener('click', () => {
    console.log('clicou')
})

// Acessando Elementos
