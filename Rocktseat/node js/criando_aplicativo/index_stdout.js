//process.stdout.write('teste\n\n\n')


// array de perguntas
const questions = [
    "O que aprendi hoje? ",
    "O que me deicou aborrecido e o que eu poderia fazer para melhorar?",
    "O que me deixou felix hoje?",
    "Quantas pessoas ajudei hoje?"
]

// array de respostas
const answers = []

// iniciando a aplicação com o process
const ask = ( index = 0 ) => {
    process.stdout.write("\n" + questions[index] + " -> ")
}


// chamando a função ask
ask()

// processo de leitura das respostas
process.stdin.on("data", data => {
    
    answers.push(data.toString().trim())

    if (answers.length < questions.length) {
        ask(answers.length);
    } else {
        // answers.forEach(i => {
        //     console.log(questions + i + "\n")
        // }) 
        process.exit(); // irá encerrar o processo -> desligar
    }
    
})

// executando o processo de saida com as respostas
process.on("exit", () => {
    console.log(`
        Bakana Mário
        O que você aprendeu hoje foi:
        ${answers[0]}

        O que te aborreceu:
        ${answers[1]}

        O que te deixou feliz hoje:
        ${answers[2]}

        Você ajudou ${answers[3]} pessoas hoje!!

        Volte amanhã para novas reflexões!
    `)
})





// for (index; index < questions.length; index++) {
// process.stdout.write(questions[index] + "\n\n")
//         process.stdin.on("data", data => {

//         })
//     }

// ! ctrl + c encerra o processo