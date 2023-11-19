/*

// Criando componentes
● Na maioria dos projetos os componentes ficam em uma pasta chamada
components, que devemos criar;
● Geralmente são nomeados com a camel case: FirstComponent.js;
● No arquivo criamos uma função, que contém o código deste componente
(a lógica e o template);
● E também precisamos exportar esta função, para reutilizá-lo;
● Vamos ver na prática!
+
// Importando componente
● A importação é a maneira que temos de reutilizar o componente;
● Utilizamos a sintaxe: import X from ‘./componentes/X’ onde X é o nome
do componente;
● Para colocar o componente importado em outro componente, precisamos
colocá-lo em forma de tag: <FirstComponent />
● E então finalizamos o ciclo de importação;
● Vamos importar o FirstComponent em App;

// JSX
● JSX é o HTML do React;
● Onde vamos declarar as tags de HTML que serão exibidas no navegador;
● Ficam no return do componente;
● Temos algumas diferenças do HTML, por exemplo: class será className;
● Isso se dá pelas instruções semelhantes de JS e HTML, pois o JSX é
JavaScript, então algumas terão nomes diferentes;
● O JSX pode ter apenas um elemento pai;

*/