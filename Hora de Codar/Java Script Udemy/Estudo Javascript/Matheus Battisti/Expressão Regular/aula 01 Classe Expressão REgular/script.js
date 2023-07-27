/*
* Criando Expressão regular
1 forma de se criar uma expressão regular
let reg1 = new RegExp("teste");

2 forma
let reg2 = /teste/;

* Testando uma expressao regular
Para testar uma expressao regular, utilizamos o metodo test() para verificar se o padrão é retornado
console.log(/testando/.test("ttteeesssttaandooo"));
console.log(/testando/.teste("asdflkjhasd"));



*/

let reg1 = new RegExp("testando");
console.log(/testando/.test(reg1))