let intN = Number(prompt('Deseja a tabuada para qual valor? '))
let cont = 1
do {
    console.log(`${intN}  x  ${cont} = ${intN * cont}`)
    cont += 1
} while (cont <= 10)
