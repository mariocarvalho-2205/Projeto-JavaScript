function conv () {
    const ang = Number(document.getElementById('ang').value)
    const angToRad = ang * Math.PI / 180.0
    const res = document.querySelector('#res')
    //res.innerHTML = 'teste'


    
    const sen = Math.sin(angToRad)
    const cos = Math.cos(ang)
    const tang = Math.tan(angToRad)
    console.log(sen)
    console.log(cos)
    console.log(tang)
    console.log(angToRad)
}
/*
let ang = 90
let rad = (ang * Math.PI) / 180.0

console.log(rad.toFixed(4))*/