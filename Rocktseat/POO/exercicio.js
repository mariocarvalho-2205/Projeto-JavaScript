class Reptile {
    // construtor
    constructor (firstAppearance) {
        this.firstAppearance = firstAppearance;
    }

    // metodos
    // 01 Tradicional
    getFirstAppearance() {
        return this.firstAppearance
    }

    // 02 Getters ou pegar - 
    get FirstAppearance() {
        return this.firstAppearance
    }

    //// não usar esse metodo para renoemar - é uma má pratica
    // 03 settesr ou setar  -- esse metodo permite setar um novo valor 
    set newFirstAppearance(firstAppearance) {
        this.firstAppearance = firstAppearance;
    }

    // 04 static
    static getClassName() {
        return this.name
    }
}

const smaug = new Reptile('The Robbit')

console.log(smaug)

console.log(smaug.getFirstAppearance())  // usa os parenteses no final da invocação

console.log(smaug.firstAppearance)  // pode omitir os parenteses na invocação


smaug.newFirstAppearance = 'mario e o novo valor'
console.log(smaug)

console.log(Reptile.getClassName())


class Article {
    constructor(title, date) {
        this.title = title;
        this.date = date
    }

    static compare (first, second) {
        return first.date - second.date
    }

}

const articles = [
    new Article('HTML', new Date(2023, 04, 03)),
    new Article('CSS', new Date(2023, 01, 01)),
    new Article('JavaScript', new Date(2023, 02, 02))
]

const sorted = [...articles].sort(Article.compare)

console.log(sorted)
