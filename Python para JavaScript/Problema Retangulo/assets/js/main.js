const base = document.querySelector('#base')
const altura = document.querySelector('#alt')
const res = document.querySelector('#textRes')
const button = document.querySelector('#btn')




button.addEventListener('click', (e) => {
  e.preventDefault()
  let bs = Number(base.value)
  let al = Number(altura.value)
  console.log(Number(base.value), Number(altura.value)) 
  console.log(bs, al)
  function area () {
    let ar = bs * al
    console.log(ar)
  } 
  area()
  
  
})
