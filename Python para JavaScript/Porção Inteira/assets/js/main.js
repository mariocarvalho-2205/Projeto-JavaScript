function inteiro () {
    const num = Number(document.querySelector('#num').value)
    const res = document.querySelector('#res')
    const numInteiro = Math.trunc(num)

    res.innerHTML = `O numero flutuante ${num}, ficara ${numInteiro}`
    //console.log(numInteiro)
}
//console.log(123.425 | 0)   podemos utilizar o operador or | seguido do 0
//console.log(~~(123.65498))  podemos utilizar o duplo not ~~(numero) operador unario
//console.log(123.65498 >> 0) utilizando o deslocamento a direita