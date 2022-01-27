var express = require('express');
var router = express.Router();

// const morgan = require('morgan');
// const app = express();

//Add datos de prueba
let movies = [
    {id:1, title: "Soy Leyenda"},
    {id:2, title: "El Risas"},
    {id:3, title: "Yo Robot"},
    {id:4, title: "El Hoyo"}
];


//ENDPOINTS CRUD-------------------------------------------------------------------------------
//Metodo GET - READ ALL
router.get('/', (req, res) => {
    res.json(movies);
});

//Metodo GET - READ por ID
router.get('/:id', (req, res) => {
    //const id = rep.params.id;
    const {id} = req.params;
    let movie = movies.find(movie => movie.id == id);
    res.json(movie);
});

router.get('/titulo/:title', (req, res) => {
    const {title} = req.params;
    let movie = movies.find(movie => movie.title == title);
    res.json(movie);
});


//Metodo POST - CREATE
router.post('/', (req, res) => {
    const {id, title} = req.body;
    const movie = {id, title};
    movies.push(movie);
    res.json(movie);
});

//Metodo PUT - UPDATE
router.put('/:id', (req, res) => {
    const {id} = req.params;
    const {title} = req.body;
    let movieList = movies.filter(movie => movie.id != id);
    let movie = {id, title};
    movieList.push(movie);
    movies = movieList;
    res.json(movie);
});

//Metodo DELETE
router.delete('/:id', (req, res) => {
    const {id} = req.params;
    let movieList = movies.filter(movie => movie.id != id);
    movies = movieList;
    res.send(`Registro ${id} eliminado`);
});



module.exports = router;