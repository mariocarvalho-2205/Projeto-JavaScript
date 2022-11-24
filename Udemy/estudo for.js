let stri = "mario sergio"
let arra = stri.split(' ')

let cont = 1

//console.log(stri)

/*for (i of arra) {
    for (j of i) {
        if (j !== j + 1) {
            cont += 1
        }
    }
}*/

for (i in arra) {
    console.log(arra[i])
    for (j of arra[i]) {
        if (j == arra[i]) {
            console.log(j)
        } else {
            console.log('nao')
        }
            
        cont += 1    
    }
        
}

function duplicateCount(string) {
    const map = [...string.toLowerCase()].reduce(
      (map, char) => ({
        ...map,
        [char]: (map[char] || 0) + 1
      }),
      {}
    );
  
    return Object.values(map).filter((count) => count > 1).length;
  }
  
  console.log(duplicateCount('mario sergio')); // 2
  console.log(duplicateCount('aABCbc33zzzzzqw')); // 5

