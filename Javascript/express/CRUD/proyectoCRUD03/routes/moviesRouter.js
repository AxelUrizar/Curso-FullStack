const express = require('express')
const router = express.Router()

const movies = require('../models/MovieModel')

router.get('/', (req, res) => {
    res.json(movies.findAll())
})

router.get('/:id', (req, res) => {
    res.json(movies.findById(req.params.id))
})

module.exports = router