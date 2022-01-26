const express = require('express');
const app = express();
const port = 3000;

const listadoPeliculas = [
    {id: 1, titulo: 'Soy Leyenda'},
    {id: 2, titulo: 'Rey León'},
    {id: 3, titulo: 'La Marca del Demonio'},
    {id: 4, titulo: 'A todo Gas'},
    {id: 5, titulo: 'El Risas'},
    {id: 6, titulo: 'El Brujo'},
    {id: 7, titulo: 'Rey de la Montaña'},
    {id: 8, titulo: 'Soy el Rey del Mundo'}
]

app.listen(port, ()=> console.log('Servidor levantado en 3000'));

app.get('/', (req, res) => res.send('Hello World!'));

app.get('/movies', (req, res)=> {
    res.json(listadoPeliculas);
});

app.get('/movie/:id', (req, res)=>{
    try {
        res.send(listadoPeliculas[(req.params.id) - 1].titulo)
    } catch (error) {
        console.log(error);
        res.send('Película inexistente')
    }
});

app.get("/buscador", (req, res)=>{
    let peliculasEncontradas = [];
    
    for (const pelicula of listadoPeliculas) {
        let textoBuscado = req.query.movie.toLowerCase();
        let titulo = pelicula.titulo.toLowerCase();
        
        if (titulo.indexOf(textoBuscado) !== -1) {
            peliculasEncontradas.push(pelicula.titulo);
        }
    }
    res.send(peliculasEncontradas);
})
