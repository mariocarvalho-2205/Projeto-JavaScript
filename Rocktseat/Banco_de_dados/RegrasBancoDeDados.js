/*




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

Comandos:

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