/*
Operadores de comparação
> Maior que
< Menor que
>= Maior que ou igual a
<= Menor que ou igual a
== igualdade --> (compara o valor independente do tipo)  OBS: Não e recomendado usar
=== igualdade estrita --> (compara o valor e o tipo)
!= Diferente --> verifica se e diferente (valor) OBS: Não e recomendado usar
!== Diferente --> estrito (valor e tipo)

*/
console.log(4 >= 5)  // false --> maior que ou igual a 

// utilizando variaveis

const num1 = 2  // number
const num2 = '2'  // string
const comp = num1 != num2  // com 3 iguas retorna false/ com 2 iguais retorna true
console.log(comp)
