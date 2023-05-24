for(let i = 0; i <=50; i++) {
    if(i % 2 == 0) {
        console.log(`O numero ${i} é par`)
    } else {
        console.log(`O numero ${i} é impar`)
    }
}

let j = 0

do {
    if (j % 2 == 0) {
        console.log(`DO WHILE -> O numero ${j} é par`)
    } else {
        console.log(`DO WHILE -> O numero ${j} é impar`)
    }
    j++
} while (j <= 50 )