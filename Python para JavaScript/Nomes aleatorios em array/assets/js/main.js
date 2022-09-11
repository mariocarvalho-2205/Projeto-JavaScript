let arrayAluno = []
// preciso pega a quantidade e usar a iteração para adicionar elemento ao array

function salvarArray () {
    let qtdAlunos = Number(document.getElementById('qtd-alunos').value)
    let aluno = document.getElementById('name-array').value
    arrayAluno.push(aluno)
    aluno = ''
        
    
    /*for (let i = 0; i < qtdAlunos; i++) {
        let aluno = document.getElementById('name-array').value
        arrayAluno.push(aluno)[i]
        aluno = ''
    }*/
        
    
        
     console.log(qtdAlunos)
     console.log(arrayAluno)
     
    
    
}
function sorteio () {
    const res = document.getElementById('res')
    let rand = Math.floor(Math.random() * arrayAluno.length)
    res.innerHTML = `O nome sorteado foi ${arrayAluno[rand]}`
}
/*
if (isNaN(qtdAlunos)) {
        alert('digite um numero valido!')
    } else {
        if ( qtdAlunos > 0 ) {
            document.getElementById('qtd-alunos').remove()
            document.querySelector('#qtd-alunos-number').remove()
            let nameText = document.getElementById('name-array-value')
            for (let i = 0; i < qtdAlunos.length; i++) {
                
                nameText.innerHTML = `Digite o ${i + 1} nome`    
                arrayAluno.push(aluno)
            }
            
        } 
        
    }


    if (arrayAluno.length < qtdAlunos) {
        while ( arrayAluno.length < qtdAlunos) {
            let aluno = document.getElementById('name-array').value
            arrayAluno.push(aluno)
            aluno = ''
        }
    } else if (arrayAluno.length === qtdAlunos){
        alert('voce já chegou na quantidade')
    }


for (let i = 0; i < qtdAlunos; i++) {

    let aluno = document.getElementById('name-array').value
    console.log(qtdAlunos)
    console.log(aluno)
    arrayAluno.push(aluno)
    console.log(arrayAluno)
}*/