/*

// DOM e JS - Eventos em JS - Scroll
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

// Eventos por tecla - mouse event
* Quando um tecla é pressionada, são acionados doi tipos de eventos
* o keyup e o keydown
* podendo ser atribuido a ações quando são acionados
* sua diferença está na forma em são acionados
* Como o nome já sugere, o keydown é a acionado quando a tecla é pressionada
* e o keyup quando a mesma é solta.
! Um detalhe importante é que, ao mantermos a tecla precionada, 
! o evento keydown permanece ativo, diferente do keyup
! Outro detalhe importante é que ele é acionado a pagina 

// Eventos do mouse - click, dblclick
* No mouse temos eventos de botão que sao acionando no clicar e soltar o click no botao
! para pegarmos o botao direito usamos o contextmenu e parar o carregamento da pagina

// MouseMove
* Podemos ativar eventos com a movimentação do mouse tambem utilizando o mousemove
* Atraves desse evento podemos pegar a posição do ponteiro na pagina 
// Vamos ao Exemplo:

// Scroll - scrollX e scrollY
* Podemos adicionar evento ao scroll da tela tambem, pelo evento scroll do mouse

// Evento focus
* Quando focamos em um elemento ou saimos dele, podemos atrelar um evento a essa ação
* focus quando o elemento recebe foco e blur quando perde

// Evento de carregamento beforeunload

* Podemos atrelar um evento quando a pagina carrega, pelo evento load
* e antes do usuario fechar a pagina pelo evento beforeunload
* utilizado para confirmação de envio de cadastro

 // Debounce
 * Um evento que dispara muitas vezes pode ser um problema para o computador do cliente
 * por isso podemos fazer o debounce que e um suavizador do evento, para nao chamar o mesmo tantas vezes

*/

let timeout
window.addEventListener('mousemove', (e) => {
    clearTimeout(timeout)
    timeout = setTimeout(() => console.log('debounce ' + e.x), 500)
})