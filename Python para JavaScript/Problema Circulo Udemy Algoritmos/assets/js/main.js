const raio = document.querySelector('#input-raio')
const btn = document.querySelector('#btn')

//const areaCirculo = raio * raio * 3.14159

btn.addEventListener('click', (e) => {
    e.preventDefault()

    resultado()
})

const areaCirculo = () =>  Math.pow(raio.value, 2) * Math.PI

function resultado () {
    const res = document.querySelector('#res')
    const raioCirculo = raio.value
    const area = areaCirculo().toFixed(3)
    res.innerHTML = `Um circulo com o Raio de ${raioCirculo} <br> tem uma area de ${area}`
}



