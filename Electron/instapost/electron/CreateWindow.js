const { BrowserWindow } = require('electron');

const createWindow = () => {
    const win = new BrowserWindow({
        width: 600,
        height: 400,
        show: true,
        frame: false, // remove a borda da janela no windows fecha com ctrl w
        resizable: false, // não permite alterar o tamanho nem mover a janela
        fullscreenable: false, // não permite usar fullscreen
        transparent: false,
        // webPreferences: {
        //     nodeIntegration: true,
        // }
    })

    // win.loadURL('https://google.com')  // carrega site
    win.loadFile('index.html');

    // blur da janela
    // win.on('blur', () => win.) pesquisar para finalizar

    return win

}

module.exports = createWindow()