const express = require('express')
const router  = express.Router()
const Job     = require('../models/Job.js')

router.get('/test', (req, res) => {
    res.send('deu certo')
})

// add job via post
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