let opcao = Number(prompt('Informa o codigo (1, 2, 3), ou 4 para finalizar!'))
let alcool = 0
let gasolina = 0
let diesel = 0

while (opcao != 4) {
    if (opcao === 1) {alcool += 1}
    if (opcao === 2) {gasolina += 1}
    if (opcao === 3) {diesel += 1}
    opcao = Number(prompt('Informa o codigo (1, 2, 3), ou 4 para finalizer!'))
}

console.log(`
    Muito Obrigado!!!
    Alcool: ${alcool}
    Gasolina: ${gasolina}
    Diesel: ${ diesel}`)