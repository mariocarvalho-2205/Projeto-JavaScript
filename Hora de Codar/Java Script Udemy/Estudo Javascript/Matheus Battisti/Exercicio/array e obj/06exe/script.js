let frase = 'o rato roeu a roupa'

let arr = frase.split(' ')

console.log(arr)

for(let i = 0; i < arr.length; i++) {
    console.log(arr[i])
}

arr.forEach(palavra => console.log(palavra))