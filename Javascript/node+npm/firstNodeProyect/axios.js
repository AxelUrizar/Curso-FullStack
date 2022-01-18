import axios from "axios"

for (let i = 0; i < process.argv.length; i++) {
    console.log(process.argv[i])
    
}

const page = process.argv[2] || 1; 

const getPeliculasPopularesAxios = () => {
    axios.get('https://api.themoviedb.org/3/movie/popular?api_key=cea68b520beecac6718820e4ac576c3a&language=es-ES&page=' +page).then(res => {
        // console.log(res);

        const peliculas = res.data.results;

        peliculas.forEach(pelicula => {
            // console.log(pelicula)
        });
    });
}

getPeliculasPopularesAxios();