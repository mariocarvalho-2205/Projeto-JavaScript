let casos = Number(prompt(('Quantos casos de testes serão digitados? ')))
let totalCobaias = 0
let totalCoelhos = 0
let totalRatos = 0
let totalSapos = 0

for (let i = 0; i < casos; i++) {
    let cobaias = Number(prompt('Quantidade de cobaias: '))
    let tipoCobaia = prompt('Tipo de cobaia: ').toUpperCase()
    totalCobaias += cobaias
    if (tipoCobaia === 'C') totalCoelhos += cobaias
    if (tipoCobaia === 'R') totalRatos += cobaias
    if (tipoCobaia === 'S') totalSapos += cobaias
}

console.log(`
    RELATORIO FINAL:
    Total: ${totalCobaias} cobaias
    Total de coelhos ${totalCoelhos}
    Total de ratos ${totalRatos}
    Total de sapos ${totalSapos}
    Percentual de coelhos ${((totalCoelhos / totalCobaias) * 100).toFixed(2)}
    Percentual de ratos ${((totalRatos / totalCobaias) * 100).toFixed(2)}
    Percentual de sapos ${((totalSapos / totalCobaias) * 100).toFixed(2)}
    `)
