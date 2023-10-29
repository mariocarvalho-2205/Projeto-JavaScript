// npm install --save-dev electron
// instalar npm electron-reload

// importar as dependencias do electron
const {app, BrowserWindow} = require('electron');

// importar o electron reload no diretorio
require('electron-reload')(__dirname, {
    electron: require(`${__dirname}/node_modules/electron`)
});

// função para criar uma janela

function createWindow () {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {  // faz com que tenha integração com o node
            nodeIntegration: true,
        }
    })

    win.loadFile('index.html')  // carrega o html
}

// cria um metodo para ser chamado assim que o electron 

app.whenReady().then(createWindow) // executa a aplicação quando ela estiver pronta

// metodo para encerrar a aplização
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
       app.quit()  
    }
})

// dispara o evento no mac.os
app.on('activate', () => {
    if(BrowserWindow.getAllWindows().length === 0) {
        createWindow()
    }
})