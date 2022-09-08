function calc () {
    const qtdDias = document.getElementById('dias')
    const qtdKm = document.getElementById('km')
    const resultado = document.getElementById('res')
    let d = Number(qtdDias.value)
    let k = Number(qtdKm.value)
    let dia = d * 60
    let km = k * 0.15
    let total = dia + km
    resultado.innerHTML = `O valor a ser pago por ${d} dias, e ${k} km rodados é <br />R$ ${total.toFixed(2)}`
}

