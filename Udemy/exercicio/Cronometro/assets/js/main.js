function hora(segundos) {
  const data = new Date(segundos * 1000)
  return data.toLocaleTimeString("pt-BR", { hour12: false, timeZone: "GMT" })
}
const body = document.querySelector('body')
const timer = document.querySelector(".timer")
const start = document.querySelector(".start")
const stop = document.querySelector(".stop")
const reset = document.querySelector(".reset")
let segundos = 0
let iniciar

function iniciaRelogio () {
    iniciar = setInterval(function () {
        segundos++; timer.innerHTML = hora(segundos);
  }, 1000);
    
}

// para reduzir recurso do computador utilizamos o .target

document.addEventListener('click', function (e) {
    const el = e.target
    if (el.classList.contains('start')) {
        body.classList.remove('pausado')
        clearInterval(iniciar);
        iniciaRelogio();
        timer.style.color = "green";
    }
    if (el.classList.contains('stop')) {
        body.classList.add('pausado')
        clearInterval(iniciar);
        timer.style.color = "red";
    }
    if (el.classList.contains('reset')) {
        body.classList.remove("pausado");
        clearInterval(iniciar);
        timer.innerHTML = "00:00:00";
        timer.style.color = "black";
        segundos = 0;    
    }
    console.log(el)
}) 

// Dessa forma é utilizado mais recurso do computador
/*
//console.log(iniciaRelogio())
start.addEventListener("click", function (event) {
    clearInterval(iniciar)
    iniciaRelogio()
    timer.style.color = 'green'
});

stop.addEventListener("click", function (event) {
    clearInterval(iniciar)
    timer.style.color = 'red'
});

reset.addEventListener("click", function (event) {
    clearInterval(iniciar)
    timer.innerHTML = "00:00:00";
    timer.style.color = 'black'
    segundos = 0
});*/