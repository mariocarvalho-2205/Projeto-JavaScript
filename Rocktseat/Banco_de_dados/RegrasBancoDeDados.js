/*

Siga o passo a passo abaixo: 

Troque a porta do mysql da seguinte forma: acesse xampp / mysql / bin e procure pelo arquivo my.ini

e então procure por port = 3306 e alter para outra, ex: port = 3307 

Procure por port = 3306 em todo o documento my.ini e altere de 3306 para 3307 ou outro. 

Salve o arquivo my.ini e então reinicie o seu servidor xampp.




Regras para escrever nome de tabelas e de campos

1 - Deve começãr por uma letra do alfabeto
2 - Os caracteres seguintes não são permitidos
    () + - / * " ; = & > < ' {} %
3 - Não pode conter espaços - substituir por _
4 - Não pode conter acentuação nas palavras

Tabela: perfil

nome: TEXT
Nome_de_usuario: TEXT UNIQUE
Descricao: TEXT
Telefone: Number
id_user: NUMBER PRIMARY KEY


Tabela : posts

id_post: NUMBER PRIMARY KEY
post: TEXT
video: TEXTE
data: DATATIME
id_user: NUMBER FOREING KEY(perfil)
! =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-  Danki Code =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
! Comandos:

// mysql -u root -p // -> para acessar o banco de dados

// show databases;  // lista todas as databases que exeistentes no servidor local

// Criando catabases 
* create database 

=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
// Selecionar databases
*  use nome_database;
// Ex: use curso_banco_de_dados;


// Criando tabelas
* CREATE TABLE `nome_tabela` (`nome_coluna` TIPO NÃO_VAZIO AUTO_INCREMENT)
* Ex: 
? CREATE TABLE `posts` (`id` INT NOT NULL AUTO_INCREMENT, `titulo` VARCHAR(255) NOT NULL, `Conteudo` TEXT NOT NULL, `autor_id` INT NOT NULL, primary key (`id`) ) ENGINE=InnoDB; 
? CREATE TABLE `autores` (`id` INT NOT NULL AUTO_INCREMENT, `nome` VARCHAR(255) NOT NULL, primary key (`id`) ) ENGINE=InnoDB; 

// Exibindo tabelas
* show tables;

// Exibir Selecionando - Visulizar conteudo inseridono no registro da tabela
* SELECT * FROM autores
* SELECT nome_coluna FROM autores
    podemos selecionar os dados ordenados de maneira crescente ou decrescente
    comando: order by
    Sintaxe:
    * SELECT * FROM nome_coluna ORDER BY valor_coluna DESC OU ASC;

// Visualizar colunas
* SHOW COLUMNS FROM nome_coluna;

// Inserindo dados na coluna
* INSERT INTO `posts` VALUES (null, "Meu primeiro post", "Conteudo do primeiro post", 0);

// UPDATE - Irá atualizar dados na tabela
! OBS: se não utilizar o comando WHERE, Ele mudará todos os campos da tabela

?Sintaxe
                                dado atual        dado atual      local para atualizar
* UPDATE funcionarios SET nome='Mário Carvalho', cpd=98765432199 WHERE id_funcionario=12

// DELETE - Apaga o registro da tabela toda, ou seja, toda a linha(Registro completo)
! OBS: Ele não apaga o registro, apaga apenas os dados
! OBS2: Não pode executar o DELETE sem USAR O WHERE, ISSO APAGARA TODOS OS DADOS DO BANCO DE DADOS!!!

? Sintaxe
? DELETE 
* DELETE FROM funcionarios WHERE id_funcionario = 12

// GROUP BY

? Usado para agrupar os dados por uma determinada coluna retornando o primeiro valor de um grupo
Ex: selecionando os dados de um determinado usuario

Sintaxe
* SELECT * FROM tabela GROUP BY nome_coluna; 
* SELECT * FROM posts GROUP BY autor_id;

// AGRUPANDO E ORDENANDO
* SELECT * FROM tabela GROUP BY nome_coluna ORDER BY desc;
* SELECT * FROM post GROUP BY autor_id ORDER BY desc;

* SELECT * FROM tabela WHERE nome_coluna = 'valor_procurado' GROUP BY coluna_para_agrupar ORDER BY coluna_para _ordenar DESC;
* SELECT * FROM posts WHERE titulo = 'Inserindo valores' GROUP BY autor_id ORDER BY id DESC;


! =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-  Danki Code =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
SELECT-> Usado para buscar e vai mostar as informaçõe
- * ira selecionar todas as informações
FROM está de onde, ou seja em qual tabela
nome da tabela em seguida
Sintaxe -> SELECT * FROM nome_tabela

SELECT ESPECIFICANDO CAMPO


Sintaxe -> SELECT nome_coluna, nome_coluna2 FROM tabela
OBS: A ordem de visualização, será exibida de acordo com a ordem escrita no comando

SELECT WHERE -> ira procurar na tabela os dados referentes a um campo especifico
Sintaxe -> SELECT * FROM nome_tabela WHERE nome_campo_referencia
Ex: SELECT * FROM aluno WHERE matricula = 1

Utilizando like -> irá buscar dados por que contenham trecho ou caractere
"j%" -> nesse caso que dizer que ira buscar todos os nomes que começão com J e desconsiderando o restante da palavra
"%G%" -> dessa forma, vai retornar os dados que contenham a letra G no inicio ou no meio da palavra


Sintaxe -> SELECT coluna1, coluna2 FROM nome_tabela WHERE campo_especifico like "%G%"


! Operador Relacional = vai retornar os dados especificos de um usuario
OBS: O igual so irá funcionar em campos que contenham number

para pesquisar textos temos que usar o comando like e envolver o texto em aspas

! Operadores Logicos 

AND -> Sintaxe
SELECT * FROM aluno WHERE nome like "J%" AND matricula < 2

-=-=-=-=-=-=-=-=-=-=-

OR -> Sintaxe
                                        OU
SELECT * FROM aluno WHERE matricula > 1 OR nome like 'm%'

? BETWEEN - Irá retonar dados entre um valor e outro
                                                ENTRE     E
Sintaxe -> SELECT * FROM aluno WHERE matricula BETWEEN 4 AND 7

? NOT BETWEEN - Irá retonar TODOS OS dados CUJO VALOR seja diferente do intervalo informado

SELECT * FROM funcionarios WHERE id_funcionario NOT BETWEEN 4 AND 7

=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

? IN - Irá retorna os valores de diversas posições na tabela

Sintaxe
SELECT * FROM funcionarios WHERE id_funcionario IN (2, 4, 6)

? NOT IN - Irá retorna os valores de diversas posições na tabela
Sintaxe                                                 posições
SELECT * FROM funcionarios WHERE id_funcionario NOT IN (2, 4, 6)

? IS ou E - Irá retornar o campo cujo valor seja NULL

Sintaxe 
SELECT * FROM funcionarios WHERE id_departamento  IS NULL

? IS NOT ou NÃO E - Irá retornar o campo cujo valor NÃO seja NULL

Sintaxe
SELECT * FROM funcionarios WHERE id_departamento  IS NOT NULL

=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

? INSERT - Irá permitir que possamos adicionar mais campos na tabela

Sintaxe
INSERT INTO nome_tabela(campos_para_preencher)
INSERT INTO funcionarios (nome, cpf) VALUES ('Mário', 52345678911)

? UPDATE - Irá atualizar dados na tabela
! OBS: se não utilizar o comando WHERE, Ele mudará todos os campos da tabela

Sintaxe
                                dado atual        dado atual      local para atualizar
UPDATE funcionarios SET nome='Mário Carvalho', cpd=98765432199 WHERE id_funcionario=12

? DELETE - Apaga o registro da tabela toda, ou seja, toda a linha(Registro completo)
! OBS: Ele não apaga o registro, apaga apenas os dados
! OBS2: Não pode executar o DELETE sem USAR O WHERE, ISSO APAGARA TODOS OS DADOS DO BANCO DE DADOS!!!

Sintaxe
DELETE 
DELETE FROM funcionarios WHERE id_funcionario = 12

*/