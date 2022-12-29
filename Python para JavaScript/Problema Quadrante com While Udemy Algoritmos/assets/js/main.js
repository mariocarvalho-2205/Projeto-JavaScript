
function quadrante ( ) {
    let valueX = prompt('Digite um valor para o eixo X: ')
    let valueY = prompt('Digite um valor para o eixo Y: ')

        /*if (typeof valueX === 'number' && typeof valueY === 'number') {
            console.log('sao numeros')
        }*/

    while (valueY !== '' && valueX !== '') {
        console.log('cheio', valueX, valueY)

        if (valueX === 0 && valueY === 0) alert('Origem')
        if (valueX > 0 && valueY > 0) alert('Q1')
        if (valueX > 0 && valueY < 0) alert('Q2')
        if (valueX < 0 && valueY < 0) alert('Q3')
        if (valueX < 0 && valueY > 0) alert('Q4')
        if (valueX > 0 && valueY === 0) alert('Eixo X')
        if (valueX === 0 && valueY > 0) alert('Eixo Y')

        valueX = prompt('Digite um valor para o eixo X: ')
        valueY = prompt('Digite um valor para o eixo Y: ')
    }
    console.log('vazio')
}
quadrante()
