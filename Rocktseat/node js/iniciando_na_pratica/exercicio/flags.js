function getFlagValue (flag) {
    const index = process.argv.indexOf(flag) + 1
    const name = process.argv[index]
    const teste = "testando"
    console.log('joao ' + teste)
    return `${name} mais a variavel ${teste}`
}


//
//module.exports vai enviar os dados para a pagina que está chamando
// Sintaxe module.exports = função, string, number, ou objeto ou variavel
module.exports = getFlagValue;