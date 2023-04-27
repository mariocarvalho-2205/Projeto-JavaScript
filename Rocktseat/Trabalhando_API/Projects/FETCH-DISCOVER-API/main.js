const url = "http://localhost:5500/api";

function getUsers () {
    fetch(url)
        .then(response => response.json())
        .then(data => renderApiResult.textContent = JSON.stringify(data))
        .catch(error => console.error(error))
}

getUsers()

function getUser() {
    fetch(`${url}/1`)
        .then(response.json())
        .then(data => {
            userName.textContent = data.name
        })
        .catch(error => console.error(error))
}

getUser()