const question = document.querySelector('#question');
const answerBox = document.querySelector('#answers-box');
const quizzContainer = document.querySelector('#quizz-container');
const scoreContainer = document.querySelector('#score-container');
const letters = ['a', 'b', 'c', 'd'];
const points = 0;
const actualQuestion = 0;

// Perguntas
const questions = [
    {
      "question": "PHP foi desenvolvido para qual fim?",
      "answers": [
        {
          "answer": "back-end",
          "correct": true
        },
        {
          "answer": "front-end",
          "correct": false
        },
        {
          "answer": "Sistema operacional",
          "correct": false
        },
        {
          "answer": "Banco de dados",
          "correct": false
        },
      ]
    },
    {
      "question": "Uma forma de declarar variável em JavaScript:",
      "answers": [
        {
          "answer": "$var",
          "correct": false
        },
        {
          "answer": "var",
          "correct": true
        },
        {
          "answer": "@var",
          "correct": false
        },
        {
          "answer": "#let",
          "correct": false
        },
      ]
    },
    {
      "question": "Qual o seletor de id no CSS?",
      "answers": [
        {
          "answer": "#",
          "correct": true
        },
        {
          "answer": ".",
          "correct": false
        },
        {
          "answer": "@",
          "correct": false
        },
        {
          "answer": "/",
          "correct": false
        },
      ]
    },
] 

// Substituição do quizz para aprimeira pergunta

function init () {
    // criar a primeira pergunta
    createQuestion (0)  // chama a função passando a primeira pergunta pos 0 do array
}

// função que cria uma pergunta
function createQuestion (i) {

    // limpar a quastao anterior antes
    const oldButtons = answerBox.querySelectorAll('button');

    oldButtons.forEach((btn) => {
        btn.remove()
    })

    // alterar o texto da pergunta
    const questionText = document.querySelector('#question-text');
    const questionNumber = document.querySelector('#question-number');

    questionText.textContent = questions[i].question;
    questionNumber.textContent = i + 1

    // insere as alternativas
    questions[i].answers.forEach(function (answer, i) {

        // cria o tamplate do botão quizz
        const answerTemplate = document.querySelector('.answer-template').cloneNode(true);

        const letterBtn = answerTemplate.querySelector('.btn-letter')
        const answerText = answerTemplate.querySelector('.question-answer')

        letterBtn.textContent = letters[i]
        answerText.textContent = answer['answer']

        // atribuindo a classe
        answerTemplate.setAttribute('correct-answer', answer['correct']);

        // remover hode e template class
        answerTemplate.classList.remove('hide')
        answerTemplate.classList.remove('answer-template')


        // inserir as alternativas na tela
        answerBox.appendChild(answerTemplate)

        // inserindo evento de click no botao
        answerTemplate.addEventListener('click', function() {

            checkAnswer(this)
            
        })
        // console.log(answerTemplate)

    })

    actualQuestion++;
}

function checkAnswer(btn) {
    

    const buttons = answerBox.querySelectorAll('button')

    buttons.forEach(function (button) {

        if (button.getAttribute('correct-answer') === 'true') {
            console.log(button)

        }

    })

}

// inicialização do quizz
init()
