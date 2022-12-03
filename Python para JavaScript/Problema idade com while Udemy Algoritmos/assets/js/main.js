
const idade1 = document.querySelector('#idade-1')
const idade2 = document.querySelector('#idade-2')
const idade3 = document.querySelector('#idade-3')
const idade4 = document.querySelector('#idade-4')
const btn = document.querySelector('#btn')




btn.addEventListener('click', (e) => {
    e.preventDefault()
    let age1 = Number(idade1.value)
    let age2 = Number(idade2.value)
    let age3 = Number(idade3.value)
    let age4 = Number(idade4.value)
    idadeValue(age1, age2, age3, age4)
    
})

function idadeValue (idade1, idade2, idade3, idade4) {
    if (idade1 < 0) {
        alert('digite uma idade valida') 
    } else if (idade2 < 0) {
        alert('digite uma idade valida') 
    } else if (idade3 < 0) {
        alert('digite uma idade valida') 
    } else if (idade4 < 0) {
        alert('digite uma idade valida')
    } else {
        return media(idade1, idade2, idade3, idade4)
    }
    
}

function media (idade1, idade2, idade3, idade4) {
    let media = (idade1 + idade2 + idade3 + idade4) / 4
    return resposta(media)
}

function resposta (med){
    return alert(`A media entre a idades é ${med}`)
}