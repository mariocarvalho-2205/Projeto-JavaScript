/*

// DOM e JS - Adicionando Elementos - insertBefore
* Podemos mudar quase tudo através da DOM
* Adicionar, remover e clonar elementos
* Para isso utlilizamos metodos como: insertBefore, appendChild e replaceChild

*/
// Inserindo Elementos Após o elemento Pai

// const elInserth2 = document.createElement("h2");  // Aqui eu crio o elemento
// const elCreateH3 = document.createElement("h3");
// const elElementH4 = document.getElementById('h4'); // Depois seleciono o elemento que terar a tag adicionada antes
// const elPai = elElementH4.parentNode;  // Aqui eu atribuo a uma variavel o grau de parentesco do elemento onde tera a inserção 



// elPai.insertBefore(elCreateH3, elElementH4);
// const elH3 = document.querySelector('h3')
// const pai2 = elH3.parentNode;
// const child1 = pai2.parentNode;

// child1.insertBefore(elInserth2, pai2)

const novoElemento = document.createElement('p')
const elementoAlvo = document.querySelector('#titulo-principal')
const elementoPai = document.querySelector('#container-principal')

elementoPai.insertBefore(novoElemento, elementoAlvo)


//elPai.parentNode.insertBefore(elInserth2, elInsertH3 )  // Seleciono o elemento e nomeio como parentNode e faço a inserção



