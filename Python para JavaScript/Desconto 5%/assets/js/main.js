function calc () {
    const num = document.getElementById('num')
    const res = document.getElementById('res-text')
    const descPercent = 0.05
    let n = Number(num.value)
    function desconto () {
        let desconto =  n - (n * descPercent)
        console.log(desconto)
        res.innerHTML = `R$ ${n.toFixed(2)} com ${descPercent*100}% de desconto fica R$ ${desconto}`
    } return desconto()
} 