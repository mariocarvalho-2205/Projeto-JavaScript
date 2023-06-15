class WordCounter{
    constructor() {}

    countWords(string) {

        if(string.trim() === '') {
            return 0
        }
        let words = string.split(/\s+/)
        console.log(words.length)
    }
}

let counter = new WordCounter()

counter.countWords('minha casa')
