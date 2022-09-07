function convertTemp () {
    const select = document.getElementById('escolha-temp')
    const option = select.options[select.selectIndex]
    document.getElementById('value').value = option.value
    /*const graus = document.getElementById('temp')
    const g = Number(graus.value)
    
    const tempValue = temp.options[temp.selectIndex]
    const res = document.getElementById('res')
    console.log(tempValue, g)*/

} 
convertTemp()