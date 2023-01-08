let casos = Number(prompt('Quantos casos você vai digitar? '))

for (let i = 1; i <= casos; i++) {
    let divisao
    let numerador = Number(prompt('Entre com o numerador: '))
    let denominador = Number(prompt('Entre com o denominador: '))
    if (numerador < 0) {
        console.log('DIVISÃO IMPOSSIVÉL')
    } else {
        divisao = numerador / denominador
        console.log(`Divisão = ${divisao.toFixed(2)}`)
    }
}