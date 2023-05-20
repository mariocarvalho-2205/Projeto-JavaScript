function neg (num) {
    if(num < 0) {
        return Math.abs(num)
    } else {
        return `O numero já é positivo`
    }
}

console.log(neg(-5))
console.log(neg(5))
console.log(neg(-7.5))
console.log(neg(10))

console.log(neg(-20))
