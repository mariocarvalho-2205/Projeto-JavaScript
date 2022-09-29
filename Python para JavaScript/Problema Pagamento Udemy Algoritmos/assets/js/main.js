const form = document.querySelector('.form')
const nome = document.querySelector('#name')
const valorHora = document.querySelector('#valor-hora')
const horaTrab = document.querySelector('#hora-trab')

form.addEventListener('submit', (e) => {
    e.preventDefault()
    console.log(nome.value, valorHora.value, horaTrab.value)
    console.log(hora())
    resultado()
})

const hora = () => Number(horaTrab.value) * Number(valorHora.value)

function createElemet () {
    const body = document.querySelector('.container')
    const tag = document.createElement('div')
    body.appendChild(tag)
    tag.setAttribute('id', 'res')
}
function resultado () {
    createElemet()
    const totalSalario = hora()
    let v = Number(valorHora.value)
    const res = document.querySelector('#res')
    res.innerHTML = `Sr.(a) ${nome.value}, <br> 
    Foram ${horaTrab.value} horas trabalhadas, <br>
    Cada hora no valor de R$ ${v.toFixed(2)}, <br>
    O Sr.(a) ira receber R$ ${totalSalario.toFixed(2)}`
}