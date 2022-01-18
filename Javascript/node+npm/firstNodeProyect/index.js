import fetch from 'node-fetch';
// const fetch = require('node-fetch');
const getPeliculasPopulares = () => {
  fetch('https://api.themoviedb.org/3/movie/popular?api_key=cea68b520beecac6718820e4ac576c3a&language=es-ES')
  .then(res=>res.json()) //Aquí parseamos la respuesta json
  .then(res =>{
    const peliculas = res.results;
    peliculas.forEach(pelicula => {
      console.log(pelicula)
    })
  })
};

getPeliculasPopulares();