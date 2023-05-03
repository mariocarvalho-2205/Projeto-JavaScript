/*

// Introdução:
O que é ReactJS?
Uma biblioteca JavaScript que tem o objetivo de criação de interfaces.

Porque ReactJS é uma biblioteca e não um framework?
Porque ele não tem uma opinião forte, ele não tem uma estrutura de pastas e regras que os frameworks em si tem. Ele te dá mais liberdade para criar as interfaces da maneira que preferir.

Criando o projeto:
Ao criar um projeto utilizando o ReactJS podemos utilizar os seguintes boilerplates:

Create React App (CRA)
Vite
Quais as vantagens de utilizar Vite ao invés do CRA?

O Vite tem todos os recursos do CRA, mas com melhores implementações e recursos adicionais que o CRA não suporta, com isso o Vite acaba sendo até 10x mais rápido em comparação ao CRA.

// Criando o primeiro projeto com o Vite

npm create vite@latest reactapp --template react
Após rodar o comando acima, será exibido a tela para escolher o framework que deseja utilizar.

criando-o-projeto-1

Em seguida, será questionado sobre a variant, escolheremos react que representa que não usaremos o TypeScript nesse projeto.

criando-o-projeto-2

// Executando projeto
Existem duas maneiras de navegar até a pasta do seu projeto, pelo próprio terminal, utilizando o comando cd ou arrastando a pasta do projeto para dentro do VS Code.

Em seguida, será necessário baixar as dependências necessárias para a execução do projeto. Podemos utilizar o npm quanto o yarn como gerenciador de pacotes.

Certifique-se que está na pasta do projeto e execute o comando desejado:

yarn install
npm install
Após a instalação das dependências, execute o comando abaixo:

Utilize o mesmo gerenciador do comando anterior

npm run dev
yarn dev
Após executar o comando acima, abra o seu navegador e acesse o endereço:

http://localhost:3000/

E prontinho, seu projeto já estará em execução! 🚀

executando-projeto

// Estrutura React
estrutura-react

Quando criamos um projeto ReactJS utilizando o Vite, essa será a visualização da nossa estrutura inicial de pastas do nosso projeto.

O arquivo index.html é o principal arquivo do nosso projeto, ele importará o arquivo main.jsx e fará com que o conteúdo seja exibido em nosso navegador.

index.html

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/src/favicon.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Vite App</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
main.jsx

import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
O arquivo main.jsx terá a função de renderizar o componente <App /> e inserir através da DOM do nosso HTML pelo id root.

//JSX
É uma extensão do JavaScript bem semelhante ao HTML. Basicamente ele é uma sintaxe que o ReactJS utiliza para que possamos criar as nossas interfaces de forma declarativa.

O JSX utiliza funções dentro dos arquivos e o retorno dessas funções retornam tags HTML.

Exemplo de um trecho de código JSX:

App.jsx

import { useState } from 'react'
import logo from './logo.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Vite + React!</p>
        <p>
          <button type="button" onClick={() => setCount((count) => count + 1)}>
            count is: {count}
          </button>
        </p>
        <p>
          Edit <code>App.jsx</code> and save to test HMR updates.
        </p>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {' | '}
          <a
            className="App-link"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
        </p>
      </header>
    </div>
  )
}

export default App

//Estrutura pastas e arquivos
estrutura-pastas-e-arquivos

📁 node_modules - A pasta onde ficam todas dependências e módulos do nosso projeto.

📁 src - Pasta principal onde ficará todos os nossos arquivos.

App.css - Arquivo de estilização do App.jsx App.jsx - Página inicial do nosso projeto que será exibida no navegador.

favicon.svg - Ícone de favorito da página. index.css - Arquivo de estilização global logo.svg - Arquivo de imagem da logo do ReactJS. main.jsx - Arquivo responsável por inicializar nossa aplicação.

index.html - Arquivo HTML onde será injetado todo o JavaScript que for compilado para ser exibido no navegador.

.gitignore - Esse arquivo descreve quais arquivos e pasta não devem subir para o Github. package.json - Arquivo responsável pelas dependências do nosso projeto. Contém informações do pacote, como: scripts, dependências, número de versão e etc...

package-lock.json - Parecido com o package.json, esse arquivo descreve as características das dependências do projeto como versão, integridade dos links e muito mais.

vite.config.js - Arquivo de configuração do Vite.


// Fragment
Um padrão comum no React é que um componente pode retornar múltiplos elementos. Os Fragmentos (Fragment) permitem agrupar uma lista de filhos sem adicionar nós extras ao DOM.

Exemplo:

function Home() {
  return (
    <>
      <h1>Lista de Presença.</h1>
      <input type="text" placeholder="Digite o nome..." />
      <button type="button">Adicionar</button>
    </>
  );
}

export default Home;
No exemplo acima, poderia ser utilizado uma <div> para agrupar esses três elementos.

//Importando arquivos no CSS
A importação de um arquivo global deverá ser realizada no arquivo main.jsx

global.css

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
main.jsx

import React from "react";
import ReactDOM from "react-dom";
import Home from "./pages/Home";

// Arquivo de estilização global
import "./styles/global.css";

ReactDOM.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>,
  document.getElementById("root")
);

//Separando CSS
Nesta aula criamos uma pasta chamada Home, contendo os arquivos index.jsx e styles.css

Dessa forma, a estrutura fica bem mais organizada e separamos as responsabilidades de cada arquivo.

A estrutura do projeto ficou assim:

separando-css

//Estilizando página
Nesta aula, estilizamos toda a nossa página utilizando os conceitos do CSS.

styles.css

.container {
  display: flex;
  align-items: center;
  flex-direction: column;
}

.container h1 {
  margin: 84px 0 24px;
}

.container input {
  width: 50%;
  padding: 24px;

  background: #e6e6e6;
  border-radius: 5px;
  border: none;

  font-size: 16px;
}

.container button {
  width: 50%;
  padding: 24px;

  font-weight: 700;

  background: #ea4c89;
  color: #fff;

  border-radius: 5px;
  margin: 12px 0 84px;
  border: none;

  cursor: pointer;
  transition: filter 0.2s;

  font-size: 16px;
}

.container button:hover {
  filter: brightness(0.9);
}
Resultado:

//Importando fonte
Para utilizar fontes personalizadas em nosso projeto, podemos prover do serviço que a Google nos oferece, o Google Fonts.

Após a escolha das fontes, devemos aplicá-las em nosso projeto em dois arquivos:

index.html

<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />

	<!-- Importação das fontes. -->

  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap" rel="stylesheet">

  <title>App Lista de Presença</title>
</head>

<body>
  <div id="root"></div>
  <script type="module" src="/src/main.jsx"></script>
</body>

</html>
global.css

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

// Aplicando fontes personalizada.

body,
input,
button {
  font-size: 16px;
  font-family: "Roboto", sans-serif;

  --webkit-font-smoothing: antialiased;
}

//Componentes
Componente nada mais do que um bloco de código reutilizável e independente. Nessa aula, criamos o nosso primeiro componente Card

Estrutura de um componente:

📁 Components 

📁 Card

index.jsx

import "./styles.css";

export function Card() {
  return (
    <div className="card">
      <strong>João Inácio</strong>
      <small>10:15:24</small>
    </div>
  );
}
styles.css

.card {
  height: 100%;
  width: 50%;

  background: #735bf2;
  color: #fff;

  border-radius: 10px;
  margin-bottom: 20px;

  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 24px;
}

.card strong {
  font-size: 18px;
}

//Propriedades
As propriedades dentro de um componente faz com que você possa passar valores diferentes para cada um deles.

Componente Card:

import "./styles.css";

export function Card(props) {
  return (
    <div className="card">
      <strong>{props.name}</strong>
      <small>{props.time}</small>
    </div>
  );
}
Renderização do componente Card:

<Card name="Rodrigo" time="10:55:25" />
<Card name="João" time="11:00:10" />
<Card name="Ana" time="12:10:33" />

// Estado
O Hook useState permite ter variáveis em componentes funcionais. Você passa o estado inicial para esta função e ele retorna uma variável com o valor atual do estado (não necessariamente o estado inicial).

import React, { useState } from "react";

import "./styles.css";
import { Card } from "../../components/Card";

export function Home() {
  const [studentName, setStudentName] = useState("");

  return (
    <div className="container">
      <h1>Nome: {studentName}</h1>
      <input
        type="text"
        placeholder="Digite o nome..."
        onChange={(e) => setStudentName(e.target.value)}
      />
      <button type="button">Adicionar</button>

      <Card name="Rodrigo" time="10:55:25" />
      <Card name="João" time="11:00:10" />
      <Card name="Ana" time="12:10:33" />
    </div>
  );
}

// Imutabilidade
O conteúdo da variável não deve ser modificado e sim substituído.

index.jsx

import React, { useState } from "react";

import "./styles.css";
import { Card } from "../../components/Card";

export function Home() {
  const [studentName, setStudentName] = useState("");

  const [students, setStudents] = useState([]);

  function handleAddStudent() {
    const newStudent = {
      name: studentName,
      time: new Date().toLocaleTimeString("pt-BR", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      }),
    };

    setStudents((prevState) => [...prevState, newStudent]);
  }

  return (
    <div className="container">
      <h1>Lista de Presença</h1>
      <input
        type="text"
        placeholder="Digite o nome..."
        onChange={(e) => setStudentName(e.target.value)}
      />
      <button type="button" onClick={handleAddStudent}>
        Adicionar
      </button>

      {students.map((student) => (
        <Card name={student.name} time={student.time} />
      ))}
    </div>
  );
}


//KeyProp
Em uma listagem, normalmente utilizamos o map() do JavaScript para trazer todos os dados dessa lista. No React, precisamos passar uma propriedade key para que esse dado nunca se repita e evitar que erros desse tipo aconteçam.

key-prop

Para evitar esse tipo de erro, passamos a prop Key, veja o exemplo:

import React, { useState } from "react";

import "./styles.css";
import { Card } from "../../components/Card";

export function Home() {
  const [studentName, setStudentName] = useState("");

  const [students, setStudents] = useState([]);

  function handleAddStudent() {
    const newStudent = {
      name: studentName,
      time: new Date().toLocaleTimeString("pt-BR", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      }),
    };

    setStudents((prevState) => [...prevState, newStudent]);
  }

  return (
    <div className="container">
      <h1>Lista de Presença</h1>
      <input
        type="text"
        placeholder="Digite o nome..."
        onChange={(e) => setStudentName(e.target.value)}
      />
      <button type="button" onClick={handleAddStudent}>
        Adicionar
      </button>

      {students.map((student) => (
        <Card key={student.time} name={student.name} time={student.time} />
      ))}


//Hooks
São funções que permitem conectar os recursos de estados e ciclos de vida do React a partir de componentes funcionais. Normalmente os Hooks iniciam com a palavra use por convenção. Exemplos de hooks: useState, useEffect.

//Header
Nessa aula, criamos uma tag <header> em nossa Home para indicar quem é o usuário que está editando a lista de presença.

index.jsx

import React, { useState } from "react";

import "./styles.css";
import { Card } from "../../components/Card";

export function Home() {
  const [studentName, setStudentName] = useState("");

  const [students, setStudents] = useState([]);

  function handleAddStudent() {
    const newStudent = {
      name: studentName,
      time: new Date().toLocaleTimeString("pt-BR", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      }),
    };

    setStudents((prevState) => [...prevState, newStudent]);
  }

  return (
    <div className="container">
      <header>
        <h1>Lista de Presença</h1>
        <div>
          <strong>João Inácio</strong>
          <img src="https://github.com/birobirobiro.png" alt="Foto de perfil" />
        </div>
      </header>
      <input
        type="text"
        placeholder="Digite o nome..."
        onChange={(e) => setStudentName(e.target.value)}
      />
      <button type="button" onClick={handleAddStudent}>
        Adicionar
      </button>

      {students.map((student) => (
        <Card key={student.time} name={student.name} time={student.time} />
      ))}
    </div>
  );
}
styles.css

.container {
  display: flex;
  align-items: center;
  flex-direction: column;
}

.container header {
  width: 50%;
  margin: 84px 0 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.container header img {
  width: 60px;
  height: 60px;
  border-radius: 30px;
  margin-left: 7px;
}

.container header div {
  display: flex;
  align-items: center;
}

.container input {
  width: 50%;
  padding: 24px;

  background: #e6e6e6;
  border-radius: 5px;
  border: none;

  font-size: 16px;
}

.container button {
  width: 50%;
  padding: 24px;

  font-weight: 700;

  background: #ea4c89;
  color: #fff;

  border-radius: 5px;
  margin: 12px 0 84px;
  border: none;

  cursor: pointer;
  transition: filter 0.2s;

  font-size: 16px;
}

.container button:hover {
  filter: brightness(0.9);
}


//useEffect
O useEffect é executado automaticamente sempre que o componente é renderizado.

A estrutura do useEffect é da seguinte forma:

useEffect(() => {
 // Dentro do objeto devemos colocar todas. ações que serão executadas.
    

// Os arrays definem quais os estados que o useEffect depende.
  }, []);

// Consumindo API
Nessa aula utilizamos a API oficial do Github dentro do useEffect com o método fecth()

API: https://api.github.com/users/[seu usuário] (substituir pelo seu usuário sem os [] )

import React, { useState, useEffect } from "react";

import "./styles.css";
import { Card } from "../../components/Card";

export function Home() {
  const [studentName, setStudentName] = useState("");
  const [students, setStudents] = useState([]);
  const [user, setUser] = useState({ name: "", avatar: "" });

  function handleAddStudent() {
    const newStudent = {
      name: studentName,
      time: new Date().toLocaleTimeString("pt-BR", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      }),
    };

    setStudents((prevState) => [...prevState, newStudent]);
  }

  useEffect(() => {
    fetch("https://api.github.com/users/birobirobiro")
      .then((response) => response.json())
      .then((data) => {
        setUser({
          name: data.name,
          avatar: data.avatar_url,
        });
      });
  }, []);

  return (
    <div className="container">
      <header>
        <h1>Lista de Presença</h1>
        <div>
          <strong>{user.name}</strong>
          <img src={user.avatar} alt="Foto de perfil" />
        </div>
      </header>
      <input
        type="text"
        placeholder="Digite o nome..."
        onChange={(e) => setStudentName(e.target.value)}
      />
      <button type="button" onClick={handleAddStudent}>
        Adicionar
      </button>

      {students.map((student) => (
        <Card key={student.time} name={student.name} time={student.time} />
      ))}
    </div>
  );
}


// useEffect Async
Nessa aula verificamos como lidar com requisições assíncronas utilizando o Hook useEffect

useEffect(() => {
    async function fetchData() {
      const response = await fetch("https://api.github.com/users/birobirobiro");
      const data = await response.json();
      console.log("DADOS =>", data);

      setUser({
        name: data.name,
        avatar: data.avatar_url,
      });
    }

    fetchData();
  }, []);


  //






*
 */