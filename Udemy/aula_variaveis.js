/* Variaveis
Escopo: Escopo é a acessibilidade de objetos, 
variáveis e funções em diferentes partes do código.

Para quê serve o escopo
O escopo é extremamente importante em JavaScript porque ele pode ser 
interpretado de diversas formas. Um exemplo de como essas 
interpretações mudam foi a inclusão dos identificadores let e const, 
além do var.

Escopo de Bloco:
Anteriormente falamos do escopo criado por funções, mas esta não é a 
única forma de criarmos um escopo no JS. 
Todo o tipo de bloco cria um novo escopo, e por bloco queremos 
dizer qualquer estrutura que utilize chaves, como if, for, while e outras

Const e Let
A grande mudança trazida pelo ES2015 foram a introdução de let e const 
como maneiras de definirmos variáveis. 
Essas keywords permitem que trabalhemos não só com o escopo de funções, 
mas também com o escopo dos blocos, por exemplo, se utilizarmos apenas var:
=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
var name = 'Lucas'

const func = () => {  
  var name = 'Amanda'
  console.log(name) // 'Amanda'
}

func()

console.log(name) // 'Lucas'  

=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

Veja que temos duas variáveis com o mesmo nome. Uma delas está no escopo global, 
ou seja, acessível à todas as funções e objetos, 
e outra está dentro de um escopo de função.

Até ai seguimos o mesmo modelo de antes, porém, 
as coisas começam a ficar complexas quando removemos a função da jogada:
=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
var name = 'Lucas'

if (true) {  
  var name = 'Amanda'
  console.log(name) // 'Amanda'
}

console.log(name) // 'Amanda'  

=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
Veja que agora alteramos a variável name, mesmo estando fora de seu escopo. 
Isso porque o escopo da função só cobre funções, e não outros tipos de blocos, 
e isso essencialmente nos diz que ambas declarações de name estão no escopo global.

Isso pode causar uma série de problemas, pois em um código mais complexo, 
podemos ter trocas de variáveis indesejadas ou então vazamentos de memória.

É ai que let e const salvarão nossas vidas.

Ambos let e const possuem escopo de bloco, diferente do escopo de função do var. 
Isto significa que, se reescrevermos nosso trecho anterior removendo todos os var, 
teremos um código muito mais consistente:

-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
var = variavel de escopo global
var:
pode ser inicializada sem ser declarada 
pode ter seu valor modificado - reatribuida
pode ser redeclarada


let = variavel de escopo local
let:
pode ter seu valor modificado
não pode ser redeclarada

Não podemos usar como variaveis:
não podemos criar variaveis com palavras reservadas. Ex: var, console, if, function, etc
Precisam ter nomes precisam ser significativos. Ex: nome, idade, numero, endereco
não pode começar com numero
não podem conter espaços ou traços
palavras compostas se utiliza o modo camelCase. Ex: nomeCompleto, numeroCasa,
JavaScript é Case-sensitive, ou seja, maiuscula e minuscula fazem diferença
não podemos redeclarar variaveis com let.

const = variavel de escopo local de bloco // 
const:
Não pode ser declarada sem inicializar 
Não pode ser redeclarada
não pode ser redefinida(modificada) // reatribuida

podemos colocar o valor das variavei dentro de outras variaveis
Ex: 
const primeiroNumero = 5
const segundoNumero = 10
const soma = primeiroNumero * segundoNumero
console.log(soma)

-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
*/
const primeiroNumero = 5
const segundoNumero = 10
const soma = primeiroNumero * segundoNumero
const duplicado = soma * 2
let triplicado = duplicado * 3

// metodos abreviados
//triplicado *= 2  // OBS: Cuidado ao modificar o valor inicial da variavel

console.log(soma)
console.log(duplicado)
console.log(triplicado)


var nome = 'Mário'
//redeclarando let
let nome2 = 'Ady'
console.log(nome2)
nome2 = 'ady a gostosa'
console.log(nome2)

console.log(nome, 'O importante não é vencer todos os dias, mas lutar sempre.')
console.log('Maior que a tristeza de não haver vencido', nome, ', é a vergonha de não ter lutado!')
console.log('É melhor', nome2, 'conquistar a si mesmo do que vencer mil batalhas.', nome)
console.log(nome, 'Quem ousou conquistar e saiu pra lutar, chega mais longe!')

/* variavel declarada sem inicializar
Ex:
let nome // apenas declarada undefined, ou seja, sem nenhumr valor
a variavel pode ser inicializada posteriormente

*/

let nome3
nome3 = 'testando'
console.log(nome3)

// para verificar o tipo, utilizamos o typeof
console.log( typeof nome3, typeof primeiroNumero ) 

