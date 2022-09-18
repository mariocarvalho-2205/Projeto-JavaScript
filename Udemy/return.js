// return
// retorna um valor
// assim que o return for acionado, a função terminara
// Ex:
function soma (a, b) {
    return a + b
}
console.log(soma(5, 9))

// Exemplo de função que retorna um objeto
function criaPessoa (nome, sobrenome) {
  // return { nome: nome, sobrenome: sobrenome} // se a variavel do objeto tiverem o mesmo nome na chave e no valor, não precisa repetir
  return { nome, sobrenome }; // ficando dessa forma
}
const p1 = criaPessoa('joao', 'carvalho')
const p2 = { nome: 'mario', sobrenome: 'carvalho'}
console.log(p1)
console.log(p2)

// Utilizando função aninhada (externa e interna)
// função externa
function falaFrase(comeco) {
    // função interna
    function falaResto(resto) {
        return comeco + ' ' + resto // retorna o parametro da função externa + função interna concatenando os resultados, por isso que tem a string vazia
    }
    return falaResto  // retorna a função interna completa 
}
const olaMundo = falaFrase('olá') // essa variavel chama a função externa e precisa ser chamada como uma função, olaMundo(argumento da função interna)
console.log(olaMundo('mundo Oi'))  // a variavel foi declarada como uma função atribuindo valor como argumento da segunda função

// usando a mesma tecnica para multiplicar valores
// função Externa ira criar o multiplicador
function criaMultiplicador (multiplicador) {
    // função interna será criada no return
    // EX:
    return function (n) {
        return n * multiplicador
    }
}
// criação das variaveis que passarão o multiplicador para a função
const duplica = criaMultiplicador(2)
const triplica = criaMultiplicador(3)
const quadriplica = criaMultiplicador(4)

// chama as variaveis como função passando os valores que serão duplicados, triplicados e quadriplicados.
console.log(duplica(3))
console.log(triplica(3));
console.log(quadriplica(3));

