const form = document.querySelector('.form')
let inp1 = document.getElementById('input1')
let inp2 = document.getElementById('input2')

form.addEventListener('submit', (e) => {
    e.preventDefault()
    res()
})

function multi (n1, n2) {
    var n1 = Number(inp1.value)
    var n2 = Number(inp2.value)
    console.log(n1, n2)
    if (n1 % n2 === 0 || n2 % n1 === 0) {
        return 'multiplos'
    } else {
        return 'não e multiplos'
    } 
}

function res () {
    const res = document.querySelector('#res')
    let n1 = Number(inp1.value)
    let n2 = Number(inp2.value)
    let r = multi()
    res.innerHTML = `${n1} e ${n2} ${r}`
}