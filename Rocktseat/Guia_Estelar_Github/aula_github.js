/*
// Requisitos para o curso e revisão de Git
? Descrição
* Um dos requisitos que precisaremos para entender o curso é ter 
* visto a parte de "Ambiente dev de outro mundo" do discover e 
* também vai precisar do guia de Git.
* 
* De começo vamos revisar rapidamente algumas coisas sobre o 
* curso de Git e ver qual o fluxo que teremos aqui e também 
* veremos algumas palavras a mais que teremos no curso.
* 
* Abrindo o terminal, faremos um novo diretório com o comando 
* mkdir, no caso colocaremos o nome de "revisao", após criarmos,
* entraremos no nele usando o comando cd revisao , manualmente 
* seria come se estivéssemos criando uma pasta, colocando o nome
* e entrando nela, mas para nós é melhor controlar o computador 
* via texto, com isso estamos já treinando a usar mais o terminal.
* 
* Ainda no terminal damos um git init para iniciarmos o repositório,
* será onde iremos guardar as modificações do nosso código, feito 
* isso eu teria como criar um arquivo de texto usando o "vim" 
* digitando: vim [README.md](http://readme.md) , apertaremos a
* letra I para inserir algo, md é uma extensão de Markdown , 
* podemos alguns códigos específicos, podendo até usar alguns 
* HTMLs. Daremos então Esc :wq, para sair, lembrando que isso 
* é um comando do vim.
* 
* Agora se dermos um git status , podemos ver que estamos em uma 
* branch master, ou seja, ramificação master, também que não há 
* commits, os arquivos que não estão sendo rastreados, lembrando 
* do processo do Git, ele está na nossa working area local e temos 
* de passar o arquivo para nosa stage area, onde ele estará 
* preparado para que possamos criar o commit.
* 
* E agora precisamos fazer mais dois processos, o primeiro sendo
* git add . para adicionar todas as nossas modificações e o git 
* commit -m "first commit" , feito isso fizemos todo o processo 
* de criar um ponto na história.
* 
* Depois disso, agora algo que vamos aprender é dar um git push 
* para enviar ao GitHub até o nosso repositório, assim que 
* linkarmos nossa máquina a máquina do GitHub, e git pull para 
* trazer alterações lá da nuvem, ou também git clone para trazer 
* * um repositório novo até a nossa máquina através do Git.*
*  

// Configurando perfil público
? Descrição
* Após criar a conta no GitHub, ele perguntará se você fará um novo repositório, 
* ou colaborar com o seu time, ou aprender sobre o GitHub, para quem quiser aprender 
* mais afundo sobre é uma ótima opção, mas primeiro veremos a parte de perfil para 
* configuirar. clicando no canto superior direito, vamos abrir o Your profile e Edit 
* profile. 
* 
* Estaremos colocando o nome completo, o Email público, caso queira, selecionando 
* email settings podemos configurar se queremos ou não ele público, podendo colocar 
* outros Emails, para backup, para deixar como primário, para tirar a privacidade 
* do email, desmarcamos a caixa "Keep my email adresses private", colocamos a Bio, 
* seu site(se tiver), twitter, onde trabalha, sua localização e a opção importante 
* para quem quer ser contratado por alguma empresa "Avaliable for hire" e update 
* para salvarmos as alterações.



// Criando chave SSH
? Descrição
* O que é uma chave SSH?
* 
* É uma espécie de conexão que temos que fazer com a máquina e o servidores do 
* GitHub, sendo encriptada, para identificarmos que nossa máquina pode usar o GitHub.
* 
* 
* Para criarmos, clicaremos na bolinha do usuário, ir na parte de configurações, 
* e nela iremos até a opção SSH and GPG keys, mas antes vamos para o terminal.
* 
* Abrindo o terminal, no caso esse é o do macOS, digitamos ssh-keygen, para gerar 
* a chave ,-t rsa, para dizer o tipo de encriptação, -b 4096, a força da 
* encriptação, -C "maykrbrito@gmail.com", o email que estamos criando, isso tudo 
* na mesma linha, dando enter ele vai pedir algumas coisas que não precisamos, 
* apenas dando enter.
* 
* No windows precisaremos do Git instalado, ao instalar você terá um terminal 
* diferente, que podemos criar a chave da mesma forma que no macOS.
* 
* Agora com a chave precisamos pegar ela para colocarmos ela no botão verde, 
* ainda pelo terminal, damos um cd ~/.ssh/ , teremos algumas opções como 
* id_rsa e id_rsa.pub, que é o que queremos, mas não conseguimos navegar, fazer 
* um cd nele, mas conseguimos dar um cat para mostrar tudo que há no arquivo, 
* dando enter, vamos copiar tudo desde o ssh até o .com e voltar ao GitHub, 
* clicando no botão verde de nova chave, colocar um título e colar a chave e 
* adicionar ela.
* 












*/ 