// while e do while
// E usado quando não sabe quando sera o final
let list = [ 'mario', 'joao', 'maria']
let i = 10
/*while (i <= 10 ) {
    console.log(i)
    i++  //  observação: não pode esquecer de fazer a incrementação
}*/
/*
while (i < list.length ) {
    console.log(i, list[i])
    i++
}
*/
/*
do {
    console.log(i)
    i -= 2
} while (i >= 0)
*/
function random ( min, max ) {
    const r = Math.random() * (max - min) + min
    return Math.floor(r)
}
let rand = random(1, 10);
let rand2 = random(2, 20)
//console.log(Math.floor(rand));
// usando while
/*while ( rand !== 5) {
    rand = random(1, 10);
    console.log(rand)
}*/

// usando o do while
do {
    rand2 = random(2, 10)
    console.log(rand2)
} while (rand2 !== 2)

//console.log(Math.floor(rand))