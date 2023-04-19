/*
// Visão Geral
? Descrição
* Primeiro vamos entender qual o significado da sigla HTTP, que é Hypertext Transfer Protocol, 
* em português Protocolo de Transferência de Hipertexto que é o conjunto de regras para a 
* comunicação por meio de Hipertexto, um tipo de texto que pode carregar diferentes dados. 
* O protocolo HTTP é usado todos os dias para acessar sites pela internet, pois é ele que 
* permite a troca de dados na web, entre esses dados estão códigos HTML e CSS, Scripts. 
* imagens e vídeos, entre muitos outros, e para cada um desses recursos executa uma chamada.

// Visualizando a comunicação
? Descrição
* No protocolo HTTP tudo funciona com pedidos e respostas, que são chamados em inglês como Request 
* e Response, mandando mensagens nos dois casos. No caso das mensagens de pedidos, você precisa de 
* um verbo HTTP, que chamamos de método, que vai definiir o tipo de pedido que está sendo feito, 
* por exemplo o método GET, vindo do inglês para "pegar", pega um recurso, como um URL para algum 
* local da internet, ou o método POST, que serve para criar um recurso. Depois do pedido, a resposta 
* traz um Status Code do servidor, que é um código sobre o estado do seu pedido, entre esses códigos, 
* estão 200, onde tudo deu certo e sua página foi enviada, 404, onde o servidor não conseguiu encontrar 
* o pedido, 301, que é um redirecionamento para outro local, entre outros além do Status Code, o 
* servidor pode mandar um header e um body. Existem coisas que podem estar tanto na Request quanto na 
* Response, que são o header e o body, os Headers são campos informativos, e o body contém conteúdo, 
* podendo ser em forma de HTML ou JSON.


// Visualizando com DevTools
? Descrição
* Nesta aula vamos aprender um pouco mais sobre HTTP usando a ferramenta DevTools, mais especificamente a 
* aba "Network", inglês para "Rede". Com a aba aberta, podemos entrar em um site, por exemplo o Google, e 
* iremos ver diversas informações aparecendo, se clicarmos na primeira dessas informações podemos ver 
* algumas das informações sobre o pedido e a resposta. Também pode-se ver, que o navegador faz um pedido 
* para cada link, midia, entre outros, e cada pedido tem sua resposta.


// Visualizando com cURL
? Descrição
* Por mais que já possamos visualizar algumas informações com o DevTools, precisamos de alguns detalhes a 
* mais para trabalhar, então usaremos uma ferramenta extra chamada cURL, que já vem instalada em sistemas 
* baseados em UNIX, e no Windows nós aconselhamos a usar a ferramenta Git Bash, que também vem com ela. 
* Usando o cURL podemos entender alguns conceitos, primeiramente temos que saber que o cURL está fazendo o 
* papel do cliente, ao invés do navegador, com a ferramenta, também conseguimos ver o corpo da resposta, o 
* que não era possível com o DevTools, e para também pegar os headers com o cURL, podemos adicionar -i ao 
* comando antes do link, com o parâmetro -v podemos ver todos os headers, tanto os de saída quanto de chegada.
* Acessar o manual do curl 
* man curl



// Conceitos HTTP
? Descrição
* Nessa aula vamos esclarecer alguns conceitos relacionados ao HTTP, que foi feito pra ser um protocolo simples e 
* fácil de entender pra qualquer pessoa. Ele foi baseado na estrutura de cliente/servidor, ou seja, sempre vão 
* ter uma requisição e uma resposta acontecendo, como um exemplo, voce pode pensar na forma de comprar um lanche, 
* você faz um pedido, especificando a comida que você quer, e o estabelecimento te "responde" com a comida. 
* O HTTP foi criado para também ser stateless, traduzindo, não guardar estado, ou seja, ele não vai guardar 
* nenhuma informação, e não existe nenhuma relação entre as conexões. Outra característica do protocolo é ser 
* extensível, podendo fazer diversas trocas de informação entre o cliente e o servidor, conforme a necessidade.
* 
 * 
 * 
 * 
 * 
 * 
 * 
 */