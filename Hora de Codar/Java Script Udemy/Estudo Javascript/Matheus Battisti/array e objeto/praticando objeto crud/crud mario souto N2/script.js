
const form = document.getElementById('form')
const input = document.getElementById('input')
const inputPegaPessoa = document.getElementById('inputPegaId')
const inputApagaPessoa = document.getElementById("inputApagaId");
const buttonCriar = document.getElementById('buttonCriar')
const buttonPegar = document.getElementById('buttonPegar')
const buttonApagar = document.getElementById("buttonApagar");
const ulListaPost = document.querySelector('.listaDePost')
const ulListaDeBusca = document.querySelector('.listaDeBusca')
const ulListaDeNomes = document.querySelector("#listaDeNomes");
const pessoa = {
    cadastro: [
        {
            id: 0,
            nome: '',
        },
    ],
    criaPessoa(dados) {
        const li = document.createElement('li')
        pessoa.cadastro.push({
            id: pessoa.cadastro.length,
            nome: dados.nome
        })
        
        ulListaPost.insertAdjacentHTML('beforeend', `
        <li><input type="checkbox" name="" id="">${dados.nome}</li>
        `)
        
    },
    
    pegaPessoa(dados) {
        console.log(dados)
        ulListaDeBusca.insertAdjacentHTML('beforeend', `
        <li><input type="checkbox" name="" id="">${dados.nome}</li>
        `)
        // pessoa.cadastro.forEach((id) => {
        //     console.log(id)
        // })
        // console.log(pessoa.cadastro[inputId].nome)
        

    },

    

}
/* 
conforme a convençao: e comum utilizar o $ no inicio do nome de uma 
variavel quando ela guarda um elemento html
*/

form.addEventListener('submit', (e) => {
    e.preventDefault()
    const nome = input.value
    const inputId = inputPegaPessoa.value
    if (e.submitter === buttonCriar) {
        if (input.value !== '') {
            pessoa.criaPessoa(
                {    
                    nome: nome,
                }
            )
            input.value = "";
            // console.log(pessoa.cadastro.id++, pessoa.cadastro.nome)
            // console.log(pessoa.cadastro)
        }
    } 
    if (e.submitter === buttonPegar) {
        
            pessoa.pegaPessoa(pessoa.cadastro[inputId])

        
        
    }
    input.value = "";
})

buttonApagar.addEventListener('click', () => {
    const indexApagaPessoaValue = inputApagaPessoa.value
    const id = pessoa.cadastro[indexApagaPessoaValue];
    const novaLista = pessoa.cadastro;
    novaLista.splice(novaLista.indexOf(id), 1);
    
    const li = document.createElement("li");
    novaLista.forEach(i => {
        
        ulListaDeNomes.insertAdjacentHTML(
            "beforeend",
            `
            <li><input type="checkbox" name="" id="">${i.nome}</li>
            `
            );
            
            
            
            
        })



   



})