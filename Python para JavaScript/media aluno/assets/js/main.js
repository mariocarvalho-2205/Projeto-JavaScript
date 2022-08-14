const form = document.querySelector('#formulario')

form.addEventListener('submit', function (e) {
    e.preventDefault()
    const nota1 = e.target.querySelector('#nota1')
    const nota2 = e.target.querySelector('#nota2')

    const n1 = Number(nota1.value)
    const n2 = Number(nota2.value)

    if (!n1) {
        setResult('Digite uma nota valida!', false)
        return
    }
    if (!n2) {
        setResult('Digite uma nota valida!', false)
        return
    }
    const med = getMedia(n1, n2)
    const msg = `Sua media ${med}`

    setResult(msg, true)
    console.log(msg)
})

function getMedia(n1, n2) {
    const med = (n1 + n2) / 2
    return 
}
function setResult (msg) {
    const result = document.querySelector('#result')
    result.innerHTML = msg
}