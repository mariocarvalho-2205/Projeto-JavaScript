let idade = 17
let cnh = false

if (idade >= 18 && cnh == true) {
    console.log('Liberado para dirigir')

} else if (idade > 18 && cnh == false) {
    console.log(`Você precisa tirar sua CNH, ja tem a idade`)
} else {
    console.log('Voce nao pode dirigir')
}