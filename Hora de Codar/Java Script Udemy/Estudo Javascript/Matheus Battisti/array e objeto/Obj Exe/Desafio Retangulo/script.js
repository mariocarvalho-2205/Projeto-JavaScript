class Retangulo {
    constructor(largura, altura) {
        this.largura = largura
        this.altura = altura

    }

    calcularArea() {
        let area = this.largura * this.altura
        return area
    }

    calcularPerimetro() {
        let perimetro = (this.largura + this.altura) * 2
        return perimetro
    }
}

let  calculoRetangulo = new Retangulo(4, 6)

console.log(calculoRetangulo.calcularArea())
console.log(calculoRetangulo.calcularPerimetro())