let nomes = ['joao', 'mario', 'jorge', 'maria']

let palavras = ['joia', 'massa', 'aqui', 'talves','coisa', 'foi']

function qtdNomes (arr) {
    if (arr.length >= 5 ) {
        console.log('muitos elementos')
    } else {
        console.log('poucos elementos')
    }
}

qtdNomes(nomes)
qtdNomes(palavras)