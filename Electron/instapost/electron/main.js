const { app } = require('electron');
const controlWindow = require('./ControlWindow.js')

function App () {
    const win = require('./CreateWindow.js')
    // aqui vai chamar a tray
    const tray = require('./Tray.js')

    const { toggle } = controlWindow(win, tray)

    tray.on('click',  toggle)


}

app.whenReady().then(App)

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})

// esconder icone do app



// Seção para usar a janela
// app.on('activate', () => {
//     if (BrowserWindow.getAllWindows().length === 0) {
//         createWindow()
//     }
// })
