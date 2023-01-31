const qtdPerson = Number(prompt('Quantas pessoas você vai digitar?'))
let arrayPerson = []

// colect - coleta dados do usuario.
function colect (num) {
    let name
    let idade

    for( let i = 0; i < num; i++) {
        name = prompt('Digite um nome:')
        idade = Number(prompt('Digite a idade'))
        criaPerson(name, idade)
    }

}

// criaPerson - cria usuario e adiciona array de objetos
function criaPerson (name, idade) {

    //let person = {name: name, idade: idade} //! pode ser criado objeto
    // dentro da função e mandar a variavel

    return arrayPerson.push({
        name,
        idade
    })
}



let maisVelha = function (array) {
    let maiorIdade = 0
    let nomeMaisVelho
    for (let i = 0; i < array.length; i++) {
        if (array[i].idade > maiorIdade) {
            maiorIdade = array[i].idade
            nomeMaisVelho = array[i].name
        }
    }
    return console.log(`Pessoa mais velha: ${nomeMaisVelho}`)

}

colect(qtdPerson)
maisVelha(arrayPerson)