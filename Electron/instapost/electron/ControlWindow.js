


function ControlWindow (win, tray) {

    function toggle () {
        if (win.isVisible()) {
            win.hide()
        } else {
            show()
        }
    }

    function show( ) {
        // pegar o posicionamento win / tray
        const {x, y} = getPosition()
        // atualizar o posicionamento
        win.getPosition(x, y, false )
        // mostrar a win
        win.show()
        win.focus()
    }

    function getPosition () {
        // função para fazer os calculos de posicionamento
        // eixo x = horizontal - largura
        // eixo y = vertical - altura

        const winBounds = win.getBounds()
        const trayBounds = tray.getBounds()

        const x = Math.round(trayBounds.x + ( trayBounds.width / 2 ) - ( winBounds.width / 2))
        const y = Math.round(trayBounds.y + trayBounds.height + 3)

        return {x, y}
    }

    return { toggle }
} 

module.exports = ControlWindow