/* Variaveis e Tipos
Atribuição de Valores:
Case Type                           Example
Original Variable as String         some awesome var
Camel Case                           someAwesomeVar - Mais usada em JavaScript
Snake Case                          some_awesome_var
Kebab Case                          some-awesome-var
Pascal Case                         SomeAwesomeVar
Upper Case Snake Case               SOME_AWESOME_VAR - Usada para contantes
-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

Identificadores de Variaveis:
* Podem iniciar com letra, com $ ou _.
* Não podem começão com numeros
* Podem ser usados letras e numeros
* E possivel usar acentos e simbolos
* Não podem conter espaçoes
* Não pode ser usado palavras reservadas
Dica: 
1 - maisuculas e minusculas fazem a diferença
2 - Utilizar nomes coerentes para variaveis
3 - Evite se tornar um programador alfabeto ou numerico

Tipos de dados primitivos:
    strings = cadeia de caracteres(letras, numeros e simbolos) ex: "mario", 'joao', `pode ser usado crase`
    number = numeros inteiros maior ou menor, e com ponto flutuante
        infinity
        NaN - note and number = 
    boolean = true e false
    null = no JavaScript é considerado objeto
    underfined = 
    object = array
    function
typeof = Usa-se para saber o tipo do dado da variavel 



Tipos de Variaveis:
var a = 1 // the scope is global / Usada em scopo global
let b = 2 // the scope is inside the if-block / Usada apenas em scopo local (dentro de bloco de codigo)
    OBS: Let, pode ter seu valo modificado apenas dentro do bloco de utilização.
    Ao sair do bloco, ela volta ao valor declarado como var fora do bloco
Ex: 
var a = 1
var b = 2

if (a===1) {
    var a = 11
    let b = 22
    console.log(a) // 11
    console.log(b) // 22
}

console.log(a) // 11
console.log(b) // 2 / Fora do bloco ela volta ao valor declarado como var.
*/
numberOne = 1
console.log(numberOne + 2)

var firstName = 'Joao'
var lastName = 'Silva'

if (firstName === 'Joao') {
    var firstName = 'Pedro'
    let lastName = 'Santos'
    console.log(firstName, lastName)

}
console.log(firstName, lastName)
typeof firstName
/*
                    var         const           let
escopo        global ou local   bloco           bloco
redeclarar          sim         nao             nao
reatribuir          sim         nao             sim
hoisting            sim         nao             nao

console.clear() - limpa a tela

Tipos de Dados em JS:
Dados Primitivos: numbers, strings, boolean, null, underfined
Dados compostos ou não primitivos: objects, arrays
ex:
let nome = "Joao"
*/

// strings
let nome = 'mario'
let sobrenome = 'sergio'

typeof nome // verifica o tipo de dado.
nome.concat(sobrenome) // concatena a variavelA.concat(variaveB)
// variavel.lenght - conta a quantidade de caracteres.
let exemplo = new String('blablabla') // String com inicial maiuscula vira objeto

// Para varrer a string, usamos colchetes no final da variavel com o indice para trazer
// o dado no indice solicitado
/* 
Formas de concatenar
Adicionando espaço entre as variaveis usando: " "
variavel = variaver_A + "espaço ou qualquer outra coisa" + variavel_B

Quebrando a linha entra as variaveis usando: \n
variavel = variaver_A + "\n" + variavel_B
OBS: Para adicionar mais linhas, é só repetir o \n dessa forma: \n\n\n

Adicionando espaço com ${}, usa-se crase no inicio e no final da string:
variavel = `${variaver_A} ${variavel_B}`

Quebrando linha com ${}: É só adicionar linda entra uma variavel e outra.

Para imprimir aspas dentro da variavel, utiliza-se \ antes da aspa.
ex: variavel = "\""

Separando tudo:
Separando letras de uma string: nome.split("")
separando palavras em uma frase: frase.split(" ")
OBS: Esse metodo não modifica o dado da variavel

Verificar dados dentro de uma variavel:
frase = "Olá, tudo bem?"
frase.includes("tudo") // includes vai retornar um valor boolean true ou false
true
Verificar se inicia com determinado caractere:
frase.starWith("O") // retorna true se for verdadeiro ou false
frase.starWith("R") // false
Verificar se finaliza com determinado caractere:
frase.starWith("?") // retorna true se for verdadeiro ou false
frase.starWith("o") // false

Mudando caractere:
frase.replace("?", "!") // dessa forma so é modificada 
a impressao da variavel com a modificação.
Pode-se criar uma nova variavel alterando o caractere desejado.
let novafrase = frase.replace("?", "!") // Assim e criada uma nova frase e a anterior
permandece a mesma.

var ou let = array[] "Vetores"

Metodos para array
array.length / mostra a quantidade de indices
array.push(dados) / adiciona itens no final do array 
array.unshift(dados) / adiciona no inicio do array
array.pop() / remove itens do final do array 
array.shift() / remove item do inicio do array
array.includes(dado) / verifica se existe o dado especificado
array.every(item => item === 5) / verifica se todas as entradas sao iguais a 5
array.some(item => item === 5) / verifica se algum deles e 5
array.reverse() / inverte a ordem do array
pesquisar map, filter, reduce


Objetos:
var objeto{Keys: Values, Keys: Values}
ex:
    objeto.name = 'mario'
    objeto.idade = 48
    {name: 'mario', idade: 48}
    OBS: objeto['sexo'] = 'M' / pode se adicionar chave e valor dessa forma tambem 

Metodos para Objetos "Dicionario":
objeto['nome'] / exibe o valor referente a chave
Object.keys(objeto) / mostra as chaves dentro do objeto
Object.values(objeto) / mostra os valores de cada chave dentro do objeto

Adicionando variavel como chave:
var mom = 'nome da mae'
objeto[mom] = 'maria'
{nome da mae: 'maria}


Empty, undefined e null

Empty = Significa que a variavel foi declarada, porem sem valor dentro
Ex: 
Number = 0
String = "" 
Array = []
Object = {}

Null = É quando queremos que o valor não exista, ou seja, não foi declarado.

Undefinded = É um valor indefinido



*/
