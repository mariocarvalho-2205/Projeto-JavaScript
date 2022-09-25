
let radioBtns = document.querySelectorAll("input[name='sinais']")
let res = document.getElementById('res')
var radioBtn

let findSelect = () => {
    let selected = document.querySelector("input[name='sinais']:checked").value;
    console.log(selected)
    
}

radioBtns.forEach(radioBtn => {
    radioBtn.addEventListener("change", findSelect)
      
})

/*
btn.addEventListener('submit', (e) => {
    e.preventDefault()
    var num = Number(document.getElementById('num').value)

    function soma () {
        if (findSelect === 'sum') {
            for (let i = 1; i <= 10; i++) {
                res.innerHTML += `${num} + ${i} = ${num + i}<br />`   
            }
        }    
    }    
    soma()


}) */



