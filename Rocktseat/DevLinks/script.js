function toggleMode() {
    const html = document.documentElement
    html.classList.toggle('light')

    const img = document.querySelector('#profile img')


    if (html.classList.contains('light')){
        img.setAttribute('src', './assets/avatar-light-mode.png')
        img.setAttribute('alt', `Foto de Mario Carvalho sorrindo, acompanhado da esposa`)
    } else {
        img.setAttribute('src', './assets/Avatar.png')
        img.setAttribute('alt', `Foto de Mario Carvalho sorrindo, usando oculos e camisa preta, 
        barba e uma bateria musical de fundo.`)
    }


}