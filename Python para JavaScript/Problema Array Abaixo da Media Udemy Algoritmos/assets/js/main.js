let qtdNumber = Number(prompt('Quantos elementos vai ter o vetor?'))
let vetor = []

function inputNumber (num) {
    let inputNum
    for (let i = 0; i < num; i++) {
        inputNum = Number(prompt('Digite um numero: '))
        vetor.push(inputNum)
    }
    return mediaVetor(vetor, num)
}

function mediaVetor (arra) {
    let somaVetor = arra.reduce((acumulator, value) => acumulator + value)
    let mediaVetor = somaVetor / arra.length
    return msgMedia(mediaVetor)
}

function msgMedia (media) {
    let med = media
    let msg = `Media do Vetor: ${med.toFixed(3)}`
    console.log(msg)

    return abaixoMedia(vetor, med)
}

function abaixoMedia (arra, med) {

    let abaiMedia = arra.filter((value) => value < med)
    console.log(`Elementos abaixo da media:`)
    abaiMedia.forEach((val) => {console.log(val.toFixed(1))})

}
inputNumber(qtdNumber)
