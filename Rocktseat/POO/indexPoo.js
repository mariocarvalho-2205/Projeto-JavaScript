/*
? O que é Programação Orientada a Objetos POO?
? Oriented Object Programming ou OOP

    * É um paradigma de desenvolvimento
    * Uma maneira de resolver um problema, um modo de pensar
    * Não está somente ligado a linguagem de programação, mas
        * a um entendimento amplo e atemporal para criação de software

? Utilização no mercado

* Na maioria dos sistemas atuais
* Várias linguagens (JS, TS, Java, Python...)
* Utilizado por Analistas de Sistemas e não somento pro programadores
    * Ná fasse de levantamento de requisitos de sistema
    * Via graficos, desenhos e textos

? Onde e quando usar a Orientação a Objetos

    *  Linguagens - irá depender da linguagem de programação, els precisa ser multi-paradigma
    *  Quando quiser aplicação Padrões de Projetos
    *  Quando quiser organizar seu codigo
    *  Para melhor entendimento do codigo, pesando nele como objetos
    *  Quando precisar fazer reuso de codigo
    *  Para separar a complexidade de cpodigo, abstrair codigo e expor de maneira simples
    *  Para classificar as rotinas e trechos de codigo

? Objetos: 

    * Todo Objeto possui
        * Propriedades e Funcionalidades
        * Estado e Comportamento
        * Atributos e Métodos
    ? Objetos Abstratos vs Mundo Real

    * Trazemos a representação de algo do mundo real para Objetos
        * pessoa
        * aluno
        * produto
        * carrinho de compras
    
    * Porem, alguns objetos na programação não são faceis de identificar, pois são abstratos com 
    *   por exemplo:
        * autenticação
        * autorização
    ! Nem todo objeto do mundo real fará parte do seu sistema




? Classes

    * As classes na orientação a objeto funcionam como um molde para os objetos. 
    * Os objetos são criados a partir de uma classe e muitos deles podem ser feitos 
        * da mesma classe.
            * Ex: Maquina de biscoito   
        *       instâncias
? Classes em Javascript
    Funcionam de uma maneira diferente

    * Syntactical sugar
    * Prototype
    * 
* Ex:
class Pessoa {
    constructor(nome) {
        this.id = ~~(Math.random() * 100000)
        this.nome = nome
    }
    dizerNome() {
        console.log(this.nome)
    }
}

const pessoa = new Pessoa('Mayk)

!! No Javascript já existe herança prototypal - Significa que ja vai puxar outra acima dela
!! Outra classe, muitas outras propriedades e funcionalidades, até chegar no ultimo pai da 
!! cadeia de proptotypos

A herança irá herdar as funcionalidades de acordo com o tipo 

? Encapsulamento

    * Colocar numa cápsula
    * Agrupamento de funções e variaveis
    * Esconder detalhes de implementação
    * Camada de segurança para os atributos e metodos
  
* // Estrutural

let altura = 50
let largura = 60

function calcularArea () {
    return altura * largura
}

let area = calcularArea()

* // Orientada a Objetos

class Poligono {
    constructor(altura, largura) {
        this.altura = altura
        this.largura = largura
    }

    get area () {
        return this.#calcularArea() o retorno desse metodo e o metodo invisivel
    }

    ? // O # significa que esse metodo não será visivel fora da classe
    #calcularArea (){
        return this.altura * this.largura
    }
}

* // criar poligono

let poligono = new Poligono(50, 60)
console.log(poligono)
console.log(poligono.area)

? Confusão e Solução

? Programação Estruturada
    * Processa a entrada e manipulação dos dados, até a saida
    * Uso de sequencias, estruturas de repetições e condições
    * Uso de uma rotina maior, ou sub-rotinas
    * Não existem restrições às variaveis
Ex: 

var valorHora = 50
var tempoEstimado = 20
var desconto = valorHora * tempoEstimado * (10 / 100)
var custoEstimado = valorHora * tempoEstimado - desconto
console.log(custoEstimado)


? Programação Orientada a Objetos
    * Surge para trazer um cuidado ao uso estruturado
        * Não elimina por completo o uso estruturado
    * Conceitos como Objetos e Classes
    * Cuidados com variaveis e rotina (Encapsulamento)
    * Melhor reuso de codigo(Herança)
* 

Ex:

const job = new Job()
job.valorHora = 50
job.tempoEstimado = 20
job.desconto = 10
const custoEstimado = job.calcularEstimativa()
console.log(custoEstimado)

? Herança 
* Significa que os objetos podem herdar, ou estender, caracteristicas bases de pais
* ou seja tudo que o pai tem, o filho tem tambem
* Herda uma cópia de atributos e metodos de outra classe

Ex: class Veiculo{
    rodas = 4;

    mover(direcao) {}
    virar(direcao) {}
}

class Moto extends Veiculo {
    constructor() {
        super() // significa que vai puxar todos os atributos e metodos do pai
        this.rodas = 2
    }
}

!! Um objeto pode estender de outro objeto que pode estender de outro objeto
!! Facil reutilização de codigo
!! POR PADRÃO JA EXISTE HERANÇA DE PROTOTIPOS DEPENDENDO DO TIPO

 */

