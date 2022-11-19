let arra = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
let tot = 0
arra.forEach((vr, id, ar) => {
    tot += vr
    console.log(id)
    console.log(ar)
})
console.log(tot)