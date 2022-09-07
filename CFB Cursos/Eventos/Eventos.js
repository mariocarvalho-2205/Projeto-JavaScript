function mudaCor (obj, cor) {
    obj.style.backgroundColor = cor
}

function mudaPos (obj) {
    obj.style.position = 'absolute'
    obj.style.left = Math.random() * 500 + 'px'
    obj.style.top = Math.random() * 500 + 'px'
}

function hora () {
    let data = new Date()
    let hora = data.getHours()
    let text = ''
    if (hora < 12) {
        text = 'Bom dia'
    } else if (hora > 12) {
        text = 'Boa tarde'
    } else {
        text = 'boa noite'
    }
    alert(`Olá, ${text}`)
}