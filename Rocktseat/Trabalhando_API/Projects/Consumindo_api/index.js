const express = require('express');
const app = express();
const port = 3000;
const route = '/';
const axios = require('axios')


app.listen(port, () => {
    console.log('server consumindo api ')
})

app.use(express.json())

app.route(route).get((req, res) => {
    
    axios.get("https://api.github.com/users/mariocarvalho-2205")

        // dessa forma conseguimos renderizar a foto no html
        .then(result => res.send(`<img src="${result.data.avatar_url}"/>`))  
        .catch(error => console.log(error)) 
})



// app.route('/nome').get((req, res) => res.send('rota nome '))
// app.route('/nome2').post((req, res) => {
//     const nome2 = req.body
//     res.send(nome2)
// })
