/*

// Síncrono vs Assíncrono
? Descrição
? Sistema Síncrono
* Um sistema síncrono(synchronous) é uma tarefa que é concluída após a outra.
* 
* No exemplo apresentado na aula, uma imagem só carrega depois que a anterior termina de carregar.
* Ou seja, no sistema síncrono a tarefa 
* anterior precisa ser concluída, para então iniciar a próxima.
* 
* Por padrão, o JavaScript é um sistema síncrono
? Sistema Assíncrono
* Num sistema assíncrono(asynchronous) as tarefas são executadas de maneira independente uma da outra.
* 
* No exemplo apresentado na aula, as imagens são carregadas de maneira independente, não é necessário 
* esperar a primeira imagem carregar para iniciar o carregamento da próxima.
* 
* O JavaScript poderá usar o assincronismo ao seu favor

// Callback Conceito
? Descrição
* Antes de entender o conceito de Callback no JavaScript, primeiro precisamos entender que funções aceitam 
* qualquer tipo de dado como argumento, então no JavaScript é possível passar qualquer tipo de dado em uma 
* função.
* 
* function imprimirDado(dado) {
* 	console.log(dado)
* }
* 
* imprimirDado(1) 
* imprimirDado('texto') 
* imprimirDado(true)
* imprimirDado({ nome: 'João' })
* imprimirDado([1, 2, 3])
* function imprimirDado(dado) {
* 	console.log('outras tarefas')
* 	console.log(dado())
* }
* 
* imprimirDado(function () {
* 	return 'Olá Mundo'
* })
* Callback (chamar de volta) é uma função que é passada como argumento de outra função e depois de algum 
* tempo ela é chamada de volta.





*/

function print (dado) {
    console.log('testando')
    console.log(dado())

}

print(function() {
    return 'ola mundo'
})