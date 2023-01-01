let idade = Number(prompt('Digite uma idade: '))
let cont = 1
let somaIdades = 0
let media;

if (idade <= 0) {
    alert('Impossivél Calcular!!!')
} else {
    while (idade > 0) {
        somaIdades += idade
        cont += 1
        idade = Number(prompt('Digite uma idade: '))
    }
}

media = somaIdades / (cont - 1)
console.log(somaIdades, cont - 1, media.toFixed(2))