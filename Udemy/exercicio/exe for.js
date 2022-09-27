const objeto = [
  { nome: "mario", idade: 48 },
  { nome: "ady", idade: 49 },
  { nome: "joao", idade: 35 },
];

let array = [5, 6, 7, 6, 2]
let array2 = [5, 6, 7, 6, 2];
let idade = []
let idade3 = []
let totIdade = 0

// for classico 

for (let i = 0; i < idade.length; i++) {
  totIdade += idade[i];
}

for (let i = array.length; i >= 0; i--) {

    if (array[i] % 2 === 0) {
        console.log(`${array[i]} é par`);
    } else {
        console.log(`${array[i]} é impar`);
    }
}


// Metodo reduce para somar array 
let idade2 = [48, 49, 35];
let totalIdade2 = idade2.reduce(function (soma, i) {
    return soma + i
})


// for in
for (index in objeto) {
    console.log(objeto[index].idade)
    idade.push(objeto[index].idade);
}

/*for (index of objeto) {
    console.log(objeto.nome)
    idade3.push(objeto.nome);
}*/

console.log(idade, totIdade)
console.log(totalIdade2)

const elementos = [
  { tag: "p", texto: "um paragrafo" },
  { tag: "div", texto: "uma div adicionada" },
  { tag: "section", texto: "uma section" },
  { tag: "footer", texto: "footer de rodape" },
];

for (let i = 0; i < elementos.length; i++) {
  console.log(elementos[i].tag, elementos[i].texto);
}