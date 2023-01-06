let intX = Number(prompt('Digite um valor para X:'))
let intY = Number(prompt('Digite um valor para Y:'))
let troca = 0
let cont = 0
let soma = 0

if (intX > intY) {
    troca = intX
    intX = intY
    intY = troca
}
cont = intX

do  {
    if (cont % 2 !== 0) {
        soma += cont
        console.log(soma, cont)
    }
    cont += 1
} while (cont < intY)

