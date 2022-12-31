function inputNotas() {

    let nota1 = prompt(' Digite a primeira nota: ')
    if (nota1 < 0 || nota1 > 10) {
        while (nota1 < 0 || nota1 > 10) {
            nota1 = prompt('1 Valor Invalido!! Tente novamente: ')
        }
    }
    let nota2 = prompt(' Digite a segunda nota: ')
        if (nota2 < 0 || nota2 > 10) {
            while (nota2 < 0|| nota2 > 10) {
                nota2 = prompt('2 Valor Invalido!! Tente novamente: ')
            }
        }
    return media(Number(nota1), Number(nota2))
}

function media (nota1, nota2) {
    let media = (nota1 + nota2) / 2
    console.log(`A media ds notas digitadas são ${media}`)
}
inputNotas()
