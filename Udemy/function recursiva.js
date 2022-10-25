function recursive(max) {
    console.log(max)
    if ( max >= 10 ) return
    max++
    recursive(max)
    //console.log(max)
}

recursive(0)

function recursiveMin (min) {
    console.log(min)
    if (min <= 0) return
    min--
    recursiveMin(min)
}
recursiveMin(5)