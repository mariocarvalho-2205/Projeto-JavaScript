// querySelectorAll('p')  retorna a NodeList de forma similar ao array da tag p
const paragrafo = document.querySelectorAll('p')  

// querySelector('p')  retorna a primeira ocorrencia da tag p
const paragra = document.querySelector('p')


// querySelector('.divParagrafo') retorna a div com as tags paragrafo

const divParagrafo = document.querySelector('.paragrafo')  // armazena os paragrafos da div
const ps = divParagrafo.querySelectorAll('p')  // separa os paragrafos na NodeList

//const pr = getComputedStyle(paragrafo)
console.log(paragrafo)
console.log(paragra)
console.log(divParagrafo)
console.log(ps)


const estilosBody = getComputedStyle(document.body) // retorna o estilo da tag html. nesse caso o body
// mais pode ser qualquer tag
const corBody = estilosBody.backgroundColor  // retorna a cor da tag body armazenada na 
// na variavel com o getComputerStyle(document.elemento_selecionado)
//console.log(estilosBody)
console.log(corBody)


for ( let index of ps ) {
    // funciona com o for of
    // Nesse caso, usamos o indexador para varrer os paragrafos --> index.style
    index.style.backgroundColor = corBody
    index.style.color = '#fff'
}
    // funciona com o for in
    // Nesse caso usamos a variavel dos paragrafos junto com o indexador
    // 
    //for ( index in ps ) {
    //  ps[index].style.backgroundColor = corBody 
    //  ps[index].style.color = 'white'
    //}  
