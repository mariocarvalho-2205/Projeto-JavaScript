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
    //let person = {name: name, idade: idade} ! pode ser criado objeto
    // dentro da função e mandar a variavel
    return arrayPerson.push({
        name,
        idade
    })
}


colect(qtdPerson)
console.log(arrayPerson)
