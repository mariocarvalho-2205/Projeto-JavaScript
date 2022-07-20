/* Criação de modulo e exportando */
function mostreIdade (nome, idade) {
    return `A idade de ${nome} é ${idade}`
}

function mostreCidade (nome, cidade) {
    return `A cidade de ${nome} é ${cidade}`
}

function mostreHobby (nome, hobby) {
    return `O hobby de ${nome} é ${hobby}`
}

/* Metodo mais pratico */
export { mostreIdade, mostreCidade, mostreHobby }

/* 
Exportar:
pode se usar a extensao .js ou .mjs
Named Exports = E quando quer exportar mais de uma coisa no arquivo de maneira individual

Ex:
Individual
export function mostreHobby (nome, hobby) {
    return `O hobby de ${nome} é ${hobby}`

Agrupado:
export { mostreIdade, mostreCidade, mostreHobby }`

default exports
So pode haver um dafault export por arquivo
Sera o retorno padrao do arquivo
Ex:
function mostreHobby (nome, hobby) {
    return `O hobby de ${nome} é ${hobby}`
}
default export { mostreHobby }

*/