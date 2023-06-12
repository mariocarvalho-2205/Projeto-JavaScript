// class WordCounter{
//     constructor() {}

//     countWords(string) {
//         let words = string.split(' ')
//         console.log(words.length)
//     }
// }

// let palavras = new WordCounter()

// palavras.countWords(' minha pequena frase agora')

class WordCounter {
    constructor() {
        
    }
    
    countWords(string) {
        let palavras = string.split(' ')
        let qtdPalavras = palavras.length
        
        return qtdPalavras
    }
}

let qtdPalavras = new WordCounter()

console.log(qtdPalavras.countWords('algumas palavras escritas'))