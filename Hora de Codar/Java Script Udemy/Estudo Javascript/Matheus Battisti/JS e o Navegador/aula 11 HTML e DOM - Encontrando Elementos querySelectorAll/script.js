/*

// DOM e JS - Encontrando Elementos - querySelectorAll


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
* querySelectorAll - Acessa varios elementos simultaneos ao mesmo tempo






*/
// Acessando pelo querySelectorAll

console.log(document.querySelectorAll('div')) // retorna uma nodeList com todos os elementos do HTML
console.log(document.querySelector('div.note, div.alert')) // retorna uma nodeList com todos os elementos do HTML



