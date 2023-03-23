// clearTimeout

const timeOut = 3000
const finished = () => console.log("done")

const time = setTimeout(finished, timeOut)

setTimeout(() => console.log("fora do clearTimeout e ativo"), 1500)

clearTimeout(time)  // cancelando o setTimeout

// essa linha será executada de forma assincrona -> primeiro que o restante do codigo
console.log('clearTimeout cancelando o setTimeout time - assincrono')  