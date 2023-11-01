const miniTwitter = {
    usuarios: 
        [
            {
            userName: 'mario'
        }
    ]
    ,
    posts:[
        {
            id: 1,
            owner: 'mario',
            content: 'primeiro post'
        }
    ]     
    

    
}

// console.log(miniTwitter.posts)
// Crud

// create
function criaPost(dados) {
    miniTwitter.posts.push({
        id: miniTwitter.posts.length + 1,
        owner: dados.owner,
        content: dados.content
    });
}

criaPost({  owner: 'mario', content: 'segundo post'})
criaPost({ owner: 'joao', content: 'terceiro post'})
// console.log(miniTwitter.posts[2])

// read

function pegaPost() {
    return miniTwitter.posts
}

console.log(pegaPost())

// update
function atualizaContentDoPost(id, novoConteudo) {
    /*
    find(arow function com logica)
    O método find() retorna o valor do primeiro 
    elemento do array que 
    satisfizer a função de teste provida. 
    Caso contrario, undefined é retornado.
    */
    const postQueVaiSerAtualizado = pegaPost().find((post) => {
        return post.id === id
    })
    
    // console.log(postQueVaiSerAtualizado)
    postQueVaiSerAtualizado.content = novoConteudo
}

atualizaContentDoPost(3, 'novo conteudo')
console.log(pegaPost())

// delete

function apagaPost (id) {
    const listaDePostAtualizada = pegaPost().filter((postAtual) => {
        return postAtual.id !== id
    })
    
    miniTwitter.posts = listaDePostAtualizada
}
apagaPost(2)
console.log(pegaPost())