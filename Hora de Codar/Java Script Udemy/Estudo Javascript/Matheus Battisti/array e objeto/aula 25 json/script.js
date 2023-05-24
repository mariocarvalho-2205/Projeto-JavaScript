// json

/*
* json - javascript object notation 

utilizado para comunicação entre serviçoes, ex: back end <-> front

basicamente um tipo de dado padronizado, 
que lembra muito os objetos do javascript
* sua estrutura e rigorosa, ou seja, voce deve seguir o padrao imposto por 
* este formato
* Apenas aspas duplas
* não aceita comentarios

Convertendo JSON para string

Sintaxe:
{
    "nome": "mario",

    "age": 28,
}

* podemos converter json de forma facil para uma string
* e tambem de string para json


*/

let pessoaJson = {
    "nome": "mario",
    "age": 28,
}

console.log(pessoaJson.nome)

let car = {
    "marca": "BMW",
    "rodas": 4,
    "portas": 2,
    "tipo": "sedan"
}

// convertendo para string
let jsonToString = JSON.stringify(car)

console.log(jsonToString)

let stringToJson = JSON.parse(jsonToString)

console.log(stringToJson)