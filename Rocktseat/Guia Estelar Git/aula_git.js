/*

*Tipos de controles de versão
//Descrição
//Sistemas locais
Copiar os arquivos para outro diretório
Muito comum e muito simples
Incrivelmente propensa a erros
Fácil de sobreescrever arquivos, caso haja uma cópia errada
Para superar os possíveis erros, existe o RCS - Revision Control System

Era muito popular antigamente, para o controle de versão.

Algumas das características são:

Mantém o conjunto de alterações, ou seja, as diferenças entre os arquivos
Possui formato especial no disco;
Pode re-criar como qualquer arquivo se parecia em qualquer ponto do tempo, adicionando-se todas as alterações ao arquivo.
//Sistemas centralizados:
Exemplos, CVS, Subversion e Perforce.

Um único servidor que contém todos os arquivos

Vários clientes clientes usam arquivos a partir desse servidor central

Por muitos anos, tem sido o padrão para o controle de versão. Algumas de suas vantagens incluem o controle sobre a atividade dos colaboradores no projeto, os administradores têm controle refinado sobre quem pode fazer o que, e é muito mais fácil administrar um CVCS do que lidar com bancos de dados locais de cada cliente.

Porém, tem algumas desvantagens, já que se esse servidor der problema durante uma hora, nessa hora ninguém será capaz de colaborar ou salvar as alterações de versão para o que quer que estejam trabalhando, também corremos o mesmo risco de perder tudo se um disco falhar, assim como no sistema local, já que toda vez que trabalhamos com todo o histórico em um só local, corremos o risco de perder tudo.

//Sistemas distribuídos
Há também, o melhor dos dois mundos, os chamados sistemas distribuídos, alguns exemplos incluem Git, Mercurial, Bazaar e Daarcs

* Ele vai duplicar (clonar) localmente o repositório completo, 
* se qualquer servidor morrer enquanto algum sistema estiver colaborando por meio dele, 
*   qualquer um dos repositórios do cliente poderá ser copiado de volta para o servidor, 
* cada clone é um backup completo de todos os dados, isso sem falar que os 
* clientes usam o estado mais recente dos arquivos.


//O que é o git
* Descrição
* É um sistema de controle de versão distribuído, é open-source, então além de gratuito seu código é aberto, e permite que você volte a qualquer ponto na história do projeto, já que cada alteração no código cria um commit, e cada commit é um ponto na história.

*Também pode controlar o fluxo de novas funcionalidades, através das ramificações (branch), que funcionam como universos paralelos, onde além do projeto principal, você pode criar uma linha alternativa, adicionar pontos na mesma e depois uni-la novamente à linha principal, sem falar na possibilidade de poder trabalhar com vários devs ao mesmo tempo, analisando e resolvendo conflitos, porém nesse curso não falaremos sobre essas ramificações, teremos mais foco em nossos próprios projetos, as ramificações ficarão para outro curso.


//Configuração inicial
* Descrição
* Nesse vídeo falaremos sobre a configuração inicial do git, que será feita apenas uma vez por computador e o efeito se manterá mesmo após atualizações, e você também vai poder alterá-las em qualquer momento rodando esses comando novamente* .

?Primeiramente, abra o seu terminal e digite:

* git config --global user.name "Seu nome completo entre aspas"
* git config --global user.email seuemailaqui@dominio.com
* Isso é importante porque em cada commit essa informação será utilizada, e é carimbada de forma imutável nos commits que você começa a criar.

! Caso você queira substituir essa informação para um projeto específico, 
! apenas rode o comando sem a opção --global dentro daquele projeto.

//Caso queira trocar o editor padrão, que é o vim, pelo VS Code, rode o comando abaixo:

* git config --global core.editor "code -w"

?Por fim, caso queira verificar as suas configurações, apenas rode o comando abaixo:

// Ver configurações 
? para ver as configurações basicas usamos o comando abaixo
* git config --list

! Para mudarmos algumas das configurações usamos o comando 
* git config --global item_a_ser_modificado valor

? git config
* permite ver e atribuir variaveis de configuração como nome e email
* essas variaveis podem ser armazenadas em 3 lugares diferentes
    * 1-    /etc/gitconfig: valido para todos os usuarios no sistema e todos os seus repositorios.
    *       Se você passar a opção --system para git config, ele lê e escreve neste arquivo
    * 2-    ~/.gitconfig ou ~/.config/git/config: Somente para o seu usuario.
    *       Você pode fazer o Git ler e escrever neste arquivo passando a opção --global
    * 3-    config no diretorio Git (ou seja .git/config) de qualquer repositorio qye você esteja
    *       usando: especifico para este diretorio.
! Cada nivél sobrescreve os valores no nível especifico, ou seja, valores em .git/config prevalecem sobre
! /etc/gitconfig.

! NO WINDOWS, O ARQUIVO .gitconfig ESTARÁ NO DIRETORIO $HOME QUE É 
! C:\Users\$USER

//Git help
Descrição
Para termos ajuda com o git, podemos usar o comando git help, onde você vai obeter informações sobre praticamente tudo no git, basta colocar git help + a área (exibida com o comando git help) na qual sua dúvida se encaixa e procurar sua resposta.

Para sair do menu de ajuda, use o comando :q

// Iniciando um repositório
? Descrição
* Nesta aula iremos iniciar um repositório, primeiramente iremos criar um novo diretório, 
* em seguida navegaremos até nosso diretório recém criado através do terminal.
* 
* Após selecionarmos essa pasta, iremos rodar o comando git init, e assim que for executado, 
* o nosso repositório será criado.
* 
* Você pode notar que aparentemente nada foi adicionado no diretório, 
* mas caso rode o comando ls -a, verá que aparece uma pasta .git, 
* que é justamente o que queríamos.


// O git guarda o histórico do projeto
? Descrição
*Nesta aula, veremos onde o git guarda o histórico do nosso projeto, 
todos os detalhes e arquivos, tudo que estamos fazendo dentro do projeto.
*
*Apenas rode o comando a seguir:
*
*ls -al .git
*Verá que há alguns arquivos nessa pasta, e são exatamente esses arquivos que nos trazem 
* as informações do Git.
*
*Atenção: Nunca delete a pasta git caso não esteja na nuvem, ela é seu repositório, 
* no caso de você deletá-la, perderá todo o histórico do seu projeto.

// O primeiro commit
? Descrição
* Nesta aula iremos criar nosso primeiro commit, nosso primeiro ponto na história.
* 
* Primeiro iremos preparar nosso arquivo para isso, através do comando add, 
* usado da seguinte forma:
* 
* git add .
* O . nesse caso serve para selecionarmos todos os arquivos dentro do diretório.
* 
* Assim que tivermos executado esse comando, podemos criar nosso commit, 
* da seguinte forma:
* 
* git commit -m "mensagem do commit, é obrigatória, então não se esqueça!"
* E assim criamos nosso primeiro ponto na história!
*
// Git log
? Descrição
* Assim que rodar o comando no seu projeto, verá que temos uma hash, 
* do tipo SHA-1, e também teremos entre parênteses o nosso branch, nesse caso o master, 
* e no commit (sua hash), teremos o autor do commit, a data do mesmo e a mensagem do commit.
*
* Caso queiramos um resultado menor desse comando, podemos usar a opção --oneline, 
* da seguinte forma:
*
* git log --oneline

* Ele vai encurtar a hash, retirar o autor, a data e exibir a mensagem do commit ao lado.
*
* Suponhamos que você tem 50 commits, e precisa apenas dos últimos 5, nesse caso, 
* rode o comando a seguir:
*
* git log -n 5
* Ou seja, apenas coloque o argumento -n e a quantidade dos últimos commits que deseja.
*
* Caso queira ver os commits após uma data específica, utilize o argumento --since, 
* da seguinte forma:
*
* git log --since=aaaa-mm-dd
* Já caso queira os commits antes de uma data específica, use o argumento --until, 
* da seguinte forma:
*
* git log --until=aaaa-mm-dd

* Você também pode aplicar um filtro para o autor do commit, 
* para procurar os commits de uma pessoa em específico, usando o argumento --author, 
* utilizado da seguinte forma:
*
* git log --author=nomedoautor(nao precisa ser completo)

* Também temos a forma mais poderosa de se utilizar o git log que é com o argumento grep, 
* usado da seguinte forma:
*
* git log --grep="o que quer que esteja buscando, ex: bugfix"
* Basicamente significa expressão regular global, é muito comum na programação, 
* e vai ser usado para buscar na mensagem do commit o que quer que você esteja buscando.

// Estágios do arquivo
? Descrição
* Veremos nesta aula sobre os três estados dos arquivos dentro do git.
* 
* Para podermos iniciar um projeto, 
* colocamos o git init (ou git clone, caso queiramos copiar os arquivos de outro repositório, 
* mas veremos isso mais adiante), após isso, o git vai iniciar um repositório local, fazendo com que nosso arquivos fiquem no Working Directory, a primeira etapa do processo. Após isso, faremos o git add, que nos coloca na Stage Area, a segunda etapa do processo, e finalmente faremos um commit, para levar nossos arquivos até o repositório local.
* 
* O working Directory é o diretório no qual se encontra nosso projeto, 
* então os arquivos são preparados para serem commitados, a Stage Area, 
* onde nosso arquivos ficam preparados, para podermos enfim criarmos o nosso commit, 
* e é a partir desse ponto em que nosso arquivo fica salvo como um ponto na história
* 
* Não se preocupe se ficou confuso, faremos na prática ainda nas próximas aulas, certo?

// Git Workflow
? Descrição
* Nessa aula falaremos sobre como funciona o workflow do git, que vimos na aula passada, 
* onde criamos o primeiro arquivo, passamos pela stage area, e adicionamos ao repositório.
* 
* Primeiramente suponhamos que temos um arquivo, e nós o preparamos através do git add. 
* Isso significa que ele teve uma cópia de si feita, e essa cópia foi enviada para a nossa stage area, então temos dois arquivos, onde podemos trabalhar em nosso working directory, enquanto nossa versão no stage area continua a mesma, podendo ter duas versões diferentes do nosso arquivo.
* 
* Podemos então colocar ele no nosso repositório local, através do comando git commit, 
* onde criamos um ponto na história, onde temos nosso arquivo naquele momento do tempo.
* 
* Agora faremos uma alteração nesse arquivo, e teremos então o arquivo (v2), 
* e faremos o mesmo processo para ele, passando para o stage area, e iniciando um commit, então no nosso repositório teremos a v1 e a v2, a v2 ficando por último, visto que é uma linha do tempo, então podemos criar a v3 e fazer o mesmo processo, criar a v4 e repetir, e nós teremos todas as versões do nosso arquivo salvas dentro do nosso repositório.
* 
* Podemos voltar atrás em todas as versões dos arquivos, porém a numeração não será bonitinha, 
* teremos que usar a hash, sobre a qual falaremos na próxima aula.

// Hash SHA-1
? Descrição
* Nessa aula, falaremos sobre o nome dado à cada commit, 
* que é dado através de uma hash chamada SHA-1.
* 
* A cada commit que criamos, o git vai gerar um checksum, 
* que converte os dados da nossa operação em um número, o que garante a integridade dos nossos dados. 
* Essa hash é uma linha de 40 caracteres hexadecimais.
* 
* Dentro dessa string existe uma snapshot, que mostra o autor, o pai e a mensagem do nosso commit.
* 
* O pai do commit é o commit do qual ele foi criado, então o nosso primeiro commit 
* sempre terá um valor nulo, enquanto os próximos terão o valor do commit anterior a ele.

// HEAD
? Descrição
* No git, a HEAD é um ponteiro, que nos aponta em que ponto da história estamos, 
* em qual commit nós estamos, e nas próximas aulas veremos como fazer para irmos em outros 
* pontos na história, outros commits.
* 
* (Não é necessário entender as minúcias de como o git funciona, precisamos entender como funciona, 
* não todos os detalhes exatos de todo o funcionamento do git. Nosso foco tem de ser em como
* fazê-lo uma ferramenta da qual possamos usar no nosso dia-a-dia, certo?)

! Comandos especiasias
// Removendo arquivo da stage area:
* git rm --cached nome_arquivo.extenção


// Adicionando arquivos com git add
? Descrição
* Falaremos nesse vídeo sobre como adicionar arquivos ao nosso repositório, 
* você já deve ter compreendido, mas é sempre bom termos essa certeza, 
* para não termos nenhuma dúvida do git add, certo?
* 
* Primeiramente temos o Working Directory, as vezes também chamado de working tree, 
* é o local onde estamos trabalhando, mas não é aqui onde a magia ocorre, na verdade é na Stage Area, 
* as vezes também chamada de Index ou ainda de Stage tree, é aqui onde seus arquivos vão ser preparados 
* para poderem ser salvos no repositório, que é o banco de dados dos nossos arquivos, onde todos os nossos
* commits vão ser salvos.
* 
* Mas vamos começar pelo cenário de que nós temos um arquivo em uma pasta, que precisamos rastrear, 
* antes de tudo vamos iniciar o git através do comando git init, assim que nosso diretório estiver pronto, 
* vamos usar o comando git add + o nome do arquivo que queremos adicionar ao nosso Stage Area, 
* mas também podemos fazer isso de outra forma, que é o comando git add .(ponto) , que vai levar todos 
* os arquivos e pastas do nosso working directory ao stage area, o que não é recomendado, já que é melhor 
* fazer uma série de pequenos commits, mas ainda é possível realizar um commit com quantos arquivos quisermos.
* 
* Uma outra maneira de adicionar múltiplos arquivos além do git add .(ponto), 
* é possível adicionar arquivos por sua extensão, através do comando git add *.(extensão do arquivo).

// Editando arquivos
? Descrição
* Nessa aula aprenderemos a editar nossos arquivos, então, 
* supondo que tenhamos editado nossos arquivos e não tenhamos feito a adição dele ao nosso
* stage area já modificado, podemos usar novamente o comando git add, ou seja, 
* o git add serve tanto para adicionar novos arquivos ao nosso stage area, como também as 
* modificações feitas nos nossos arquivos, que no nosso repositório vão virar outros commits.

// Modificações com git diff
? Descrição
* As vezes estamos tão focados nas modificações dos nossos arquivos que nem nos lembramos 
* de todas as modificações que foram feitas, e o git pode nos ajudar com isso.
* 
* Ao usar o comando git diff, ele nos mostra um registro das modificações feitas nos arquivos 
* que já tínhamos guardados no nosso repositório, porém, em arquivos não rastreados pelo git, 
* não será possível ver as alterações.
* 
* A ferramenta git diff é muito poderosa para ver a diferença entre os arquivos que temos no nosso 
* repositório e no nosso working directory.
git diff

// Git diff staged
? Descrição
* No último vídeo vimos como funciona o git diff, mas agora vamos ver o comando que usamos 
* para ver as diferenças entre um arquivo que exista no stage area e no repositório, 
* o git diff staged, que é basicamente a mesma coisa, funciona da mesma forma, porém vai 
* comparar as modificações dos arquivos na stage area e no repositório, ao invés dos arquivos 
* do working directory e do repositório.
* git diff --staged
!! antigamente era usado o git diff --cached

// Deletando arquivos
? Descrição
* Caso queiramos deletar um arquivo através do git, podemos usar o comando a seguir:
* 
* git rm nomedoarquivo
* 
* (Atenção: caso delete algum arquivo que não esteja no repositório, ele se foi por toda 
* a eternidade, então tome cuidado, pois ele não vai ser enviado para a lixeira.)

// Renomeando arquivos
? Descrição
* Nesta aula veremos como renomear arquivos através do git.
* 
* Podemos renomear o arquivo manualmente, e se rodarmos o comando 
* git status veremos que ele mostra o arquivo com nome antigo como removido, 
* e o novo nome consta como não rastreado.
* 
* Podemos então usar o git rm (nome antigo), e git add (novo nome), e assim que 
* rodarmos o git status novamente poderemos observar que ele consta agora como renamed
*  (nome antigo) → (nome novo).
* 
* Podemos também fazer isso em um único passo, usando o comando git mv, cuja sintaxe é:
* 
* git mv nomeatual.txt novonome.txt
* 
* Ao rodar novamente o comando git status veremos que consta 
* como renamed: nomeatual.txt → novonome.txt.

// Movendo arquivos
? Descrição
* também podemos mover arquivos através do git, usando o comando git mv, usado da seguinte forma:
* 
* git mv arquivoquevaimover nomedodiretório/arquivoquevaimover

// Trazendo de volta do staged
? Descrição
* Nesta aula veremos como desfazer alguma alteração que foi ao nosso stage area, 
* e na verdade é bem simples, usamos o comando a seguir:
* 
* git restore --staged nomedoarquivo
* Há também outra forma, que é no caso de termos múltiplos arquivos, e é usado da seguinte forma:
* 
* git restore --staged .
* Podemos rodar o comando git status para conferir a remoção do(s) arquivo(s) do stage area.





*/