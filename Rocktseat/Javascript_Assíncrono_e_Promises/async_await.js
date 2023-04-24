// async await - normal
const promessa = new Promise( function (resolve, reject) {
    return resolve('Ok!')
})

async function start () {

    try {
        const result = await promessa
        console.log(result)
    } catch ( err ){
        console.log(err)
    } finally {
        console.log('sempre irei rodar')
    }
}
start()

// fetch normal
// fetch('https://api.github.com/users/maykbrito')
//     .then((response) => response.json())
//     .then(data => fetch(data.repos_url))
//     .then(res => res.json())
//     .then(d => console.log(d))
//     .catch(erro => console.log(erro))  // mensagem de erro



// async await com fetch

async function start2 () {
    const response = await fetch('https://api.gthub.com/users/maykbrito')
    const user = await response.json()
    const reposResponse = await fetch(user.repos_url)
    const repos = await reposResponse.json()
    console.log(repos)

    // pode ser dessa forma
    // try{
    // }
    //  catch ( err ){
    //     console.log( err)
    // } finally {
    //     console.log('sempre executado')
    // }
}

// maneira mais abreviada
start2().catch(e => console.log(e)).finally(() => console.log('eu de novo'))

// promessa
//     .then(function (response) {
//         console.log(response)
//     })
//     .catch(function (err) { 
//         console.log(err) 
//     })
//     .finally(function () {
//         console.log('sempre irei executar')
//     })


// simplificando o codigo


async function start3() {
    const url = 'https://api.github.com/users/maykbrito'
    const user = await fetch(url).then(r => r.json())
    // const user = await response.json()
    const repos = await fetch(user.repos_url).then(r => r.json())
    // const repos = await reposResponse.json()
    console.log(repos)
}

start3().catch(e => console.log(e)).finally(() => console.log('eu de novo'))


// async await com axios

import axios from 'axios'

async function fecthRepos() {
    const user = await axios.get('https://api.github.com/users/maykbrito')
    const repos = await axios.get(user.data.repos_url)
    console.log(repos.data)

}

fecthRepos()

//.then(response => axios.get(response.data.repos_url))
//.then(repos => console.log(repos))
// .catch( erro => console.log(erro))