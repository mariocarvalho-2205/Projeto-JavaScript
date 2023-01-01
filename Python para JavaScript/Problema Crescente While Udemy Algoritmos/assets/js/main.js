let intX = Number(prompt('Digite um numero para X: '))
let intY = Number(prompt('Digite um nimero para Y: '))

while (intX !== intY) {
    if (intX < intY) alert('A ordem entre X e Y é Crescente!')
    if (intX > intY) alert('A ordem entre X e Y é Decrescente!')
    alert('Para Sair digite dois numeros iguas')
    intX = Number(prompt('Digite um numero para X: '))
    intY = Number(prompt('Digite um nimero para Y: '))
    if (intX === intY) alert('Até a proxima!!!')
}