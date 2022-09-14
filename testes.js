/*let array = []
for (let i = 0; i < 10; i++) {
    console.log(i)    
    array.push(i)

} 
console.log(array)*/

function falaOi (fala) {
    const falar = 'eu to falando aqui'
    console.log(falar, fala)
    
}
//falaOi('jose')

function teste (n1, n2) {
    const soma = n1 + n2
    falaOi('e ao mesmo tempo somando ' + soma)
}


function dado(n) {
    teste(50, 79)
    console.log('aqui eu fiz um teste usando 3 funções ' + n)
    
}
dado('fim!!!')