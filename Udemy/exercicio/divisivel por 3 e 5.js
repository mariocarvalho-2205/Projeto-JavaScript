
function fizzBuzz(numero) {
  if (typeof numero !== "number") return "Não é um numero";
  if (numero % 3 === 0 && numero % 5 === 0) return "FizzBuzz"; // Quando tiver duas condições no mesmo if, ele tem que ser checado primeiro
  if (numero % 5 === 0) return "Buzz";
  if (numero % 3 === 0) return "Fizz";
  return numero;
}
console.log(fizzBuzz('a'))
for (let i = 0; i <= 100; i++) {
    console.log(i, fizzBuzz(i))
}
/*console.log(fizzBuzz(3))
console.log(fizzBuzz(45))
console.log(fizzBuzz(7))*/