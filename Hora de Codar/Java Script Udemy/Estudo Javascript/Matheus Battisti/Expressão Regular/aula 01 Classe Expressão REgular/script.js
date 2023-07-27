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
console.log(/testando/.test("ta testando ")); // pode ser utilizado com string ou variavel 
let reg2 = /testando/;
console.log(/testandosss/.test(reg2));
let reg3 = new RegExp('Fé');

console.log(reg3.test('Tem Fé?'));
console.log(reg3.test('Não tem'))

let text = 'minha frase com Fé';
console.log(reg3.test('Tem Fé'));
console.log(reg3.test('Não Tem'));
console.log(reg3.test(text));
// utlizando o teste sem variavel

console.log(/quantidade/.test(text));
console.log(/quantidade/.test("minha frase tem quantidade"));
console.log(/quantidade/.test("lkjashdfoiuyqwerquantidadeoiausdyfoiasudyf"));


