const form = document.querySelector('#formulario')  // capturou o formulario

// evento de submit para parar o envio do formulario
form.addEventListener('submit', function (event) {
    event.preventDefault()
    const inputPeso = event.target.querySelector('#peso')  // capturamos os valores dos inputs
    const inputAltura = event.target.querySelector('#altura')

    const peso = Number(inputPeso.value)  // convertemos os valores para number
    const altura = Number(inputAltura.value)
 
    if (!peso) {    // aqui é verificado se os valores sao validos
        setResultado('Peso invalido!', false)  // inclusao da flag false
        return
    }
    if (!altura) {  // aqui é verificado se os valores sao validos
        setResultado('Altura invalida!', false)
        return
    }
    const imc = getImc(peso, altura)  // variavel que recebe a função do calculo imc
    const medidaImc = getMedidaImc(imc)  // variavel recebe a função que verifica medida imc
    const msg = `Seu IMC é ${imc} (${medidaImc}).` // variavel que exibe msg do imc

    setResultado(msg, true)  // aqui setamos o resultado com a flag true

})

// função para verificar o nivel do imc com a criação de uma lista com os niveis 
function getMedidaImc (imc) {  
    const medida = ['Abaixo do Peso!', 'Peso Normal!', 'Sobrepeso!', 
    'Obesidade grau 1!', 'Obesidade grau 2!', 'Obesidade grau 3!']
    // logica inversa verificando de traz para frente assim o if fica simplificado
    if (imc >= 39.9) return medida[5]  // se o if for apenas de uma condição, pode seer exibido em apenas uma linha 
    if (imc >= 34.9) return medida[4]  // com o return não precisa do else e nem else if
    if (imc >= 29.9) return medida[3]
    if (imc >= 24.9) return medida[2]
    if (imc >= 18.5) return medida[1]
    if (imc < 18.5) return medida[0]   
}// OBS: O return para o if e retorna o resultado

function getImc (peso, altura) {  // função para calcular o imc
    const imc = peso / altura ** 2
    return imc.toFixed(2)
}

// função para criar tag (nesse caso foi um paragrafo)
function criaP () {  
    const p = document.createElement('p')  // createElement(tag)  na variavel criada, cria uma tag no html
    return p
}

// função para seta msg de resultado e verifica se resultado e valido 
function setResultado (msg, isValid) {
    const resul = document.querySelector('#resultado')
    resul.innerHTML = ''

    const p = criaP() // cria a tag <p> chamando a função criaP()

    if (isValid) {  // verifica a flag (isValid) se e verdadeiro ou false
        p.classList.add('paragrafo-resultado')  // variavel.classList.add(nome da classe) cria uma classe dentro da tag
    } else {  // e valida se vai ser verde ou vermelho o resultado. (muda no css)
        p.classList.add('bad')
    }

    p.innerHTML = msg  // exibe o resultado chamando a msg
    resultado.appendChild(p)  // id_da_div.appendChild(tag)insere uma tag dentro da div resultado
    
    
    
    

}
