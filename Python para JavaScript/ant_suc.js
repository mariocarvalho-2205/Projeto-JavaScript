const num = Number(prompt('Digite um numero: '))
let ant = num
let suc = num
ant -= 1
suc += 1

document.body.innerHTML = `Você digitou o numero <strong> ${num}</strong><br />`
document.body.innerHTML += `O Seu antecessor é <strong>${ant}</strong><br />`
document.body.innerHTML += `O seu sucessor é <strong>${suc}</strong><br />`