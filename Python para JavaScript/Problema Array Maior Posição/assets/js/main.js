const numInt = Number(prompt('Quantos numeros você vai digitar?'))

function inputNum (num) {
    const arrayNum = []
    for (let i = 0; i < num; i++) {
        let input = Number(prompt(`Digite o ${i + 1} numero:`))
        arrayNum.push(input)
    }
    maxNum(arrayNum)
}

inputNum(numInt)

function maxNum (array) {
    let ar = array
    let numMax = Math.max(...ar)
    console.log(ar)
    console.log(`
        Maior valor: ${numMax}
        Posição do maior valor ${ar.indexOf(numMax)}
        `)
}
