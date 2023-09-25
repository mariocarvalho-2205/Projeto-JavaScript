/*

// DOM e JS - Eventos em JS - Propagation
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
ao evento.
* Podemos tambem remover o evento, para que o mesmo não seja acionado indevidamente
* após o primeiro acionamento.
* Para isso utilizamos o metodo removeEventListener, onde passamos o evento e a função que 
* o evento está escutando.

// Objeto do Evento
* Ao criarmos um evento, temos a opção de utilizar um argumento
* na função opcional, chamado de objeto do evento
* Ele contem propriedades que podem ser utilizadas a nosso favor
* e esse objeto é criado automaticamente pelo JS

// Propagation ou  propagação
* Acontece quando não definimos muito bem um elemento, ou seja, ele possui um seletor 
* que abrange outros elementos, dessa forma, ao ativarmos um elemento, a ativação poderá 
* realizando outras ativações, acontece ai a  propagação (propagation).
* Para resolvermos esse problema, utilizamos o metodo que para essa propagação, o stopPropagation

// Vammos para o o exemplo
*/
let container = document.getElementById('btn-container')
let btn2 = document.getElementById('btn')

// funçaõ para sinalizar o click
function msg (e) {
    //console.log(e.target.id)
    //console.log(e)
    console.log('mensagem')
    e.stopPropagation()
}

// Adicionando Evento
btn2.addEventListener('click', () => {
    console.log('msg buttom')
    
})
container.addEventListener('click', () => console.log('mensagem container'))



