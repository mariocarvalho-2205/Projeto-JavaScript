function submeter() {
    let num = document.getElementById('txtn1')
    let resultado = document.getElementById('resultado')
    let temp = Number(num.value)
    let ant = temp - 1
    let suc = temp + 1
    resultado.innerHTML = `O Antecessor de <strong>${temp}</strong> é <strong>${ant}</strong><br />`
    resultado.innerHTML += `O Sucessor de <strong>${temp}</strong> é <strong>${suc}</strong>`
    
}
