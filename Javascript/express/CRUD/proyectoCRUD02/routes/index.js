var express = require('express');
var router = express.Router();

var rickmorty = require('../rick-morty.json')

router.get('/', (req, res, next) => {
    res.json(rickmorty)
})

module.exports = router;