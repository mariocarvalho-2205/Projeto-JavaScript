
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
var num = 1
var timer
const body = document.querySelector('#body')
const btn = document.querySelector('button')

btn.addEventListener('click', () => {
    inicia()
})

function criaEl () {
    let h2 = document.createElement('h2')
    body.appendChild(h2)
    body.insertAdjacentElement('afterend', h2)
    h2.setAttribute('id', 'cont')
    return selEl()
}

function selEl () {
    const selH2 = document.querySelector('#cont')
    let contador = time()
    selH2.innerHTML += contador;
    return 
}
function time () {
    console.log('comecei')
    timer = setInterval(function () {
        if (num < 10) {
            console.log('0' + num)
            num++;
        } else {
            console.log(num)
            num++;
        }
        
    }, 1000)
    
    return timer
}

function paraTime () {
    let ini = time()
    let para = setTimeout(function () {
        clearInterval(ini)
        console.log('encerrei')
    }, 6000)
    return para
}

function inicia () {
    
    criaEl()
}


