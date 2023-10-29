const {app, BrowserWindow} = require('electron');
let janelaPrincipal;

app.on('ready', () => {
    janelaPrincipal = new BrowserWindow({
        width: 300,
        height: 300,
        resizable: false  // impede que seja modificada o tamanho da janela.

    })

    janelaPrincipal.loadURL(`file://${__dirname}/index.html`)
})

// podemos utilizar varios frameworks como bulma(framework css)
