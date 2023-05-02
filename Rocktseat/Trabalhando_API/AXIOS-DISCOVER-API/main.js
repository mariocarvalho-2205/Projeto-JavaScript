const url = "http://localhost:5500/api"


function getUsers() {
    axios.get(url)
    .then(response => {
        apiResult.textContent = JSON.stringify(response.data)
        
    })
    .catch(error => console.log(error))

}

function getUser(id) {
    axios.get(`${url}/${id}`)
    .then(response => {
        const data = response.data
        nameUser.textContent = data.name
        cityUser.textContent = data.city
        avatarUser.src = data.avatar
    })
    
    .catch(error => console.log(error))
}

function addNewUser(newUser) {
    axios.post(url, newUser) 
    .then(response => console.log(response))
    // .then(data => addUser.textContent = data)
    .catch(error => console.log(error))
}

function updateUser(id, atualUser) {
    axios.put(`${url}/${id}`, atualUser)
    .then(response => console.log(response))
    .catch(error => console.log(error))
}

function deleteUser (id) {
    axios.delete(`${url}/${id}`)
    .then(response => console.log(response))
    .catch(error => console.log(error))
}

let newUser = {
    name: "Ady Matos",
    avatar: "https://picsum.photos/200/300",
    city: "Salvador - Guarajuba",
    }


let atualUser = {
    name: "Ady Gostosa",
    avatar: "https://picsum.photos/200/300",
    city: "Guarajuba / Praia do Forte",
}

getUsers()
getUser(2)
// addNewUser(newUser)
// updateUser(2, atualUser)
deleteUser(17)