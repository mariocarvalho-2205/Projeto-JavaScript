/*

// Promises

* As promises são ações assicronas que 
* podem produzir um valor em algum momento do codigo

* É uma forma de dizer a linguagem que um valor pode 
* estar presente em um futuro do codigo

* O objeto das promises é Promise, resolve e o metodo que resolve uma Promise, 
* O then é o que fal ela poder ser executada em um ponto futuro


*/

let promessa = Promise.resolve(4 + 8)

console.log("algum codigo")
console.log(promessa)

promessa.then((value) => {return value + 5})
        .then((value) => console.log(value))