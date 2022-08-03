/*
Condições parte 1

extrutura do codigo condicional:

if (condição) {
    será executado for verdadeiro
} else {
    será executado se for falso
}

Tipos de condição:

Simples: Apenas verifica se for verdadeiro:
if (condição) {
    será executado for verdadeiro
}

*/
//var area = document.getElementById('area')


function calcular () {
    var txtv = document.querySelector('input#txtvel')
    var res = document.querySelector('div#res')
    var vel = Number(txtv.value)
    res.innerHTML = `<p>Sua velocidade atual é de <strong>${vel}</strong> km/h.</p>`
    
        
        if (vel > 60) {
            res.innerHTML += `<p>Está acima da velocidade</p>`
            res.innerHTML += `<p><strong>Você foi multado</strong></p>`
            res.style.backgroundColor = 'red' 
        } else {
            res.innerHTML += `<p>Sua velocida está ok. Tenha uma boa viagem!.</p>`
            res.style.backgroundColor = 'green'
        }
    
    res.innerHTML += `<p>Dirija sempre com sinto de seguraça.</p>`  
} 




