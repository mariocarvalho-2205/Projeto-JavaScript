// Dobro Triplo
function calculo() {
    let num = document.getElementById('num')
    let resultado = document.getElementById('res')
    let temp = Number(num.value)
    let dobro = temp * 2
    let triplo = temp * 3 
    resultado.innerHTML = `<p>O dobro de <strong>${temp}</strong> é <strong>${dobro}<strong><br /><p/>`
    resultado.innerHTML += `<p>O triplo de <strong>${temp}</strong> é <strong>${triplo}</strong></p>`
    resultado.style.backgroundColor = 'gray'
    resultado.style.borderRadius = '10px'
}