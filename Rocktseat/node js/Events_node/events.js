// ! Entendendo como ele é a base pata os outros modulos


// essa função vai herdar as funcionalidades do EventEmitter para a função Character
const { inherits } = require('util')  
const { EventEmitter} = require('events')


// vai receber a função herdada do inherits para EventEmitter sendo a base para a função
function Character(name) {
    this.name = name
}

inherits(Character, EventEmitter)

const chapolin = new Character('Chapolin');

chapolin.on('help', () => console.log(`Eu! o ${chapolin.name} colorado!`))

console.log('Oh! E agora, quem poderar me defender?')
chapolin.emit('help')