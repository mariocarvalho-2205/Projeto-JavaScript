const qtdInput = Number(prompt('Quantos Alunos serão digitados?'))

function colectorDataPerson (qtd) {
    const student2 = []
    const notas1 = []
    const notas2 = []
    let inputName
    let inputNota1
    let inputNota2

    //alert(`Serão digitados ${qtd} alunos`)

    for (let i = 1; i <= qtd; i++){

        inputName = prompt(`Nome do ${i}º aluno`)
        inputNota1 = Number(prompt(`Primeira nota do ${i}º aluno`))
        inputNota2 = Number(prompt(`Segunda nota do ${i}º aluno`))
        student2.push(inputName)
        notas1.push(inputNota1)
        notas2.push(inputNota2)
    }
    mediaStudent(student2, notas1, notas2)
}
function mediaStudent (name, nota1, nota2) {
    let media = 0
    console.log('Alunos Aprovados:')
    for (let i = 0; i < name.length; i++) {
        media = (nota1[i] + nota2[i]) / 2
        //console.log(name[i], media)
        if (media >= 6) {
            console.log(`${name[i]}`)
        }

    }
}


colectorDataPerson(qtdInput)