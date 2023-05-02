const url = "http://localhost:5500/api";


// essa função retorna o array de objeto user
function getUsers () {
    fetch(url)
        .then(response => response.json())  // retorna o json
        .then(data => renderApiResult.textContent = JSON.stringify(data))  // imprimi o array completo
        .catch(error => console.error(error))
}



// essa retorna o objeto e os dados individuais
function getUser() {
    fetch(`${url}/1`)
        .then(response => response.json())  // retorna o objeto completo
        // retorna o dados individuais
        .then(data => {  
            userName.textContent = data.name 
            userCity.textContent = data.city
            userAvatar.src = data.avatar  
        })
        .catch(error => console.error(error))
}




// função para adicionar o novo usuario
function addUser(newUser) {
    fetch(url, {
        method: "POST",
        body: JSON.stringify(newUser),  // JSON.stringfy() vai transformar o objeto em texto de json
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
        .then(response => response.json())
        .then(data => alertApi.textContent = data)
        .catch(error => console.error(error))
    
}


function updateUser (userUpdate, id) {
    fetch(`${url}/${id}`, {
        method: "PUT",
        body: JSON.stringify(userUpdate),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
        .then(response => response.json())
        .then(data => alertApi.textContent = data)
        .catch(error => console.log(error))
}


function deleteUser (id) {
    fetch(`${url}/${id}`, {
        method: "DELETE",
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
    .then(response => response.json())
    .then(data => alertApi.textContent = data)
    .catch(error => console.log(error))
}
// passar dados e incluir um novo usuario

let userUpdate = {
    name: "Joao",
    avatar: "https://picsum.photos.com/200/300",
    city: "Minas Gerais",
};

let newUser = {
    name: "Adilma Matos",
    avatar: "https://picsum.photos.com/200/300",
    city: "Salvador",
};


getUsers()
getUser()
//addUser(newUser)
// updateUser(userUpdate, 5)
deleteUser(3)