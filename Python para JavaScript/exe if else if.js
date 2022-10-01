const num = '5'
if (!isNaN(num)) { 
    console.log('é um numero') 
} else {
    console.log('náo é numero')
}
console.log(isNaN(num))

if (typeof num === 'number') {
    console.log('tambem é um numero')
} else {
    console.log("náo é numero");
}
let array = [1, 2, 2, 3, 5, 6, 8, 9, 7]
let salario = 100
var cargo =
  salario <= 1000
    ? "junior"
    : salario <= 3000
    ? "seniormedio"
    : salario <= 5000
    ? "senior"
    : "diretor";
console.log(cargo)

for (let i = 0 ; i < array.length ; i++) {
    console.log(array[i])
}