let cont = 0
let totalIdade = 0

function leituraIdade () {
    let idade = Number(prompt('teste'))
    while (idade > 0) {
        totalIdade += idade
        cont += 1
        console.log(idade)
        idade = Number(prompt('teste'))
    }
    return mediaIdade(totalIdade)
}

function mediaIdade(totalIdade) {
    let mediaIdade

    if (cont > 0) {
        mediaIdade = totalIdade / cont
        console.log(`Total de idades ${totalIdade} -> quantidade de idades ${cont} -> media das idades ${mediaIdade}`)
    } else {
        console.log('impossivel calcular')
    }
}

leituraIdade()

