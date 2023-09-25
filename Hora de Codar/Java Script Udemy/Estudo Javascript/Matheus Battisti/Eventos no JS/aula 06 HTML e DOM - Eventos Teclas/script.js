/*

// DOM e JS - Eventos em JS - Key Event 
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

// Default 
* Muitos elementos tem ações pre-definidae, como clicar em um link que nos leva a uma outra
* pagina, e para alguns eventos, precisamos parar o carregamento da pagina por alguns instantes
* quando estamos digitando dados por exemplo.
* Principamente quando estamos prenchendo um formulario, precisaremos parar de 
* realizar o carregamento da pagina até que todos os dados estejam preenchidos e 
* preparados para o envio.
* Estamos falando do preventDefault()

// Eventos por tecla - key event
* Quando um tecla é pressionada, são acionados doi tipos de eventos
* o keyup e o keydown
* podendo ser atribuido a ações quando são acionados
* sua diferença está na forma em são acionados
* Como o nome já sugere, o keydown é a acionado quando a tecla é pressionada
* e o keyup quando a mesma é solta.
! Um detalhe importante é que, ao mantermos a tecla precionada, 
! o evento keydown permanece ativo, diferente do keyup
! Outro detalhe importante é que ele é acionado a pagina 

// Vamos ao Exemplo:

*/
let container = document.getElementById('btn-container')
let btn = document.getElementById('btn')
let linkGoogle = document.querySelector('#link')



window.addEventListener('keydown', function (e) {
    
    if (e.key == 'Enter') {
        console.log('Enter foi acionado')
    }
})

window.addEventListener('keyup', (e) => {
    if (e.key == 'v') {
        console.log('Espaço acionado')
    }
})