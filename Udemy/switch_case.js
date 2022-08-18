/*
Switch case:
Usando o break
switch (diaDaSemana) {
    case 0:
    diaDaSemanaTexto = 'Domingo'
    break
    case 1:
    diaDaSemanaTexto = 'Segunda'
    break
    case 2:
    diaDaSemanaTexto = 'Terça'
    break
    case 3:
    diaDaSemanaTexto = 'Quarta'
    break
    case 4:
    diaDaSemanaTexto = 'Quinta'
    break
    case 5:
    diaDaSemanaTexto = 'Sexta'
    break
    case 6:
    diaDaSemanaTexto = 'Sabado'
    break 
    default:
    diaDaSemanaTexto = ''
}

Usando função:

function dayOfWen () {
    let diaDaSemanaTexto
    Switch case:
Usando o break
switch (diaDaSemana) {
case 0:
    diaDaSemanaTexto = 'Domingo'
    return diaDaSemanaTexto
    case 1:
    diaDaSemanaTexto = 'Segunda'
    return diaDaSemanaTexto
    case 2:
    diaDaSemanaTexto = 'Terça'
    return diaDaSemanaTexto
    case 3:
    diaDaSemanaTexto = 'Quarta'
    return diaDaSemanaTexto
    case 4:
    diaDaSemanaTexto = 'Quinta'
    return diaDaSemanaTexto
    case 5:
    diaDaSemanaTexto = 'Sexta'
    return diaDaSemanaTexto
    case 6:
    diaDaSemanaTexto = 'Sabado'
    return diaDaSemanaTexto 
    default:
    diaDaSemanaTexto = ''
}
}
*/

let date = new Date()
let diaDaSemana = date.getDay()


/*if (diaDaSemana === 0) {
    diaDaSemana = 'Domingo'
} else if (diaDaSemana === 1) {
    diaDaSemana = 'Segunda'
} else if (diaDaSemana === 2) {
    diaDaSemana = 'Terça'
} else if (diaDaSemana === 3) {
    diaDaSemana = 'Quarta'
} else if (diaDaSemana === 4) {
    diaDaSemana = 'Quinta'
} else if (diaDaSemana === 5) {
    diaDaSemana = 'Sexta'
} else if (diaDaSemana === 6) {
    diaDaSemana = 'Sabado'
} else {
    diaDaSemana = ''
}*/


/*switch (diaDaSemana) {
case 0:
    diaDaSemanaTexto = 'Domingo'
    break
    case 1:
    diaDaSemanaTexto = 'Segunda'
    break
    case 2:
    diaDaSemanaTexto = 'Terça'
    break
    case 3:
    diaDaSemanaTexto = 'Quarta'
    break
    case 4:
    diaDaSemanaTexto = 'Quinta'
    break
    case 5:
    diaDaSemanaTexto = 'Sexta'
    break
    case 6:
    diaDaSemanaTexto = 'Sabado'
    break 
    default:
    diaDaSemanaTexto = ''
}
console.log(diaDaSemana, diaDaSemanaTexto)*/

function dayOfWen (diaDaSemana) {
    let diaDaSemanaTexto

    switch (diaDaSemana) {
    case 0:
        diaDaSemanaTexto = 'Domingo'
        return diaDaSemanaTexto
        case 1:
        diaDaSemanaTexto = 'Segunda'
        return diaDaSemanaTexto
        case 2:
        diaDaSemanaTexto = 'Terça'
        return diaDaSemanaTexto
        case 3:
        diaDaSemanaTexto = 'Quarta'
        return diaDaSemanaTexto
        case 4:
        diaDaSemanaTexto = 'Quinta'
        return diaDaSemanaTexto
        case 5:
        diaDaSemanaTexto = 'Sexta'
        return diaDaSemanaTexto
        case 6:
        diaDaSemanaTexto = 'Sabado'
        return diaDaSemanaTexto 
        default:
        diaDaSemanaTexto = ''
        return diaDaSemanaTexto
    }
}

const diaDaSemanaTexto = dayOfWen(diaDaSemana)
console.log(`O dia da semana é ${diaDaSemanaTexto}`)