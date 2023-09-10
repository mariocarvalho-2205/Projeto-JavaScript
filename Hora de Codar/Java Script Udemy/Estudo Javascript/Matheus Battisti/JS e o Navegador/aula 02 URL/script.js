/*

// Generators

* Generators funcionam semelhantes as Promises
* Onde as ações podem ser pausadas e continuadas depois
* Caracterizando pelo function* e yield
* O yield pode salvar o estado da variavél

*/
// Ex:
function* genTest() {
    let id = 0;
    while(true) {
        yield id++
    }
}

let criarId = genTest()

console.log(criarId.next().value)
console.log(criarId.next().value)
console.log(criarId.next().value)