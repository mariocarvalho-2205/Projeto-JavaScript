/*
Sistema de notas escolares
Descrição
Esse exercício vai trabalhar a transformação de notas escolares, onde devemos criar um algoritmo para transformar notas númericas em notas de caracteres.

Desafio:

Crie um algoritmo que transforme as notas do sistema
numérico para sistema de notas em caracteres tipo A B C

* de 90 para cima -   A
* entre 80 - 89   -   B
* entre 70 - 79   -   C
* entre 60 - 69   -   D
* menor que 60    -   F
*/

let nota = 59

function notaFinal (nota) {
    let notaA = nota >= 90 && nota <= 100
    let notaB = nota >= 80 && nota <= 89
    let notaC = nota >= 70 && nota <= 79
    let notaD = nota >= 60 && nota <= 69
    let notaF = nota < 60 && nota >= 0
    let notaFinal

    if (notaA) {
        notaFinal = "Nota A"
    } else if (notaB) {
        notaFinal = "Nota B"
    } else if (notaC) {
        notaFinal = "Nota C"
    } else if (notaD) {
        notaFinal = "Nota D"
    } else if (notaF) {
        notaFinal = "Nota F"
    } else {
        notaFinal = "Nota Invalida!!!"
    }

    return notaFinal
}

console.log(notaFinal(nota))