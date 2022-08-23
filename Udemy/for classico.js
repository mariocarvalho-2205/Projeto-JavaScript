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

/*for (let i = 0; i <= 10; i++) {
    const par = i % 2 === 0 ? 'par' : 'impar'
    console.log(`${i} é ${par}`)
}*/

//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
/* 
For in --> le os indices ou chaves de um array ou obj:
simplificado usando variavel

conts frutas = ['pera', 'maça', 'uva', 'laranja']

for (index in frutas) {
    console.log(furtas[index])
}
*/

/*const frutas = ['pera', 'maça', 'uva', 'laranja']

for (index in frutas) {
    console.log(frutas[index])
}*/
//=-=-=-=-=-=-=-
const pessoas = {
    nome: 'mario',
    sobrenome: 'carvalho',
    idade: 48,
}

//console.log(pessoas.nome)
//console.log(pessoas['nome'])
const chave = 'sobrenome'
//console.log(pessoas[chave])

for (let chave in pessoas) {
    console.log(chave, pessoas[chave])
}
//=-=-=-=-=-=-=-=-=-=-=-

/*

exemplos:

const nome = 'mario carvalho'

for classico:
for (let i = 0; i < nome.length; i++) {
    console.log(nome[i])
}

for in:
for (let indice in nome) {
    console.log(nome[i])
}

for of

*/

const nome = 'mario carvalho'

for (let valor of nomes) {
    console.log(valor)
}