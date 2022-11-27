const form = document.querySelector('form')
const btn = document.querySelector('button')
const res = document.querySelector('#res')
const inputX = document.querySelector('#value-x')
const inputY = document.querySelector('#value-y')


btn.addEventListener('click', (e) => {
    e.preventDefault()
    let valueX = Number(inputX.value)
    let valueY = Number(inputY.value)
    iguais(valueX, valueY)

})


let value1 = 2
let value2 = 2

function iguais (value1, value2) {
    do {
        if (value1 > value2) {
            console.log(`O valor X é maior que o valor Y`)
        } else if (value1 < value2) {
            console.log(`O valor X é menor que o valor Y`)
        } else if (value1 === value2) {
            console.log(`Os numeros X e Y são iguais`)

        }
    } while (value1 !== value2)
}

iguais(value1, value2)