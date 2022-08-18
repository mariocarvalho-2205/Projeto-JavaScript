function conversor () {
    let metro = document.querySelector('#metro')
    let m = Number(metro.value)
    let centimetro = m * 100
    let resultado = document.querySelector('#resultado')
    //console.log(centimetro)

    resultado.innerHTML = `${m} metros é equivalente a ${centimetro}cm.`
}
conversor()