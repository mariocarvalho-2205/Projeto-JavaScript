// Utilizar eventos usando o EventEmitter

const { EventEmitter } = require('events');

const ev = new EventEmitter()

 // */*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/

// para ouvir o evento usamos a variavel seguida da função on()
// Sintaxe:
// Ex: ev.on()
/*
ev.on('someTime -> evento disparado', (message) => {
    console.log('estou te ouvindo', message)
})*/


// para ouvir eventos um unica vez utilizamos o once no lugar do on

// ev.once('someTime -> evento disparado' , (message) => {
//     console.log('uma unica vez', message)
// })

// */*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/

// para disparar eventos usamos a variavel seguida da função emit()

// emitir ou disparar eventos
// Sintaxe:
// ev.emit('nome do evento', 'mensagem enviada para o argumento ')
ev.emit('someTime -> evento disparado', " -> mensagem enviada para o o argumento da função")
ev.emit('someTime -> evento disparado', "mario")
ev.emit('someTime -> evento disparado', "ady")
ev.emit('someTime -> evento disparado', "joao")

// */*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/







