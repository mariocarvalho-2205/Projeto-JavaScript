const qtdPerson = Number(prompt('Quantas pessoas serão digitadas?'))

function dadosPessoais (qtd) {
    let altura = []
    let genero = []
    let inputAltura
    let inputGenero

    for (let i = 1; i <= qtd; i++) {
        inputAltura = Number(prompt(`Altura da ${i} pessoa:`))
        inputGenero = prompt(`Genero da ${i} pessoa:`).toUpperCase()
        while (inputGenero !== 'F' && inputGenero !== 'M') {
            alert('Digite M ou F para Genero')
            inputGenero = prompt(`Genero da ${i} pessoa:`).toUpperCase()
        }
        altura.push(inputAltura)
        genero.push(inputGenero)
    }
    maisAlto(altura)
    totais(genero, altura)
    console.log(altura, genero)
}

function totais (genero, altura) {
    let fem = 0
    let masc = 0
    let idadeMulheres = 0
    genero.forEach((genero, ind) => {
        if(genero === 'M') {masc += 1}
        if(genero === 'F') {
            fem += 1
            idadeMulheres += altura[ind]
        }
    })

    mediaAlturaMulheres(fem, idadeMulheres)
    qtdHomens(masc)
}

function maisAlto (altura) {
    let maiorAltura = 0
        altura.forEach(altura => {if (altura > maiorAltura) maiorAltura = altura})
    console.log(`Maior Altura: ${maiorAltura}`)
    menosAlto(altura, maiorAltura)
}

function menosAlto (altura, max) {
    let menorAltura = max
        altura.forEach(altura => {if (altura < menorAltura) menorAltura = altura})
    console.log(`Menor Altura: ${menorAltura}`)
}

function mediaAlturaMulheres (qtdMulheres, totalIdadeMulheres) {
    let media = totalIdadeMulheres / qtdMulheres
    if (isNaN(media)) {
        console.log('Não tivemos mulheres nessa lista!')
    } else {
        console.log(`Media das Alturas das Mulheres: ${media.toFixed(2)}`)
    }

}

function qtdHomens (qtdMan) {
    return console.log(`Numero de Homens: ${qtdMan}`)
}
dadosPessoais(qtdPerson)