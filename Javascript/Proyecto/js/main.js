

let filmTemplate = (film) => {
    
    let template = `<div class="col-lg-3 col-sm-6 d-flex justify-content-center align-items-center mt-4">
                        <div class="card">
                            <img class="card-img-top imgSeleccion" src="https://image.tmdb.org/t/p/w500${film.poster_path}" alt="Card image cap">
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item pilotoSeleccion">${film.original_title} </li>
                            </ul>
                        </div>
                    </div>`;

    return template;
};

// let filmRow = () => 

const getFilms = async (numPaginaBase) => {
    const res = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=cea68b520beecac6718820e4ac576c3a&language=es-ES&page=${numPaginaBase}`);

    const films = res.data.results;

    let elem = document.querySelector ( '#rooster' );


    for (let i = 0; i < films.length; i++) { 
        
        // console.log(film)

        let myNewStuff = filmTemplate(films[i])

        elem.innerHTML = elem.innerHTML + myNewStuff;

    }
    
    // console.log(elem.innerHTML)
    
    // elem.innerHTML = elem.innerHTML + '</div>';
    return new Promise(function(resolve) {
        resolve('films charged')
    });

}

let later = (delay, /*getFilms*/) => {
    return new Promise(function(resolve) {
        setTimeout(resolve, delay);
    });
}
const loading = (numPagina) => {
        document.getElementById('films').style.display = 'none';

        document.getElementById('loading').style.display = 'block';

        getFilms(numPagina).then(() => {

            document.getElementById('loading').style.display = 'none';

            document.getElementById('films').style.display = 'block';

        }, null)

    }

const cargaPeliculas = (numPagina) => {
    let elem = document.querySelector ( '#rooster' );
    elem.innerHTML = '';
    loading(numPagina);
}

document.addEventListener("DOMContentLoaded", () => {
    //código a ejecutar cuando el DOM está listo para recibir acciones
    loading();
});






