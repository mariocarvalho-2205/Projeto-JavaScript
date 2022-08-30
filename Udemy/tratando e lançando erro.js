// try, catch e throw
/*console.log(naoTemVariavel)
try {  // será executado quando não hover erro
    console.log(naoTemVariavel)
} catch ( erro ) {  // será executado quando hover erro
    console.log('erro tratado')
}*/
/*function num ( n ) {
    if ( typeof n === 'number') return n
    if ( typeof n === 'string') return 'nao e numero'
}

console.log(num('a'))*/
/*
function soma (x, y) {
    if (typeof x !== 'number' || typeof y !== 'number') {
        throw new Error( 'x e y precisam ser numeros!')
    }
    return x + y 
}
try {    
    console.log(soma(5, 6))
    console.log(soma(5, '2'))
    console.log(soma('3', 6))
} catch (erro){
    console.log(erro)
}

// try, catch e finally
try {  // será executado quando não hover erro
    //console.log(naoTemVariavel)
    console.log('não tem erro')
} catch ( erro ) {  // será executado quando hover erro
    console.log('erro tratado')
} finally {  // sempre será executado
    console.log('sera executado sempre')
}
*//*
function retornaHora ( data ) {
    if (!(data instanceof Date)) {
        throw new TypeError('esperando instancia de Date')
        //console.log('Náo é')
    }
}
retornaHora(11)
retornaHora(new Date(11))*/
function retornaHora(data) {
  if (data && !(data instanceof Date)) {
    throw new TypeError("esperando instancia de Date");
    //console.log('Náo é')
  }
  if (!data) {
    data = new Date()
  }
  return data.toLocaleTimeString("pt-BR", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  });
}

try {
    const data = new Date('01-01-2022 12:50:25')
    const hora = retornaHora(11)
    console.log(hora)
} catch (e){

} finally {
    console.log('Tenha um bom dia')
}

