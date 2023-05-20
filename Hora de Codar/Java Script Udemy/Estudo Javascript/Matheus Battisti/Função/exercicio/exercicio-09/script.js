function tamanhoTexto (text) {
    if(text.length > 10) {
        console.log('O texto e muito longo')
    } else {
        console.log(`Seu texto tem ${text.length} caracteres`)
    }
}

tamanhoTexto('meu maior segredo é Jesus')
tamanhoTexto('agora vai')
