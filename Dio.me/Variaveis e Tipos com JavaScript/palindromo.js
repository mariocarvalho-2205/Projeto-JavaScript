// Solução 1

function palindromo(string) {
    if (!string) return 'String inexistente'

    return string.split("").reverse().join("") === string  
}
console.log(palindromo('abe'))

// Solução 2

function palindromo2 (string) {
    if (!string) return 'String inexistente'

    for (let i = 0; i < string.length / 2; i++) {
        if (string[i] !== string[string.length -1 - i]) {
            return false
        }
    }
    return true
}

let str2 = 'abba'
console.log(palindromo2())