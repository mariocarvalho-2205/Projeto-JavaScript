// selecionado o select

/* Sintaxe 
    const indice = variavel.selectedIndex  seleciona o indice
    const value = variavel.value recupera o valor
    const text = variavel.options[indice].text  -> recupera o texto
*/


function convertTemp () {
    
    const select = document.getElementById('escolha-temp')
    const temp = document.getElementById('temp')


    const indice = select.selectedIndex
    const value = select.value
    const text = select.options[indice].text
    const tempValue = temp.value
    /*if (value === 'C') {
        console.log('ccc' + tempValue)
    } else {
        console.log('fff' + tempValue)
    }*/
    console.log(select, indice, value, text, tempValue)
    
    
    /*let select = document.getElementById('escolha-temp')
    let optionValue = select.options[select.selectedIndex].value
    let temperatura = document.getElementById('temp').value
    const res = document.getElementById("res");
    console.log(optionValue, temperatura);*/
    
    

} 




//document.getElementById('value').value = option.value
    /*const graus = document.getElementById('temp')
    const g = Number(graus.value)
    
    const tempValue = temp.options[temp.selectIndex]
    
    console.log(tempValue, g)*/