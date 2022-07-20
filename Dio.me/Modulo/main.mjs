/* 
Importar 
Named Exports = importa partes do arquivo
comando import seguido de {} from './caminho do arquivo.js'

default exports = sera o retorno padrao do seu arquivo

import nome_da_funcao from './caminho do arquivo.js'

?dica, voce pode colocar apelido para funcao, dessa forma pode-se usar duas funções
em arquivos diferentes no arquivo que voce estar importando.
Ex: 
import {arquivo as Apelido} from './caminho_do_arquivo.js
Apelido.metodo()

importando tudo de um arquivo
import * as APELIDO_DO_ARQUIVO './caminho_do_arquivo.js

APELIDO_DO_ARQUIVO.metodoA()
console.log(APELIDO_DO_ARQUIVO.variavel)

Importa modulo import{funcao1, funcao2 } from "./nomedoaquivo.mjs ou js*/
import { mostreIdade, mostreCidade, mostreHobby } from "./funcoes.mjs"; 

console.log(mostreIdade('Mário', 48))
console.log(mostreCidade('Mário', 'Salvador'))
console.log(mostreHobby('Mário', 'Tocar Bateria'))