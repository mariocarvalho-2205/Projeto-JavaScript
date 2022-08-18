const p = document.querySelector('p')
let data = new Date()
let d = data.getDate()
let diaSemana = data.getDay()
let mes = data.getMonth()
let ano = data.getFullYear()
let hora = data.getHours()
let min = data.getMinutes()
let h1 = document.querySelector('h1')

function day (diaSemana) {
    let diaTexto
    switch (diaSemana) {
        case 0: 
        diaTexto = 'Domingo'
        return diaTexto
        case 1:
        diaTexto = 'Segunda'
        return diaTexto
        case 2: 
        diaTexto = 'Terça'
        return diaTexto
        case 3:
        diaTexto = 'Quarta'
        return diaTexto
        case 4: 
        diaTexto = 'Quinta'
        return diaTexto
        case 5:
        diaTexto = 'Sexta'
        return diaTexto
        case 6: 
        diaTexto = 'Sabado'
        return diaTexto
        default:
        diaTexto = ''
        return diaTexto
    }
}
function mesTex (mes) {
    let mesTexto
    switch (mes) {
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
        
    }
}
const dia = day(diaSemana)
const m = mesTex(mes)
p.innerHTML = `<p>${dia}-feira,  ${d} de ${m} de ${ano} as ${hora}:${min}</p>`
p.style.textAlign = 'center'
h1.style.textAlign = 'center'