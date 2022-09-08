function hipotenusa () {
    const catOposto = Number(document.getElementById('cat-oposto').value)
    const catAdjacente = Number(document.getElementById('cat-adj').value)
    
    const res = document.getElementById('res')
    const hipo = Math.hypot(catOposto, catAdjacente).toFixed(2)

    res.innerHTML = `A Hipotensa vai medir: <strong>${hipo}</strong>`
    
}