var express = require('express');
var router = express.Router();
const filmModel = require('../models/filmsModel')

router.get('/listado',(req,res,next)=>{
    filmModel.fetchAll((error, films)=>{
    if(error) return res.status(500).json(error);
        res.render('filmList',{
        title: 'Listado de peliculas',
        layout: 'layout.hbs',
        films
        })
    })
});

router.get('/insertar', (req, res, next) => {
    const FILM = {
        title: "Es una prueba2",
        release_year: 2016,
        description: "Esto es una descripcion de prueba 2"
      };

    filmModel.insert(FILM, (error, insertID) => {
        if (insertID) {
            return res.status(200).send('Añadido pelicula ->' + insertID);
        }    

        res.status(500).json('Error guardando pelicula' + error);
    });
});

module.exports = router;