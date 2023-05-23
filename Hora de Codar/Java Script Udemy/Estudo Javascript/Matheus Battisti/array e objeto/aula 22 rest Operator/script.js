// rest operator

/*
* é uma forma de uma função receber indefinidos parametros
o operador rest vai virar um array
o parametro é definido por: ...nome
 */
let num = 1
let num2 = 3
let num3 = 5
let num4 = 7




function imprimirArgs (...args) {
    for ( let i = 0; i < args.length; i++) {
        console.log(args[i])
    }
}

imprimirArgs(num, num2, num3, num4)
imprimirArgs(1, 2, 3, 4, 5, 6, 7, 8, 9)
imprimirArgs(num2, num4)