/*

// DOM e JS - Encontrando Elementos - querySelector


* Podemos encontrar elementos de uma forma mais facil do que se movendo pelo DOM
* Vomo HTML temos tags, classes e ids, o javascript nos possibilita utilizar estas 
* caracteristicas para encontrar o que desejamos.
* Há alguns metodos para isto:
* getElementByTagName - Acessa a tag pelo nome -> Sintaxe - document.getElementByTagName('h1)

* getElementById - Acessa a tag pelo ID
* getElementByClassName - Acessa pela classe
* tem tambem o 
* querySelector - Acessa Qualquer uma das opçoes acima, descriminando no parametro
    * O metodo querySelector se assemelha a grande funcionalidade do jquery
    * Nos permitindo encotrar elementos pelo seus seletores de CSS
    * O que facilita muito nossa vida.
    * 






*/
// Acessando pelo querySelector acessando pela classe
console.log(document.querySelector('.list'))
console.log(document.querySelector(".red"));
// Acessando pelo id
console.log(document.querySelector("#title"));
console.log(document.querySelector("#p1"));
// Acessando pela tag
console.log(document.querySelector("h2"));

// Para ter uma maior especificidade na seleção, podemos adicionar mais de um seletor
console.log(document.querySelector("h1, #title"));
console.log(document.querySelector("p, #p1"));
console.log(document.querySelector("li, .red"));
console.log(document.querySelector("ul, .list"));
console.log(document.querySelector("div h1"));
console.log(document.querySelector("div h2"));


