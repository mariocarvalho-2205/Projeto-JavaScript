// callback

function mediaSoma (soma) {
    const media = soma / 2
    console.log(`a media é ${media}`)

}

function som (a, b, callback) {
    const soma = a + b
    console.log(a, b, 'soma', soma)
    callback(soma)
}

som(5, 18, mediaSoma)

function teste (name) {
    const nome = name
    console.log(`Nome recebido no callback ${nome}`)
}

function escreveName(nm, callback) {
    const n = nm
    console.log(`nome do escreveName ${n}`)
    callback(nm)
}

escreveName('mario e ady', teste);
//  iife
(function (j) {
    function fala(t) {
        console.log('fala ' + t)

    }
    function falando (z){
        fala('joao e ' + z)
    }
    falando(j)
})('ady');
