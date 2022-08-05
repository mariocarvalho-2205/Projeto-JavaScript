/*
Objeto
Um objeto é uma coleção de dados e/ou funcionalidades relacionadas 
    (que geralmente consistem em diversas variáveis e funções — que 
    são chamadas de propriedades e 
    métodos quando estão dentro de objetos).

Estrutura de um objeto
var nomePessoa = {
    nome: 'Ady',
    sobrenome: 'Matos',
    idade: 48
}

para acessarmos um atributo do objeto, usamos a seguinte sintaxe
Ex:
console.log(nomePessoa.nome)  // Ady
console.log(nomePessoa.sobrenome)  // Matos

-=-=-=-=-=-=-=-=-=-=-=-=--=-=--=-=-=-=-=-
usando function para criar objeto

function criaPessoa (nome, sobrenome, idade) {
    return {
        nome: nome,           //  key: value,
        sobrenome: sobrenome,
        idade: idade
    }
}
const pessoa1 = criaPessoa('Mario', 'Tenório', 47)
const pessoa2 = criaPessoa('Ady', 'Matos', 48)
const pessoa3 = criaPessoa('Cabeção', 'Oliveira', 38)
const pessoa4 = criaPessoa('Vannn', 'Tina', 35)

// para retornar o objeto da função, chamamos a variavel.nome_objeto
console.log( pessoa1.nome, pessoa2.nome, pessoa3.idade)  // retorna Mario Ady 38

-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

abreviando a function para criar objeto
sem precisar usar as keys
pode-se manter tudo na mesma linha apos o return

function criaPessoa (nome, sobrenome, idade) {
    return {nome, sobrenome, idade}
}

const pessoa1 = criaPessoa('Mario', 'Tenório', 47)
const pessoa2 = criaPessoa('Ady', 'Matos', 48)
const pessoa3 = criaPessoa('Cabeção', 'Oliveira', 38)
const pessoa4 = criaPessoa('Vannn', 'Tina', 35)
--=-=-=-=-=-=-=-=-=-=--==-=-=-=--=-=-=-=-=-=-=-=-=-=-=-=-=-
Function dentro do objeto

const nomePessoa = {
    nome: 'Ady',
    sobrenome: 'Matos',
    idade: 48,
    hobby: ['tocar', 'estudar']
    
    fala () {
        console.log('olá mundo')  // usando o metodo this dentro da template string ${this.nome}
        console.log(`${this.nome ${this.sobrenome}} está falando oi`)
    }

    incrementaIdade () {
        ++this.idade     // pode usar o ++pre-incremento ou o pos-incremento++ 
    }
}
nomePessoa.fala()  // retorna olá mundo

*/
/*
var nomePessoa = {
    nome: 'Ady',
    sobrenome: 'Matos',
    idade: 48,
    hobby: ['tocar', 'estudar']
}
console.log(nomePessoa.nome)  // Ady
console.log(nomePessoa.sobrenome)  // Matos
console.log(nomePessoa.hobby[1])   // VAI RETORNAR O INDICE 1 DO atributo HOBBY
console.log(nomePessoa.idade) */

function criaPessoa (nome, sobrenome, idade) {
    return {
        nome: nome,
        sobrenome: sobrenome,
        idade: idade
    }
}
const pessoa1 = criaPessoa('Mario', 'Tenório', 47)
const pessoa2 = criaPessoa('Ady', 'Matos', 48)
const pessoa3 = criaPessoa('Cabeção', 'Oliveira', 38)
const pessoa4 = criaPessoa('Vannn', 'Tina', 35)

// para retornar o objeto da função, chamamos a variavel.nome_objeto
console.log( pessoa1.nome, pessoa2.nome, pessoa3.idade)
 
function criaPessoa2 (nome, sobrenome, idade) {
    return {nome, sobrenome, idade}
}

const pessoa10 = criaPessoa2('Mario', 'Tenório', 47)
const pessoa20 = criaPessoa2('Ady', 'Matos', 48)
const pessoa30 = criaPessoa2('Cabeção', 'Oliveira', 38)
const pessoa40 = criaPessoa2('Vannn', 'Tina', 35)

console.log( pessoa10.nome, pessoa20.nome, pessoa30.idade)
/*for (let i = 0; i < length(nomePessoa); i++) {
    console.log(nomePessoa[i])
}*/

const nomePessoa = {
    nome: 'Ady',
    sobrenome: 'Matos',
    idade: 48,
    hobby: ['tocar', 'estudar'],
    
    fala () {
        console.log('olá mundo')  // usando o metodo this dentro da template string ${this.nome}
        console.log(`${this.nome} ${this.sobrenome} está falando oi com ${this.idade}`)
    },

    incrementaIdade () {
        this.idade++     // pode usar o ++pre-incremento ou o pos-incremento++ 
    }
}
nomePessoa.fala()  // retorna olá mundo
nomePessoa.incrementaIdade()  // faz o incremento no atributo idade
nomePessoa.fala()
nomePessoa.incrementaIdade()
nomePessoa.fala()