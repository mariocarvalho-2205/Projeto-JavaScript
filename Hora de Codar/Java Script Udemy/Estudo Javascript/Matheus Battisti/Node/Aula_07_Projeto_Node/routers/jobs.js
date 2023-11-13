const express = require('express')
const router  = express.Router()
const Job     = require('../models/Job.js')


// rota de teste
router.get('/test', (req, res) => {
    res.send('deu certo')
})

// rota da vaga
router.get('/view/:id', (req, res) => {
    Job.findOne({
        where: {id: req.params.id}
    })
    .then((job) => {
        res.render('view', {
            job
        })
    })
    .catch((err) => {
        console.log(err)
    })
})

// form da rota de envio
router.get('/add', (req, res) => {
    res.render('add')
})

// rota de envio do formulario ao mysql
router.post('/add', (req, res) => {

    let {title, salary, company, description, email, new_job} = req.body;

    Job.create({
        title,
        salary,
        company,
        description,
        email,
        new_job,
    })
    .then(() => {
        res.redirect('/')
    })
    .catch((err) => {
        console.log(`deu erro ao cadastrar ${err}`)
    })
})

module.exports = router