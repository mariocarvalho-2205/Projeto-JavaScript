// argumentos opcionais

function soma(a, b = 1) {
    if(a === undefined && b === undefined ) {
        console.log(`Voce precisa passar os parametros`)
    } else {
        return a + b
    }
}

soma()
console.log(soma(2, 3))
console.log(soma(3))


function saudacao (nome, idade) {
    if(idade === undefined) {
        console.log(`Olá ${nome}`)
    } else {
        console.log(`Olá ${nome}, você tem ${idade} anos`)
    }
}

saudacao('mario')
saudacao('mario', 48)