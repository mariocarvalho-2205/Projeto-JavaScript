/*
if, else if, else
se, senao, entao

if pode ser usado sozinho

Sempre que utilizar else, precisa ter um if antes

Pode utilizar varios else if na condição

so pode ser utilizado um else na checagem

pode se usar o if e else somente

*/

let hora = 25
if (hora >= 0 && hora <= 11) {
    console.log('bom dia')
} else if (hora >= 12 && hora < 17) {
    console.log('Boa tarde')
} else if (hora >= 18 && hora <=23) {
    console.log('boa noite')
} else {
    console.log('A hora é invalida')
}

let nome = 'ja'

if (nome === 'mario' || nome === 'ady') {
    console.log(true)
} else {
    console.log(false)
}

let num2 = 110956
if (num2 % 2 === 0 ) {
    console.log('O numero é par')
} else {
    console.log('O numero é impar')
}

console.log((3 ** 0.5).toFixed(2))