let numberPerson = Number(prompt('Quantas pessoas serão digitadas? '))

function personColect (num) {
    let personName = []
    let personIdade = []
    let personAltura = []

    for (let i = 0; i < num; i++) {
        alert(`Dados da ${i + 1}ª pessoa.`)
        let name = prompt('Nome: ')
        let idade = Number(prompt('Idade: '))
        let altura = Number(prompt('Altura: '))
        personName.push(name)
        personIdade.push(idade)
        personAltura.push(altura)

    }
    dados(personName, personIdade, personAltura)
    media(personAltura)
    return
}

function dados (name, idade, altura) {
    for (let i = 0; i < name.length; i++) {
        console.log(name[i], idade[i], altura[i].toFixed(2))
    }
}

function media (altura) {

    let qtdIdade = altura.length
    let mediaIdade = altura.reduce((total, value) => {
        return (total + value) /  qtdIdade
    })

    console.log(mediaIdade, qtdIdade)
}
personColect(numberPerson)




/*
function fraseBomDia (name, lastName) {
    const frases = []

    for (let i = 0; i < name.length; i++) {
        const frase = `Olá ${name[i]} ${lastName[i]} bom dia`
        frases.push(frase)
    }
    return frases.join(',  ')  // Transforma a saida em string
}

const nameA = ['Mário']
const lastNameB = ['Carvalho']

console.log(fraseBomDia(nameA, lastNameB))*/