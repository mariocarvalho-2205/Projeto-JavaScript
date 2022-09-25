const lrg = document.querySelector('#lar')
const cmp = document.querySelector('#comp')
const prc = document.querySelector('#price')
const btn = document.querySelector('#btn')
const res = document.querySelector('#res')
const orcamento = document.querySelector('#orca')


btn.addEventListener('click', (e) => {
    e.preventDefault()
    let larg = Number(lrg.value)
    let comp = Number(cmp.value)

    function area() {
        let areaQadrada = larg * comp
        return areaQadrada
    }

    function calcArea() {
        let terreno = area(larg, comp)
        let price = Number(prc.value)
        let totalTerreno = terreno * price
        return totalTerreno
    }

    function resultado () {
        res.innerHTML = 'Confira o Orçamento!!'
        orcamento.innerHTML = `Um terreno com <br />${larg.toFixed(1)} metros de largura<br /> ${comp.toFixed(1)} metros de comprimento<br />`
        orcamento.innerHTML += `Terá ${area()} metros quadrado.<br /> Vai ficar por R$ ${calcArea().toFixed(2)}`
        orcamento.style.backgroundColor = 'gray'
    }
    resultado()
})




