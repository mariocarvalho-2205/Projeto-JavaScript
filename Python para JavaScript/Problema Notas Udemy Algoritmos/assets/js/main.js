const form = document.querySelector('#form')
//const btn = document.querySelector('#btn')

form.addEventListener('submit', (e) => {
    e.preventDefault()
    const n1 = Number(document.querySelector('#nota-1').value)
    const n2 = Number(document.querySelector('#nota-2').value)
    const res = document.querySelector('#res')
    res.innerHTML = media(n1, n2)
})

function media (n1, n2) {
    let media = (n1 + n2) / 2
    if (media > 6) {
        return `Sua media foi ${media} - Aprovado`
    } else {
        return `Sua media foi ${media} - Reprovado`
    }
}
