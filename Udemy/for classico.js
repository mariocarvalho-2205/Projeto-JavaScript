const nomes = ['mario', 'joao', 'ady', 'maria']
/*
// contando os indices do array
for (let i = 0; i < nomes.length; ++i) {
    console.log(`Na ${i}ª posição está ${nomes[i]}`)
}

// incrementando de 1 em 1
for (let i = 20; i >= 10; i--) {
    if (i % 2 === 0) {
        console.log(i);
    }
    
}

// incrementando de 10 em 10
for (let i = 0; i <= 100; i += 10) {
    if (i % 2 === 0) {
        console.log(i);
    }
    
}

// decrementando de 10 em 10 
for (let i = 100; i >= 10; i -= 10) {
    if (i % 2 === 0) {
        console.log(i);
    }
    
}*/

for (let i = 0; i <= 10; i++) {
    const par = i % 2 === 0 ? 'par' : 'impar'
    console.log(`${i} é ${par}`)
}
