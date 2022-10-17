function teste (a, b callback) {
    const num1 = a
    const num2 = b
    const soma = num1 + num2

    callback(soma)

}

teste(5., 10, (soma) => {
    const media = soma / 2

})

