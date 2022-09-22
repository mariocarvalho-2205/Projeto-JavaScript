
const btn = document.getElementById('btn')
const res = document.getElementById('res')
const select = document.getElementsByClassName('select').value

btn.addEventListener('click', (e) => {
    e.preventDefault()
    var num = Number(document.getElementById('num').value)
    

    function soma () {
        for (let i = 1; i <= 10; i++) {
            res.innerHTML += `${num} + ${i} = ${num + i}<br />`
            
        }
    }    
    soma()

    
}) 



