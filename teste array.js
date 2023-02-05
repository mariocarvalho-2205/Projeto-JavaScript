/*let text = 'mario sergio'.split()
let arra = text

console.log(arra)*/

const arrayBidimensional = [[4, 6, 7], [9, 1, 3]]

for (let l = 0; l < 2; l++) {
    for (let c = 0; c < 3 ; c++){
        console.table(`Posição [${l}, ${c}] - ${arrayBidimensional[l][c]}`)  // Posição [0, 0] - 4
        //console.table(`Posição [${l}, ${c}] - ${arrayBidimensional[c]}`)  // Posição [0, 0] - 4,6,7
        //console.table(`${arrayBidimensional[c]}`)  // 4,6,7
    }

}