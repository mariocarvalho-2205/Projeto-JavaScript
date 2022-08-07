function carregar () {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()  // peaga a hora do sistema
    //var hora = data.getHours()  // utiliza a hora do sistema
    var hora = 12  // força utilizar a hora
    msg.innerHTML += `Agora são ${hora} horas`
    if (hora >= 0 && hora < 12) {
        // bom dia
        img.src = './assets/manha.png'  // acessa a imagem dentro da pasta
        document.body.style.background = 'blue'  // para usar cor hexadecimar '# antes do codigo'
    } else if ( hora >= 12 && hora < 18 ) {
        // boa tarde
        img.src = './assets/tarde.png'
        document.body.style.background = 'red'
    } else {
        // boa noite
        img.src = './assets/noite.png'
        document.body.style.background = 'gray'
    }
}
    