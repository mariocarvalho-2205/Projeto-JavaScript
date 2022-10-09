
/*console.log('imediato')

var timeOut = setTimeout(function () {
    console.log('setTimeout')
}, 2000)

var timeOut = setTimeout(function () {
    console.log("depois");
}, 3000)

console.log('criado depois das funções e impresso antes')

clearTimeout(timeOut)*/


// cuidado ao usar setInterval funções complexas com espaçe de tempo curto podendo causar um problema no computador
// tempo pequeno / para açoes pequenas
// tempo grande / quando ações grandes ou complexas
var num = 0
var timer
const body = document.querySelector('#body')
const btn = document.querySelector('button')
var selH2

btn.addEventListener('click', () => {
    inicia()
})

function criaEl () {
    let h2 = document.createElement('h2')
    body.appendChild(h2)
    body.insertAdjacentElement('afterbegin', h2)
    h2.setAttribute('id', 'cont')
    
    return 
}

function time () {
    criaEl()
    selH2 = document.querySelector('#cont')
    selH2.innerHTML = 'comecei'
    console.log(selH2)
    timer = setInterval(function () {
        if (num < 9) {
            num++
            return selH2.innerHTML = '0' + num
            
        } else {
            num++
            return selH2.innerHTML = num
            
        }
            
    }, 1000)
    return timer
    
}

function paraTime () {
    let ini = time()
    let para = setTimeout(function () {
        clearInterval(ini)
        selH2.innerHTML = 'encerrei'
    }, 16000)
    return para
}

function inicia () {
    paraTime()
    
}


