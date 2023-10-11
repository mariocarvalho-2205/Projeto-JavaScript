let x = document.querySelector('.x');
let o = document.querySelector('.o');
let boxes = document.querySelectorAll('.box');
let buttons = document.querySelectorAll('#buttons-container button');
let messageContainer = document.querySelector('#message');
let messageText = document.querySelector('#message p');
let secondPlayer;

/* Contador de Jogadas */

let player1 = 0;
let player2 = 0;

/* Adicionando evento click aos boxes */
for (let i = 0; i < boxes.length; i++) {

    // Quando Alguem clica na caixa
    boxes[i].addEventListener('click', function (){

        let el = checkEl(player1, player2)
        
        
        
        
        // Verifica se ja tem x ou o
        if (this.childNodes.length == 0) {
            
            // computar a jogarda
            let cloneEl = el.cloneNode(true)
            
            this.appendChild(cloneEl);
            
            if (player1 == player2) {
                player1++;
                // verifica quem o o jogador
                if (secondPlayer == 'ai-player') {

                    // funcao executar a jogada
                    computerPlay()
                    player2++
                }

            } else {
                player2++;
            };

            // Checa quem venceu
            checkWinCondition()
        }
    })

}

// Evento para saber quem vai jogar

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function (e) {
        secondPlayer = this.getAttribute('id')  // atribui o id ao elemento
        console.log(secondPlayer)

        for (let j = 0; j < buttons.length; j++) {
            buttons[j].style.display = 'none'
        }    

        setTimeout(function () {
            let container = document.querySelector('#container')

            container.classList.remove('hide')
        }, 500)
    })
}

// Quem vai Jogar
function checkEl (player1, player2) {
    if (player1 == player2) {
      // x
      el = x;
    } else {
      // o
      el = o;
    }
    return el
}

// Verifica Condição de vitoria

function checkWinCondition () {
  let b1 = document.getElementById("block-1");
  let b2 = document.getElementById("block-2");
  let b3 = document.getElementById("block-3");
  let b4 = document.getElementById("block-4");
  let b5 = document.getElementById("block-5");
  let b6 = document.getElementById("block-6");
  let b7 = document.getElementById("block-7");
  let b8 = document.getElementById("block-8");
  let b9 = document.getElementById("block-9");

  // Condicional para vencedor b1, b2, b3
  if (
    b1.childNodes.length > 0 &&
    b2.childNodes.length > 0 &&
    b3.childNodes.length > 0
  ) {
    let b1Child = b1.childNodes[0].className;
    let b2Child = b2.childNodes[0].className;
    let b3Child = b3.childNodes[0].className;

    if (b1Child == "x" && b2Child == "x" && b3Child == "x") {
      // x
      declareWinner("x");
    } else if (b1Child == "o" && b2Child == "o" && b3Child == "o") {
      // o
      declareWinner("o");
    }
  }

  // Condicional para vencedor b4, b5, b6
  if (
    b4.childNodes.length > 0 &&
    b5.childNodes.length > 0 &&
    b6.childNodes.length > 0
  ) {
    let b4Child = b4.childNodes[0].className;
    let b5Child = b5.childNodes[0].className;
    let b6Child = b6.childNodes[0].className;

    if (b4Child == "x" && b5Child == "x" && b6Child == "x") {
      // x
      declareWinner("x");
    } else if (b4Child == "o" && b5Child == "o" && b6Child == "o") {
      // o
      declareWinner("o");
    }
  }

  // Condicional para vencedor b7, b8, b9
  if (
    b7.childNodes.length > 0 &&
    b8.childNodes.length > 0 &&
    b9.childNodes.length > 0
  ) {
    let b7Child = b7.childNodes[0].className;
    let b8Child = b8.childNodes[0].className;
    let b9Child = b9.childNodes[0].className;

    if (b7Child == "x" && b8Child == "x" && b9Child == "x") {
      // x
      declareWinner("x");
    } else if (b7Child == "o" && b8Child == "o" && b9Child == "o") {
      // o
      declareWinner("o");
    }
  }

  // Condicional para vencedor Vertical b1, b4, b7
  if (
    b1.childNodes.length > 0 &&
    b4.childNodes.length > 0 &&
    b7.childNodes.length > 0
  ) {
    let b1Child = b1.childNodes[0].className;
    let b4Child = b4.childNodes[0].className;
    let b7Child = b7.childNodes[0].className;

    if (b1Child == "x" && b4Child == "x" && b7Child == "x") {
      // x
      declareWinner("x");
    } else if (b1Child == "o" && b4Child == "o" && b7Child == "o") {
      // o
      declareWinner("o");
    }
  }

  // Condicional para vencedor Vertical b2, b5, b8
  if (
    b2.childNodes.length > 0 &&
    b5.childNodes.length > 0 &&
    b8.childNodes.length > 0
  ) {
    let b2Child = b2.childNodes[0].className;
    let b5Child = b5.childNodes[0].className;
    let b8Child = b8.childNodes[0].className;

    if (b2Child == "x" && b5Child == "x" && b8Child == "x") {
      // x
      declareWinner("x");
    } else if (b2Child == "o" && b5Child == "o" && b8Child == "o") {
      // o
      declareWinner("o");
    }
  }

  // Condicional para vencedor Vertical b3, b6, b9
  if (
    b3.childNodes.length > 0 &&
    b6.childNodes.length > 0 &&
    b9.childNodes.length > 0
  ) {
    let b3Child = b3.childNodes[0].className;
    let b6Child = b6.childNodes[0].className;
    let b9Child = b9.childNodes[0].className;

    if (b3Child == "x" && b6Child == "x" && b9Child == "x") {
      // x
      declareWinner("x");
    } else if (b3Child == "o" && b6Child == "o" && b9Child == "o") {
      // o
      declareWinner("o");
    }
  }

  // Condicional para vencedor diagonal b1, b5, b9
  if (
    b1.childNodes.length > 0 &&
    b5.childNodes.length > 0 &&
    b9.childNodes.length > 0
  ) {
    let b1Child = b1.childNodes[0].className;
    let b5Child = b5.childNodes[0].className;
    let b9Child = b9.childNodes[0].className;

    if (b1Child == "x" && b5Child == "x" && b9Child == "x") {
      // x
      declareWinner("x");
    } else if (b1Child == "o" && b5Child == "o" && b9Child == "o") {
      // o
      declareWinner("o");
    }
  }

  // Condicional para vencedor diagonal b3, b5, b7
  if (
    b3.childNodes.length > 0 &&
    b5.childNodes.length > 0 &&
    b7.childNodes.length > 0
  ) {
    let b3Child = b3.childNodes[0].className;
    let b5Child = b5.childNodes[0].className;
    let b7Child = b7.childNodes[0].className;

    if (b3Child == "x" && b5Child == "x" && b7Child == "x") {
      // x
      declareWinner("x");
    } else if (b3Child == "o" && b5Child == "o" && b7Child == "o") {
      // o
      declareWinner("o");
    }
  }

  // deu velha

  let counter = 0;
  for (let i = 0; i < boxes.length; i++) {
      if ( boxes[i].childNodes[0] != undefined ) {
        counter++;
      }
  }

  if ( counter == 9) {
    // deu velha
    declareWinner('Deu Velha')
  }
}

