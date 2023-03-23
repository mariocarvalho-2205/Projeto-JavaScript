/*
* Timers -> uma maneira de trabalhar com tempo dentro do NodeJs
*
* O que vamos aprender
*
* [x] setTimeout -> vai rodar uma função depois de milisegundos
? sintaxe -> 
? setTimeout(função_de_execução, tempo_de_execução)
? Ex: 

const timeOut = 3000
const finished = () => console.log("done")

setTimeout(finished, timeOut)  // essa unção ficara rodando assincrona


! Essa linha será executada de forma assincrona -> primeiro que o restante do codigo
console.log('assincrono')  

* [x] clearTimeout > irá cancelar uma função setTimeout
Ex: 

const timeOut = 3000
const finished = () => console.log("done")

const time = setTimeout(finished, timeOut)

? esse irá funcionar sem passar pelo clearTimeout
setTimeout(() => console.log("fora do clearTimeout e ativo"), 1500)

* esse irá cancelar o setTimeout da variavel time
clearTimeout(time)  // cancelando o setTimeout  

! essa linha será executada de forma assincrona -> primeiro que o restante do codigo
console.log('clearTimeout cancelando o setTimeout time - assincrono')  


* [x] setInterval -> Irá rodar uma função repetidamente depois de um intervalo até que seja cancelada

Ex:

const time = 1000

const checking = () => console.log('checking timeInterval now!!!')

? irá executar a função repetidamente ate ser cancelada pelo clearInterval
setInterval(checking, time) 


* [X] clearInterval > irá cancelar um setInterval registrado
! OBS: setInterval e o setTimeout para cancelar, começão a contar juntos
Ex:

const time = 1000

const checking = () => console.log('checking timeInterval now!!! and clearInterval!!!')

const repeatFunction = setInterval(checking, time)

!usando dessa forma irá cancelar imediatamente
clearInterval(repeatFunction)

! Para cancelar depois de um tempo usamos a função setTimeout para executar o clearInterval
setTimeout( () => {
    clearInterval(repeatFunction)
    console.log('cancelado setInterval depois de 5000 ms')
}, 5000)
* 
? * Iremos praticar um pouco mais de: 
* [x] Assicronismo
* [x] Callbacks


*/