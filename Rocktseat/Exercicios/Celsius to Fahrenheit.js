// Celsius to Fahrenheit
// Descrição
// Nesse desafio faremos uma função que vai receber uma string em Celsius ou Fahrenheit, e fazer a transformação de uma unidade para a outra.

// Desafio:

// Crie uma função que receba uma string em celsius ou fahrenheit
// e faça a transformação de uma unidade para outra 
//     C = (F - 32) * 5/9 
//     F = C * 9/5 + 32

function transformeDegree (degree) {
    // Constante para validação do grau
    const celsiusExist = degree.toUpperCase().includes('C')
    const fahrenheitExist = degree.toUpperCase().includes('F')

    if (!celsiusExist && !fahrenheitExist) {
        throw new Error('Grau não identificado')
    }

    // fluxo ideal padrão
    let updateDegree = Number(degree.toUpperCase().replace('F', ''))
    let formula = fahrenheit => (fahrenheit - 32) * 5/9
    let degreeSign = 'C'

    // fluxo alternativo
    if (celsiusExist) {
        updateDegree = Number(degree.toUpperCase().replace('C', ''))
        formula = celsius => celsius * 9/5 + 32
        degreeSign = 'F'
    }
    return formula(updateDegree) + degreeSign
}

try {
    console.log(transformeDegree('10c'))
    console.log(transformeDegree('50f'))
} catch (error) {
    console.log(error)
}