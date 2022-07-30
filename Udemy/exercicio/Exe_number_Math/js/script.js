const numero = Number(prompt('Digite um numero: '))  // abre caixa de dialogo perguntando numero
const numeroTitulo = document.getElementById('numero-titulo')  // seleciona a tag span atraves do id 'numero-titulo': e salva na variavél numeroTitulo
const texto1 = document.getElementById('texto')  // seleciona a div com id texto

numeroTitulo.innerHTML = numero  // Adiciona o numero digitado na janela dentro da variavel que será exibida na tela

texto1.innerHTML = `<p>Seu numero - 2 é o <strong>${numero - 2}</strong><p>`
texto1.innerHTML += `<p>Seu numero + 2 é o <strong>${numero + 2}</strong><p>`
texto1.innerHTML += `<p>A Raiz quadrada de ${numero} é: <strong>${Math.sqrt(numero)} ${numero ** 0.5}</strong> e abreviado fica <strong>${Math.sqrt(numero).toFixed(2)}</strong></p>`
texto1.innerHTML += `<p>O numero ${numero} é inteiro? <strong>${Number.isInteger(numero)}</strong></p>`
texto1.innerHTML += `<p>O numero ${numero} arrendodado para cima é: <strong>${Math.ceil(numero)}</strong></p>`
texto1.innerHTML += `<p>O numero ${numero} arredondado para baixo é: <strong>${Math.floor(numero)}</strong></p>`
texto1.innerHTML += `<p>Seu numero é NaN <strong>${Number.isNaN(numero)}</strong></p>`
texto1.innerHTML += `<p>Com duas casas decimais ${numero.toFixed(2)}</p>`