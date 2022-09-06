function calc () {
    const name = document.getElementById('name').value
    const salario = Number(document.getElementById('salario').value)
    const res = document.getElementById('res')
    let inicial = name[0].toUpperCase() + name.slice(1).toLowerCase()
    /*function inicialCase (n) {
        
        res.innerHTML = 
    } return inicialCase()*/

    function aumento () {
        let aumento = 0.15
        let aumentoSalario = salario + (salario * aumento)
        res.innerHTML = `O salario de ${inicial} com aumento fica por R$ ${aumentoSalario.toFixed(2)}`
    } aumento() 

}