// limpa o jogo e declara o vencedor e atualiza o placar

function declareWinner (winner) {
    let scoreBoardX = document.querySelector("#scoreboard-1");
    let scoreBoardY = document.querySelector("#scoreboard-2");
    let msg = '';

    if (winner == 'x') {
        scoreBoardX.textContent = parseInt(scoreBoardX.textContent) + 1;
        msg = 'O Jogador 1 VENCEU!!'
    } else if (winner == 'o') {
        scoreBoardY.textContent = parseInt(scoreBoardY.textContent) + 1;
        msg = "O Jogador 2 VENCEU!!";
    } else {
        msg = 'Deu Velha!'
    }

    // exibe a msg na tela
    messageText.innerHTML = msg;
    // remove a classe hide para exibir o texto na tela
    messageContainer.classList.remove('hide');

    // esconde msg
    setTimeout(function () {
        messageContainer.classList.add('hide')
    }, 3000)

    // zerar as jogadas

    player1 = 0
    player2 = 0

    // remove x e o

    let boxesToRemove = document.querySelectorAll('.box div')

    for (let i = 0; i < boxesToRemove.length; i++) {
        boxesToRemove[i].parentNode.removeChild(boxesToRemove[i])
    }
}

// executar a logica da jogada da CPU

function computerPlay () {
    let cloneO = o.cloneNode(true);
    counter = 0;
    filled = 0;
    console.log(cloneO)

    for (let i = 0; i < boxes.length; i++) {
        // criação da jogada aleatoria
        let randomNumber = Math.floor(Math.random() * 5)

        // so vai preencher se estiver vazio o filho
        if (boxes[i].childNodes[0] == undefined) {
            if (randomNumber <= 1 ) {
                boxes[i].appendChild(cloneO)
                counter++;
                break;
            }

            // checagem de quantas estão preenchidas
        } else {
            filled++;
        }
    }

    if ( counter == 0 && filled < 9) {
        
        computerPlay()
    }

}


