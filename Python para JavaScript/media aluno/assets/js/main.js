function escopo () {
    let form = document.querySelector('#formulario')
    let resul = document.querySelector('#result')

    form.addEventListener('submit', function (event) {
        
        event.preventDefault()
        let nota1 = event.target.querySelector('#nota-1')
        let nota2 = event.target.querySelector('#nota-2')

        let n1 = Number(nota1.value)
        let n2 = Number(nota2.value)
        let media = (n1 + n2) / 2
        //console.log(media)
        

        form.addEventListener('submit', event)
        if (media > 6) {
            resul.style.backgroundColor = 'green'
            resul.style.borderRadius = '5px'    
        } else {
            resul.style.backgroundColor = 'red'
            resul.style.borderRadius = '5px'
        }
        resul.innerHTML = `A media das notas ${n1} e ${n2} e igual a ${media}`
    })
}
escopo()    
    






/*const form = document.querySelector('#formulario')

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
}*/