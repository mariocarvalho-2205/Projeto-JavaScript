// clearInterval > 

const time = 1000

const checking = () => console.log('checking timeInterval now!!! and clearInterval!!!')

const repeatFunction = setInterval(checking, time)

// usando dessa forma irá cancelar imediatamente
//clearInterval(repeatFunction)

setTimeout( () => {
    clearInterval(repeatFunction)
    console.log('cancelado setInterval depois de 5000 ms')
}, 5000)