const p = document.querySelector('#data')
const h1 = document.querySelector('.container')
const data = new Date()

function getDiaSemanaTexto (diaSemana) {
    const dias = ['domingo', 'segunda', 'terça', 'quarta', 'quinta', ' sexta', 'sabado']
    
    return dias[diaSemana]
    
    
    /*let diaSemanaTexto
    switch (diaSemana) {
        case 0: 
        diaSemanaTexto = 'Domingo'
        return diaSemanaTexto
        case 1:
        diaSemanaTexto = 'Segunda'
        return diaSemanaTexto
        case 2: 
        diaSemanaTexto = 'Terça'
        return diaSemanaTexto
        case 3:
        diaSemanaTexto = 'Quarta'
        return diaSemanaTexto
        case 4: 
        diaSemanaTexto = 'Quinta'
        return diaSemanaTexto
        case 5:
        diaSemanaTexto = 'Sexta'
        return diaSemanaTexto
        case 6: 
        diaSemanaTexto = 'Sabado'
        return diaSemanaTexto
        default:
        diaSemanaTexto = ''
        return diaSemanaTexto
    }*/
}
function getNomeMes (numeroMes) {
    const meses = ['janeiro', 'fevereiro', 'março', 'abriu', 'maio', 'junho', 'julho', 
    'agosto', 'setembro', 'outubro', 'novembro', 'dezembro']
    return meses[numeroMes]
    /*let mesTexto
    switch (numeroMes) {
        case 0:
        mesTexto = 'Janeiro'
        return mesTexto
        case 1:
        mesTexto = 'Fevereiro'
        return mesTexto
        case 2:
        mesTexto = 'Março'
        return mesTexto
        case 3:
        mesTexto = 'Abril'
        return mesTexto
        case 4:
        mesTexto = 'Maio'
        return mesTexto
        case 5:
        mesTexto = 'Junho'
        return mesTexto
        case 6:
        mesTexto = 'Julho'
        return mesTexto
        case 7:
        mesTexto = 'agosto'
        return mesTexto
        case 8:
        mesTexto = 'setembro'
        return mesTexto
        case 9:
        mesTexto = 'outubro'
        return mesTexto
        case 10:
        mesTexto = 'Novembro'
        return mesTexto
        case 11:
        mesTexto = 'Dezembro'
        return mesTexto
        default:
        mesTexto = ''
        return mesTexto 
    }*/
}

function zeroAEsquerda (num) {
    return num >= 10 ? num : `0${num}`
}

function createDate(date) {
    const diaSemana = data.getDay()
    const numeroMes = data.getMonth()
    const nomeDia = getDiaSemanaTexto(diaSemana)
    const mesTexto = getNomeMes(numeroMes)
    const ano = data.getFullYear()
    const hora = zeroAEsquerda(data.getHours())
    const min = zeroAEsquerda(data.getMinutes())

    return (
        `${nomeDia}-feira, ${data.getDate()} de ${mesTexto} de ${ano} as ${hora}:${min}`
    )    
} 
p.innerHTML = createDate(data)
p.style.textAlign = 'center'
h1.style.textAlign = 'center'

/*
// metodo abreviado
const h2 = document.querySelector('.container2')
const data2 = new Date()
const opcoes = new Intl.DateTimeFormat("pt-BR", {
    dateStyle: "full",
    timeStyle: "short"
  });

const horaOpcao2 =  new Intl.DateTimeFormat('pt-BR', { dateStyle: 'full', timeStyle: 'full'}) 
//console.log(opcoes.format(Date.now()))
console.log(horaOpcao2.format(Date.now()))
h2.innerHTML = opcoes.format(Date.now())

// metodo para pegar a hora
/*const shortTime = new Intl.DateTimeFormat("pt-BR" , {
    dateStyle: 'full',
    timeStyle: "short"
  });
  console.log(shortTime.format(Date.now())); // "13:31 AM"*/