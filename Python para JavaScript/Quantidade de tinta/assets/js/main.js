function calcular () {
    const larg = document.getElementById('largura')
    const alt = document.getElementById('altura')
    const res = document.getElementById('res')
    let tinta = 2
    function qtdTinta () {
        let lar = Number(larg.value)
        let al = Number(alt.value)
        let area = lar * al
        let tintaNec = area / tinta
        console.log(lar, al, tintaNec)
        res.innerHTML = `Para ${lar} de largura e ${al} de altura:<br />`
        res.innerHTML += `Você vai precisar de ${tintaNec} litros de tinta!!`
    } return qtdTinta()
    
    

    
     

}
calcular()