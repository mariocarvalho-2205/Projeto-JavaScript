const elementos = [
  { tag: "p", texto: "texto no paragrafo" },
  { tag: "div", texto: "texto na div" },
  { tag: "section", texto: "texto na section" },
  { tag: "footer", texto: "texto no footer" },
];


//const elements = document.querySelector('h1')
function criaElementos () {
    //const container = document.querySelector(".container");
    //const tagCriada = document.createElement("div");

    for (i = 0; i < elementos.length; i++) {
        // 2 modo:  usando desestruturação
        /*let { tag, texto } = elementos[i] // desestrutura o array
        let criaTag = document.createElement(tag)
        // 1 modo de adicionar texto a tag
        criaTag.innerHTML = texto
        tagCriada.appendChild(criaTag)
        console.log(tag)*/
            
        // feito no modo normal do for  // é tudo criado dentro do for
        let body = document.querySelector(".container");
        let novo = document.createElement(elementos[i].tag); 
        let texto = document.createTextNode(elementos[i].texto);       
        body.appendChild(novo, novo.appendChild(texto));
        //novo.appendChild(texto);
        //console.log(novo);
    }
    container.appendChild(tagCriada)
}
criaElementos();


//elements.innerHTML = `teste`
//console.log(Object.values(elementos[0]))
//console.log(elementos[0].tag, elementos[2].texto)