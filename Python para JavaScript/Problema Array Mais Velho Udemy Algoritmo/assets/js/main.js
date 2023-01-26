const qtdPerson = Number(prompt('Quantas pessoas você vai digitar?'))

function criaPerson (num) {
    let arrayPerson = []
    let person = new Object()
    for( let i = 0; i < num; i++) {
        person.name = prompt('Digite um nome:')
        person.idade = Number(prompt('Digite a idade'))
        arrayPerson.push(person)
    }

    console.log(arrayPerson)
    console.log(person)
}
criaPerson(qtdPerson)