/*
// iniciando o banco - mysql -u root -p

* VENDO OS BANCOS DE DADOS
SHOW DATABASES;

* criando banco de dados
CREATE DATABASE sistemaDeCadastro;

*acessando o banco
USE nome do banco de dados sem espaço;

* CRIANDO TABELA:
CREATE TABLE usuarios(
    nome VARCHAR(50),
    email VARCHAR(100),
    idade INT
);

* vendo as tabelas
SHOW TABLES;

* VENDO A ESTRUTURA DA TABELA
DESCRIBE nome da tabela ;

* INSERINDO DADOS NA TABELA
INSERT INTO nome da tabela(campos da tabela separado por virgula) VALUES (
    "na mesma ordem dos campos entre aspas duplas separados por virgula"
    ! numeros não coloca entre aspas
)

* LISTANDO DADOS NA TABELA
SELECT * FROM usuarios // todos os dados
SELECT * FROM usuarios WHERE campo selecionado condicional
SELECT * FROM usuarios WHERE idade < 49;

* atualizando dados na tabela
! SEMPRE USAR O UPDATE JUNTO COM WHERE
! Se passar sem o where, TODA OS CAMPOS DA TABELA SERÃO ALTERADOS!!!
UPDATE nome da tabela SET campo alterado = "novo valor" WHERE(condicional para update) campo = "antigo valor" 
UPDATE usuarios SET nome = "Carvalho" WHERE nome = "Mario";
* fazendo update de mais dados
UPDATE usuarios SET nome = "Mario", idade = 25 WHERE nome = "Carvalho";
UPDATE usuarios SET idade = 48 WHERE nome = "Mario";

* deletando registro
DELETE FROM nome tabela // apaga toda a tabela
DELETE FROM nome tabela WHERE condicional EX: nome ="nome da pessoa";

*/
CREATE TABLE usuarios(
    nome VARCHAR(50),
    email VARCHAR(100),
    idade INT
);

INSERT INTO usuarios(nome, email, idade) VALUES(
    "Antonio",
    "tom@gmail.com",
    35
);
