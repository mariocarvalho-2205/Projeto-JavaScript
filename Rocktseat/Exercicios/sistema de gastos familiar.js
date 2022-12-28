
let familia = {
    receitas: [10, 100, 300],
    despesas: [300, 85, 39],
}

function sum (array) {
    let total = 0
    for (let value of array) {
        total += value
    }
    return total
}

function calculateDespesas () {
    const receitas = sum(familia.receitas)
    const despesas = sum(familia.despesas)
    
    const total = receitas - despesas
    const itsOk = total >= 0
    let balanceText = 'negativo'


    if (itsOk) {
        balanceText = 'positivo'
    }
    console.log(`Seu saldo está ${balanceText} e seu saldo é ${total}`)
}

calculateDespesas()