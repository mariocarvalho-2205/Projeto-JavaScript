/*
* Instalar pacote de maneira global

* - [x] Instalar pacote de maneira global `npm i opn -g`
    *   irá instalar o pacote de maneira global, dessa forma não será criada a pasta node modules
    *   para verificar o diretorio usamos o -> npm root -g
    *   para desinstalar o pacote usamos o -> npm i nome_pacote -g
* - [x] Desinstalar pacotes -> 

* - [x] Mudar versão de pacotes
    *   npm i moment - > irá atualizar o pacote
    *   Sintaxe -> "moment": "^2.29.4"
    *       major.minor.patch
    *       patch = significa a resolução de algum bug
    *       minor = significa que vai ter alterações mais não existe a possibilidade de 
    *               quebrar o que esta acontecendo no projeto
    *       major = significa que é a versão do projeto e poderá ate quebrar dependendo da 
    *               vers´~ao do projeto
    *       ^ = significa que vai atualizar o patch e o minor
    *       ~ = significa que vai atualizar so o patch
    *       * = significa que irá mudar todas as versões
    !       OBS: Sem nenhum dos sinais significa que não vai mudar nada   
    ? Para mudar a versão usamos o npm i moment@numero_versão
    * 
    * Verificar versão -> npm outdated
    *   Package  Current  Wanted  Latest  Location             Depended by
    *   moment     1.5.1   1.7.2  2.29.4  node_modules/moment  instalando pacotes
    *   nome     atual  desejada  ultima
    *  para instalar a ultima versao usamos o npm i moment@latest
* 



 */