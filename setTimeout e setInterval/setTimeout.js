// criando função para mudar cor
var tmp


function mudaCor () {
    var obj = document.querySelector('#div-1')
    var r = Math.floor(Math.random()*255)
    var g = Math.floor(Math.random()*255)
    var b = Math.floor(Math.random()*255)
    obj.style.backgroundColor = 'rgb('+r+', '+g+', '+b+')'
}


// setTimeout() so repete uma vez
// var timer = setTimeout(mudaCor, 500)

function start () {
     tmp = setInterval(mudaCor, 1000)
}
function stop () {
    clearInterval(tmp)
}

function addEvent () {
    var btnStart = document.getElementById('start')
    var btnStop = document.getElementById('stop')
    btnStart.addEventListener('click', start)
    btnStop.addEventListener('click', stop)
}

window.addEventListener('load', addEvent)

//var setInter = setInterval(mudaCor, 1000)

