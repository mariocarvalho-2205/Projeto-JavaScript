//break e continue

const num = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// usando o for of
/*for (let n of num) {
    if (n === 3) {
        console.log('achou o 3')
        continue  // ao chegar nesse laço ele pula sem exibir
    }
    console.log(n);
    if (n === 7) {
        console.log(`parou no ${n}`)
        break  // chegando aqui ele para o laço e segue o resto do codigo que vem a seguir
    }
    console.log(n)
}*/
// usando o for in
/*for (let i in num) {
    let n = num[i]
    if (n === 3) {
        //console.log("achou o 3");
        continue; // ao chegar nesse laço ele pula sem exibir
    }
    console.log(n);
    if (n === 7) {
        console.log(`parou no ${n}`);
        break; // chegando aqui ele para o laço e segue o resto do codigo que vem a seguir
    }
    //console.log(n);
}*/
// usando o for classico
/*for (let i = 0; i < num.length; i++) {
  let n = num[i];
  if (n === 3) {
    //console.log("achou o 3");
    continue; // ao chegar nesse laço ele pula sem exibir
  }
  console.log(n);
  if (n === 7) {
    console.log(`parou no ${n}`);
    break; // chegando aqui ele para o laço e segue o resto do codigo que vem a seguir
  }
  //console.log(n);
}*/

// usando o while
/*let i = 0
while (i < num.length) {
    let n = num[i]
    if (n === 3) {
    console.log("achou o 3");
    i++
    continue; // ao chegar nesse laço ele pula sem exibir
    }
    console.log(n);
    if (n === 7) {
        console.log(`parou no ${n}`);
        i++
        break; // chegando aqui ele para o laço e segue o resto do codigo que vem a seguir
    }
    i++
}*/

// usando o do while
let i = 1;
do {
  let n = num[i];
  if (n === 3) {
    console.log("achou o 3");
    i++;
    continue; // ao chegar nesse laço ele pula sem exibir
  }
  console.log(n);
  if (n === 7) {
    console.log(`parou no ${n}`);
    i++;
    break; // chegando aqui ele para o laço e segue o resto do codigo que vem a seguir
  }
  i++;
} while (i < num.length)