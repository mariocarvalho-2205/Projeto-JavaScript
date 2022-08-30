function ePaisagem (altura, largura) {
    if (altura < largura ) {
        return true
    } return false
}

function ePaisagem2 ( largura, altura ) {
    return largura > altura 
}
const paisagem3 = (largura, altura) => largura > altura
console.log(paisagem3(1920, 1080))