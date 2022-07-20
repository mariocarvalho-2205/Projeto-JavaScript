function par_ou_impa (array) {
    if (!array) return 'A array está vazia' // Aqui verifica se a array está null e undefined
    //if (!array.length) return 'A array está vazia'
    for (let i = 0; i < array.length; i++)
        if (array[i] === 0) {
            console.log('Você já é zero')
        } else if (array[i] % 2 === 0) {
            console.log(`O numero ${array[i]}, foi substituido por 0...`)
            array[i] = 0
        }
    return array
}

let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(par_ou_impa(arr))