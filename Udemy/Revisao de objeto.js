// objeto literal e feito pelas chaves

const pessoa = {
    nome: 'nome da pessoa',
    idade: 'idade da pessoa',
    altura: 1.60
}

console.log(pessoa.nome)
console.log(pessoa["idade"]); 
const key = 'altura'
console.log(pessoa[key]);  // dessa forma é possivel acessar os dados dinamicamente.

// utilizando o modo construtor

const obj = new Object();

obj.nome = 'joao'
obj.idade = 50
obj.altura = 1.80

console.log(obj.altura)

// apagando chave no objeto
delete obj.altura

console.log(obj);

// utilizando função dentro do objeto

const obj2 = new Object()
obj2.marca = 'volvo'
obj2.modelo = 'xc60'
obj2.km = function () {
  return `${this.modelo} esta é zero `;
}
obj2.idade = 47
obj2.getDataNascimento = function () {
    const dataAtual = new Date()
    return dataAtual.getFullYear() - this.idade
}

console.log(obj2.getDataNascimento())
obj2.km()

// usando Factory functions 

function criaPessoa (nome, sobrenome) {
    return {
        nome,
        sobrenome,
        get nomeCompleto () {  // utilizando o get não e preciso executar o metodo.
            return `${this.nome} ${this.sobrenome}`;
        }
    }
}
const p1 = criaPessoa('mario', 'carvalho')
console.log(p1.nomeCompleto)  // utilizando o get não e preciso executar o metodo. Sem o get usa o parentese no final

// Function Constructor / função construtora

function Person(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
}

const nome2 = new Person('marinho', 'carvalho');
console.log(nome2)
// para travar um objeto utilizamos o comando freeze(nome_objeto)

// Ex: 
// Object.freeze(nome2)  // dessa forma não será possivel alterar o objeto
// pode ser travado o objeto this, porem trava todos os comandos this do objeto, e utilizado dentro do objeto
// tambem não consegue apagar