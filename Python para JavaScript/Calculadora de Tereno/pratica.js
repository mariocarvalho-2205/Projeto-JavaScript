function mediaSoma (soma) {
    const media = soma / 2
    console.log(`o total é ${media}`)

}

function som (a, b, callback) {
    const soma = a + b
    callback(soma)
}

som(5, 18, mediaSoma)

