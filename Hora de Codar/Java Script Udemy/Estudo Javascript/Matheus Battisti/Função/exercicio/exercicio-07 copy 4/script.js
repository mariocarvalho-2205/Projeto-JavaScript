// usando função recursiva
function loop (num) {
    if(num < 2 - 1) {
        console.log('parei')
    } else if ( num % 2 != 0) {
        console.log(' o numero e impar')
        loop(num - 1)
    } else {
        console.log(`O numero e par ${num}`)
        loop(num - 2)
    }
}

loop(10)
loop(11)

function par(num) {
    for(let i = num; i > 0; i--)
        if( i % 2 == 0) {
            console.log('O numero é par ' + i)
        }
}
par(10)
par(15)