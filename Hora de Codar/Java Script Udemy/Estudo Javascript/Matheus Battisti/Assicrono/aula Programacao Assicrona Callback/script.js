/*

// Callbacks

* É uma função que faz uma ação após algum acontecimento no código.
* Pomdemos utilizar um callback com uma função setTimeout

* Ex: 
console.log("ainda não chamou o callback")

setTimeout(function() {
    console.log("chamou o callback")
}, 2000)

console.log("ainda não chamou o callback")


*/

console.log("ainda não chamou o callback")

setTimeout(function() {
    console.log("chamou o callback")
}, 2000)

console.log("ainda não chamou o callback")

console.log("1")
setTimeout(() => {
    console.log('6')
}, 2000)
console.log("2")
console.log("3")
console.log("4")
console.log("5")

