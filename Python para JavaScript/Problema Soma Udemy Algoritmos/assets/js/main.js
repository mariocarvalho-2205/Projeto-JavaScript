
const form = document.querySelector('.form')
const num1 = document.querySelector('#input1')
const num2 = document.querySelector("#input2")
const res = document.querySelector('#res')


let soma = () => Number(num1.value) + Number(num2.value)

form.addEventListener('submit', (e) => {
    e.preventDefault()
    //console.log(soma())
    resultado()
})
function resultado () {
    let total = soma()
    res.innerHTML = `O resultado da soma de ${Number(num1.value)} mais ${Number(
      num2.value
    )}<br />`;
    res.innerHTML += `É ${total}`
}



