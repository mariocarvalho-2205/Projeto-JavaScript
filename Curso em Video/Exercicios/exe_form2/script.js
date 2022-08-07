function verificar () {
    var data = new Date() // vai pegar a data do sistema
    var ano = data.getFullYear()  // vai mostrar o ano com 4 digitos
    var fano = document.getElementById('txtano')  // vai pegar o ano digitado 
    var res = document.querySelector('div#resultado')

    if (fano.value.length == 0 || fano.value > ano) {
        alert('Verifique os dados e tente novamente!!')
    }
}