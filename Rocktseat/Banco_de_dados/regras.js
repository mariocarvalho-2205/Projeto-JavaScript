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



*/