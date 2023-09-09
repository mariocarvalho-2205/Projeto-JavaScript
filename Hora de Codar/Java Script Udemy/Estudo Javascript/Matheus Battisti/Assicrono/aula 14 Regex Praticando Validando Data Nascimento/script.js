/*
// Programação Assicrona

É quando uma ação acontence sem seguir necessariamente uma fila
Ou seja, outras ações podem ser executadas enquanto a assicronia esta sendo executada
Ex: Usuario está no checkout, manda salvar seu endereço na conta, mas pode prosseguir 
para a finalização sem recarregar a pagina, pois adicionar endereço ocorre de forma assicrona.

// Callbacks
* É uma função que faz uma ação após algum acontecimento no código.
* Pomdemos utilizar um callback com uma função setTimeout

Ex: 
console.log("ainda não chamou o callback")

setTimeout(function() {
    console.log("chamou o callback")
}, 2000)

console.log("ainda não chamou o callback")


*/
