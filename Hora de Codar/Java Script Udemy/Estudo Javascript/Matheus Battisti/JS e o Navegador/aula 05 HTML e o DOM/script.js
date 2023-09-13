/*

// WEB - HTML e DOM - Document Object Model

* Quando uma pagina da web é requisitada, ela recebe um texto 
* que é transformado em uma estrutura HTML;

* As tags vão se aninhando uma as outras, formando uma estrutura qme
* que elementos ficam dentro dos outros

* Essa estrutura tem uma representação exatamente igual para o JS chamada de DOM

* E por meio do JS podemos acessar cada um destes elementos do HTML através do DOM
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>JS e o Navegador - HMTL e o DOM</title>
    <script src="script.js"></script>
    
</head>
<body>
    <div>
        <h1></h1>
        <p></p>
    </div>
    <div>
        <h2></h2>
        <ul>
            <li></li>
            <li></li>
            <li></li>
        </ul>
    </div>
</body>
</html>

* Podemos mudar completamente uma página HTML através do DOM;
* É possivél alterar: elementos, atributos, CSS
* Além de alterar podemos adicionar e tambem remover
* Além de ser possivél criar eventos na página, como animações
* 
*/

console.log(document)