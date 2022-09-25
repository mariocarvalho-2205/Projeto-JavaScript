// setInterval e setTimeout
// setInterval
function mostraHora () {
    let data = new Date()
    return data.toLocaleTimeString('pt-BR', {hour12: false})
}

/*function funcaoDoInterval (){
    console.log(mostraHora());
}*/
//setInterval(funcaoDoInterval, 1000)  // pode ser exibido com a função anonima dentro do setInterval
setInterval(function() {console.log(mostraHora())}, 1000)

// utilizando uma variavel 
/*const timer = setInterval(function () {
  console.log(mostraHora());
}, 1000);
*/
// setTimeout

//setTimeout(function () { clearInterval (timer)}, 5000)
//setTimeout(function () {console.log('cheguei atrasado')}, 7000)

