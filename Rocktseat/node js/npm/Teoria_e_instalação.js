/*
* NPM - Node Package Manager
*
* __glossary: Dependencias, Packages, Modules__
*
*[x] Verificando se temos o npm instalado `npm-v`
-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*--*-
*[x] Criar nosso próprio pacote 
! `npm init` <-> dessa forma sera perguntado na criação do pacote  
? Na criação do pacote é criado o arquivo json com o objeto abaixo
{
  "name": "estudando",
  "version": "1.0.0",
  "description": "aprendendo node",
  "main": "Teoria_e_instalação.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC"
}
! usando o npm init -y -> será criado o pacote sem perguntar nada para as propriedades, 
! será sim para tudo
-*-**-*-*-*-*-*-*-*-*-*---*-*-*-*-*--*-*-*-*-*-*-*-*-*-*-*-----*-*-*--*-*-*-*-*-*

*[] O que é o arquivo package.json
? é um arquivo no formato de json - Javascript Object Notation
as propriedades e os valores serão sempre com aspas duplas
exceto quando for um objeto ou um array
{
  "name": "npm",  -> é o nome do projeto(pacote) -  OBS- o nome do pacote for igual ao nome de a
                                                    lgum pacote ja existente, poderá dar conflito
  "version": "1.0.0", -> é a versão do projeto
  "description": "", -> Aqui coloca a descrição do seu projeto
  "main": "Teoria_e_instalação.js", -> qual será o arquivo principal que vai rodar, entender ou interpretar
  "scripts": {  -> usado para rodar script em javascript
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": ["palavraChave_1", "palavreChave_2"], -> é usado para colocar palavras chaves, OBS: Não colocar virgula no final do ultimo parametro.
  "author": "", -> Nome do autor do projeto
  "license": "ISC" -> licença do projeto
}


*[x] Utilizar módulos de terceiros `npm install ou npm i`  -> 
        * usado para instalar nmodulos de terceiros
        * Usando o npm i pacote -D ira instalar apenas para dependencia de desenvolvimento
        * Significa que so será usado quando estiver em um ambiente de desenvolvimento
    ? é criada uma pasta node_modules e um arquivo package-lock.json
        * Utilizando o npm update, será atualizado as dependencias de acordo com 
            * o que estiver no aruivo package.json
        * Para remover dependencias, é so remover a chave e o valor que está dentro do objeto dependencies
            * e fazer o updade do npm novamente

*[x] O que é o diretorio node_modules
    * é o diretorio onde sao armazenados todas as dependencias dos modulos
    * detalhe importante é que olhando o package.json, uma dependencia irá adicionando
    * outras.
        ! OBS: a pasta node-modules, não é enviada ao github
        ? para isso, será criado na raiz do projeto o arquivo .gitignore 
        ? e coloca o diretorio seguido de barra nome_diretorio/
        ? detalhe importante, se quiser pode apagar todo o diretorio e o arquivo gitignore
        ? e quando for trabalhar no projeto novamente é so usar o npm install
    


*[x] O que é o arquivo package-lock.json
    * O que o arquivo packalock-json traz algumas informações e dessas informações, quase nada servira para gente
    * É um arquivo na qual não colocamos a mão (não mexemos nele)
    * Ele serve para fazer um mapeamento de todas as dependencias que existem no seu projeto
    * Ele é quem vai fazer a manutenção dos modules para gente



*[x] Criar scrips para rodar com o npm `npm run test` 
    * vai rodar o script de test que está no package.json
    * na chave do stript, sera rodado o script
    * chave -> "test": "echo \"Error: no test specified\" && exit 1"
    * 
*
*





*/