/* Ecercicio for */

function contar () {
    let start = document.querySelector('#start')
    let end = document.querySelector('#end')
    let step = document.querySelector('#step')    
    let res = document.querySelector('div#res')
 
    if ( start.value.length == 0 || end.value.length == 0 || step.value.length == 0 ) {     
        alert('Digite um numero valido!!') 
    } else {
        let s = Number(start.value)
        let e = Number(end.value)
        let ste = Number(step.value)
        if (ste === 0) {
            ste = 1
        }
        if (s < e) {
            res.innerHTML = 'Contando<br />'
            for (let c = s; c <= e; c += ste) {
                res.innerHTML += `${c} \u{1f61a}`  // utiliza o emoji no html e so funciona entre crase
            }           
        } else {           
            for (let c = s; c >= e; c -= ste) {
                res.innerHTML += `${c} \u{1f61a}`  // utiliza o emoji no html e so funciona entre crase
            }            
        }
        res.innerHTML += `<br />Finish!!!` 
    }
}
