/*
? Conceito Estrutura de Dados:

*-> É uma maneira de organizar e ordenar informações como textos, numeros, booleanos, etc e registrar na
*    memoria do computador

* organizar dados (informações)
    * textos, números, booleanos
* Como estão registrados na memoria: Array e Objeto
Ex: 
array: [1, 2, 3]
objeto: {name: 'fulano, idade: 20} -> elemento name: 'fulano, elemento idade: 20

? Gerenciamento de dados:

Estrutura de dados tem a ver com a gestão das informações

Para esse gerenciamento , podemos dividir em 3 etapas.
* 1 -> Modelar a estrutura
* 2 -> Dar vida a estrutura (instanciar essa estrutura)
* 3 -> Criar as funcionalidades dessa estrutura.
    * Exemplo: inserir, excluir, buscar, exibir, contar ...
  
? Array -> Array, vetor ou arranjo, é uma estrutura amplamente utilizada e 
? implementada em quase todas as linguagens de programação.

Uma das estruturas mais basicas, simples de criar e utilizar.

* Caracteristicas:

* 1 -> Acesso pelo index
* 2 -> Respeita a ordem de inserção dos elementos
* 3 -> Dependendo do tamanho do Arrays, para encontrar e/ou deletar um elemento, 
        * será necessário um uso maior de performace.
        * 
* Aray no javascript 
    * São dinamicos
    * Você poderá ter dados de diferentes tipos misturados
        * dentro de um Array. String, numbers, booleans, objeto, funções e até outros arrays.
    * Existem muitos metodos já implementados
        * push(), pop(), find(), filter() entre outros   

Ex: ['a', 10, 'd', true]
index 0    1   2    3

? Matriz ou Vetor Multidimensional -> Significa que é um array dentro de outro array. Podendo ter muitos niveis. 

Ex: const students = [['joseph', 23, 'MG], ['Briana', 22, 'SP'], ['Priscila', 23, 'PR']]

console.log(students[0][1])  // 23


! =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
! Stack
? Stack ou Pilha -> Como uma pilha de livros. 
* Conceito importante:
* 1 - Ele é linear
* 2 - O ultimo a entrar na pilha é o primeiro a sair

! L.I.F.O - Last In First Out - O ultimo que entra, é o primeiro que sai

? Metodos fundamentais na stack

* 1 push(): adiciona um elemento à pilha
* 2 pop(): remove um elemento do topo da pilha
* 3 peek(): obter o elemento do topo da pilha
* Outros metodos póderam ser implementados como size() para mostrar o tamanho da pilha

* Passo 1: Modelando:
Estruturando a pilha
const Stack = {
    constructor() {
        this.data = []
        this.top = -1
    }

    / Adicionando elementos na Stack
    push(value) {
        this.top++  -> incrementando o top, ficando com o valor 0
        this.data[this.top] = value -> ira adicionar um valor na posição 0
        return this.data -> irá retornar toda a estrutura do array
    }

    / Removendo o ultimo elemento da Stack
    pop() {
        if(this.top < 0) return undefined
        const poppedTop = this.data[this.top] / pegando qual é o ultimo
        delete this.data[this.top] / deletando o ultimo elemento
        this.top-- / decrementa o top informando que foi removido um elemento
        return poppedTop
    }

    / Retorna se o top for maior que 0, irá retornar qual o ultimo elemento da pilha
    peek() {
        return this.top > 0 ? this.data[this.top] : undefined
    }
}

* Passo 2: Utilizando
const stack = new Stack

* Passo 3: Adicionando dados
stack.push('learning')
stack.push('data')
console.log(stack.push('structures))

* Consultando o ultimo dado
console.log(stack.peek())

* Removendo o ultimo dado
stack.pop()
console.log(stack.pop())

*/

class Stack {
    constructor() {
        this.data = []
        this.top = -1
    }

    push(value) {
        this.top++
        this.data[this.top] = value
        return this.data
    }


    pop() {
        if (this.top < 0) return undefined
        const poppedTop = this.data[this.top]
        delete this.data[this.top]
        this.top--
        return poppedTop
    }



    peek() {
        return this.top >= 0 ? this.data[this.top] : undefined
    }
}

const stack = new Stack()

stack.push('learning')
stack.push('data')
console.log(stack.push('structures'))

console.log(stack.peek())

stack.pop()
console.log(stack.pop())
console.log(stack.peek())

/*
! Queue ou Fila ->  É como uma fila de loja ou restaurante
* linear
* O primeiro que entra é o primeiro que sai

! First In First Out -> O primeiro a entrar na fila, é o primeira a sair dela
    ? Front (frente) -> É a referencia do primeiro elemento a entrar na fila
    ? Back (fundo) -> É a referencia do último elemento a entrar na fila
    ? Enqueue -> Significa que está entrando na fila
    ? Dequeue -> Significa que está saindo da fila

* Metodos fundamentais:
* enqueue(): adiciona um elemento ao final da fila
* dequeue(): remove o primeiro elemento a entrar na fila

? Outros metodos poderão ser implementados como size() para mostar o tamanho da fila ou
? front() para pegar o primeiro elemento da fila, dentre tantos outros.

* 1 Passo -> Modelando

class Queue {
    constructor() {
        this.data = []
    }

    enqueue(item) {
        this.data.push(item) // push() - adiciona ao final da fila
        console.log(`${item} chegou na fila!`)
    }

    dequeue() {
        const item = this.data.shift() // shift() - remove do inicio da fila
        console.log(`${item} saiu da fila!`)
    }
}

* 2 Passo -> Utilizando

const fila = new Queue()

fila.enqueue('Mariana')
fila.enqueue('Joao')
fila.enqueue('Andre')
fila.dequeue()
fila.dequeue()
fila.dequeue()



*/
// Testando Codigo
class Queue {
    constructor() {
        this.data = []
    }

    enqueue(item) {
        this.data.push(item) // push() - adiciona ao final da fila
        console.log(`${item} chegou na fila!`)
    }

    dequeue() {
        const item = this.data.shift() // shift() - remove do inicio da fila
        console.log(`${item} saiu da fila!`)
    }
}

const fila = new Queue()

fila.enqueue('Mariana')
fila.enqueue('Joao')
fila.enqueue('Andre')
fila.dequeue()
fila.dequeue()
fila.dequeue()


/*
* Visão Geral: 

* - É importante usarmos a Estrutura de dados para gerenciar os dados, as informações
    *   da nossa aplicação
* - Organizar, ordenar, buscar, são algumas funcionalidades básicas
* - Melhorar a escrita de algoritmos
* - Melhorar a eficiencia dos nossos aplicativos
* - Existem muitas estruturas a serem estudadas


 */