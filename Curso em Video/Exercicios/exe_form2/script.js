function verificar () {
    var data = new Date() // vai pegar a data do sistema
    var ano = data.getFullYear()  // vai mostrar o ano com 4 digitos
    var fano = document.getElementById('txtano')  // vai pegar o ano digitado 
    var res = document.querySelector('div#res')
    
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        alert('Verifique os dados e tente novamente!!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        //res.innerHTML = `idade calculada ${idade}`
        var genero = ''
        var img = document.createElement('img')  // cria tag para imagem 
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                // crianca
                img.setAttribute('src', './assets/criancamasc.png')
            } else if (idade < 21) {
                // jovem
                img.setAttribute('src', './assets/jovemmasc.png')
            } else if (idade < 51) {
                // adulto
                img.setAttribute('src', './assets/homem40.png')
            } else {
                //senhor
                img.setAttribute('src', './assets/homem60.png')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
            // crianca feminima
                img.setAttribute('src', './assets/criancafem.png')
            } else if (idade < 21) {
            // jovem menina
                img.setAttribute('src', './assets/jovemfem.png')
            } else if (idade < 51) {
            // mulher adulta
                img.setAttribute('src', './assets/mulher40.png')
            } else {
            // senhora
                img.setAttribute('src', './assets/mulher60.png')
            }
            
        } 
    
    res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
    res.appendChild(img)
    res.style.textalign = 'center'        
    } 
}