// modo normal
/*function max (x, y) {
    if ( x > y ) {
        return x
    } else {
        return y
    }
}*/

// 2 modo
/*function max(x, y) {
  if (x > y)  return x;  return y; 
}*/


/*function max ( x, y ) {
    return x > y ? x : y
}*/

// Utilizando arrow function
const max2 = ( x, y ) => x > y ? x : y
console.log(max2(10, 5))
console.log(max2(15, 25))