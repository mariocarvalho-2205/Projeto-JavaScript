const form = document.querySelector('#form')
const clockInitial = document.getElementById('clock-init')
const finalClock = document.getElementById('clock-end')
const btn = document.querySelector('#btn')
const closed = document.querySelector('#closed')
const modal = document.querySelector('dialog')


btn.addEventListener('click', (e) => {
    e.preventDefault()
    let init = Number(clockInitial.value)
    let end = Number(finalClock.value)    
    
    resultado(tempo(init, end))
})

closed.addEventListener('click', () => {
    modal.close()
})

function tempo (init, end) {
    let dia = 24
    let duracao = 0
    
    if (init > end) {
        duracao += (dia - init) + end
        return duracao
    } else if (init === end) {
        duracao += (dia - init) + (dia - end)
        return duracao
    } else {
        duracao += end - init
        return duracao
    }
}

function resultado (t) {
    const res = document.querySelector('#res')
    let r = res.innerHTML = `O jogo durou ${t} horas`

    modal.showModal(r)
}

