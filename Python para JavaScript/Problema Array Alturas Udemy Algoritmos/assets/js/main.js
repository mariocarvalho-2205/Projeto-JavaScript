let numberPerson = Number(prompt('Quantas pessoas serão digitadas? '))

function personColect (num) {
    let personName = []
    let personIdade = []
    let personAltura = []

    for (let i = 0; i < num; i++) {

        let name = prompt('Nome: ')
        let idade = Number(prompt('Idade: '))
        let altura = Number(prompt('Altura: '))
        console.log(`
        Dados da ${i + 1}ª pessoa.
        Nome: ${name}
        Idade: ${idade}
        Altura: ${altura}
        `)
        personName.push(name)
        personIdade.push(idade)
        personAltura.push(altura)
    }
    //dados(personName, personIdade, personAltura)
    media(personAltura, num)
    percentMenor(personIdade, num)
    menorIdade(personName, personIdade, num)
    return
}

// função para calcular a media
function media (altura, num) {
    let alt = altura.reduce((acu, val) => acu + val , 0)
    let mediaIdade = alt / num
    console.log(`Altura média ${mediaIdade.toFixed(2)}`)

}
// função para calcular o percentual da menor idade
function percentMenor (idade, qtd) {
    let qtdIdadeMenor = 0
    let percentMenor = 0
    idade.forEach(function (age) {
        if(age < 16) qtdIdadeMenor += 1
    })

    percentMenor += (qtdIdadeMenor / qtd) * 100
    console.log(`Pessoas com menos de 16 anos: ${percentMenor.toFixed(1)}%`)
    /*let qtdIdadeMenor = 0
    for (let i = 0; i < idade.length; i++) {
        if (idade[i] < 16) qtdIdadeMenor += 1
    }
    let percentMenor = (qtdIdadeMenor / qtd) * 100
    console.log(`Pessoas com menos de 16 anos: ${percentMenor.toFixed(1)}%`)*/
}

function menorIdade (name, idade) {
    name.forEach((n, i) => {
        if (idade[i] < 16) console.log(`${n} tem ${idade[i]} anos.`)
    })
    /*for (let i = 0; i < name.length; i++) {
        if (idade[i] < 16) console.log(`${name[i]} tem ${idade[i]} anos.`)
    }*/
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