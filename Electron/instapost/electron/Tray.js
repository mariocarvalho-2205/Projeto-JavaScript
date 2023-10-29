const { Tray } = require('electron')
const { resolve } = require('path')  // modulo que ajuda a navegar entre os caminho
// resolve 

const iconPath = resolve(__dirname, '../' , 'icon', 'instagram.png')  // aqui localiza o arquivo com caminho especifico

function createTray () {

    const tray = new Tray(iconPath)

    tray.setToolTip('Insta Reminder')  // vai lembra quando passar o mouse que e o insta reminder

    return tray
}

module.exports = createTray()