function media() {
    let nota1 = document.getElementById('nota1')
    let nota2 = document.getElementById('nota2')
    let med = document.getElementById('media')
    let n1 = Number(nota1.value)
    let n2 = Number(nota2.value)
    let media = (n1 + n2) / 2
    med.innerHTML = `<strong>A media entre ${n1} e ${n2} é ${media}</strong><br />` 
    if (media >= 5) {
        med.innerHTML += `<strong>Você foi aprovado</strong>`
        med.style.color = 'white'
        med.style.backgroundColor = 'green'
    } else {
        med.innerHTML += `<strong>Voce foi Reprovado</strong`
        med.style.backgroundColor = 'red'
        med.style.color = 'white'
    }
}

