function dobroTriplo () {
    const num = document.getElementById("input")
    const res = document.getElementById('res')
    let n = Number(num.value)

    let dobro = n * 2
    let triplo = n * 3
    let raiz = Math.sqrt(n)  //n ** 0.5
    let potenciacao = n ** 2
    res.innerHTML = `O dobro de ${n} é ${dobro}<br />`
    res.innerHTML += `O triplo de ${n} é ${triplo}<br />`
    res.innerHTML += `A raiz quadrada de <strong>${n}</strong> é <strong>${raiz.toFixed(
      2
    )}</strong><br />`;
    res.innerHTML += `${n} elevado ao quadrado da ${potenciacao}`
    console.log(n, dobro, triplo, raiz)

}


