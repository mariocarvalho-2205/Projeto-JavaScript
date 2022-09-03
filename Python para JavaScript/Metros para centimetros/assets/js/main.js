function converter () {
    const metros = document.getElementById('metros')
    const res = document.getElementById('res')

    let m = Number(metros.value)
    let cent = (m * 100).toLocaleString("pt-BR");  // .toLocale.String('pt-BR) faz a separação para milhar
    let mili = (m * 1000).toLocaleString("pt-BR");
    let km = m / 1000
    res.innerHTML = `${m} metros é equivalente a ${cent} centimetros<br />`
    res.innerHTML += `${m} metros é equivalente a ${mili} milimetros<br />`
    res.innerHTML += `${m} metros e equivalente a ${km} kilometro`
    console.log(m, cent, km)
}