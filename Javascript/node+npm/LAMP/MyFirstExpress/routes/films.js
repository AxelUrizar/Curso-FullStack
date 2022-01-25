var express = require('express');
var router = express.Router();
const filmModel = require('../models/filmsModel')

router.get('/listado',(req,res,next)=>{
    filmModel.fetchAll((error, films)=>{
    if(error) return res.status(500).json(error);
        res.render('film-list',{
        title: 'Listado de peliculas',
        layout: 'layout.hbs',
        films
        })
    })
})

module.exports = router;