// setTimeout

const timeOut = 3000
const finished = () => console.log("done")

setTimeout(finished, timeOut)

console.log('assincrono')  // essa linha será executada de forma assincrona -> primeiro que o restante do codigo