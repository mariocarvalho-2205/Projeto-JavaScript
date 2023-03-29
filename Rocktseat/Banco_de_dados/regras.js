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



*/