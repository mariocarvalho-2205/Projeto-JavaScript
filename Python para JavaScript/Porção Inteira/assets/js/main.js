function inteiro () {
    const num = Number(document.querySelector('#num').value)
    const res = document.querySelector('#res')
    const numInteiro = Math.trunc(num)

    res.innerHTML = `O numero flutuante ${num}, ficara ${numInteiro}`
    //console.log(numInteiro)
}