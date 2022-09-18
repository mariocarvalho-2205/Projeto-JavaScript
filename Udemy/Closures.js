/* Closure e a habilidade que a função tem de acessar o escopo lexico
    Uma closure é a combinação de uma função com as referências ao estado que a circunda (o ambiente léxico). Em outras palavras, uma closure lhe dá acesso ao escopo de uma função externa a partir de uma função interna. Em JavaScript, as closures são criadas toda vez que uma função é criada, no momento da criação da função.

function makeFunc() {
  var name = "Mozilla";
  function displayName() {
    alert(name);
  }
  return displayName;
}

var myFunc = makeFunc();
myFunc();

Ex2:
function makeAdder(x) {
  return function(y) {
    return x + y;
  };
}

var add5 = makeAdder(5);
var add10 = makeAdder(10);

print(add5(2));  // 7
print(add10(2)); // 12

Closures na prática
Esta é a teoria — mas closures são realmente úteis? Vamos considerar suas aplicações práticas. Uma closure deixa você associar dados (do ambiente) com uma função que trabalha estes dados. Isto está diretamente ligado com programação orientada a objetos, onde objetos nos permitem associar dados (as propriedades do objeto) utilizando um ou mais métodos.

Consequentemente, você pode utilizar uma closure em qualquer lugar onde você normalmente utilizaria um objeto de único método.

Situações onde você poderia utilizar isto são comuns em ambientes web. Muitos códigos escritos em JavaScript para web são baseados em eventos - nós definimos algum comportamento e então, o atribuimos a um evento que será disparado pelo usuário (quando uma tecla for pressionada, por exemplo). Nosso código normalmente é utilizado como callback: uma função que será executada como resposta ao evento.

Aqui temos um exemplo prático: suponha que queremos adicionar alguns botões para ajustar o tamanho do texto de uma página. Um jeito de fazer seria especificar o tamanho da fonte no elemento body e então definir o tamanho dos outros elementos da página (os cabeçalhos, por exemplo) utilizando a unidade relativa em:
  HTML
    <p>Some paragraph text</p>
    <h1>some heading 1 text</h1>
    <h2>some heading 2 text</h2>

    <a href="#" id="size-12">12</a>
    <a href="#" id="size-14">14</a>
    <a href="#" id="size-16">16</a>

CSS
body {
  font-family: Helvetica, Arial, sans-serif;
  font-size: 12px;
}

h1 {
  font-size: 1.5em;
}
h2 {
  font-size: 1.2em;
}
Copy to Clipboard
Nossos botões interativos de tamanho de texto podem alterar a propriedade font-size do elemento body, e os ajustes serão refletidos em outros elementos graças à unidade relativa.

O código JavaScript:

function makeSizer(size) {
  return function() {
    document.body.style.fontSize = size + 'px';
  };
}

var size12 = makeSizer(12);
var size14 = makeSizer(14);
var size16 = makeSizer(16);
Copy to Clipboard
size12, size14 e size16 agora são funções que devem redimensionar o texto do elemento body para 12, 14 e 16 pixels respectivamente. Nós podemos designá-las a botões (neste caso, links) como feito a seguir:

document.getElementById('size-12').onclick = size12;
document.getElementById('size-14').onclick = size14;
document.getElementById('size-16').onclick = size16;
Copy to Clipboard
<a href="#" id="size-12">12</a>
<a href="#" id="size-14">14</a>
<a href="#" id="size-16">16</a>
*/