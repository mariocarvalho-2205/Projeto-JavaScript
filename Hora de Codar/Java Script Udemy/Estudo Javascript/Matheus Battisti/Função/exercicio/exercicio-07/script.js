function dataValidation (dado) {
    if(typeof dado === 'string') {
        console.log('Esse dado e uma string')
    } else if(typeof dado === 'number') {
        console.log('Esse dado e um number')
    } else if (typeof dado === 'boolean') {
        console.log('Esse dado e um Boolean')
    }
}

dataValidation(48)
dataValidation('mario')
dataValidation(true)