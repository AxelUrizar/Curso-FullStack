const anterior = document.getElementById('cambiarPeliculasAnterior');

const siguiente = document.getElementById('cambiarPeliculasSiguiente');    

let elem = document.querySelector ( '#rooster' );


let filmTemplate = (film) => {
    
    let template = `<div class="col-lg-3 col-sm-6 d-flex justify-content-center align-items-center">
                        <div class="card mb-4">
                            <img class="card-img-top" src="https://image.tmdb.org/t/p/w500${film.poster_path}" alt="Card image cap">
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item bg-warning fw-bold">${film.original_title} </li>
                            </ul>
                        </div>
                    </div>`;

    return template;
};

// let filmRow = () => 

const getFilms = async (numPaginaBase = 1) => {
    const res = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=cea68b520beecac6718820e4ac576c3a&language=es-ES&page=${numPaginaBase}`);

    const films = res.data.results;

    const buscador = document.getElementById('buscador');

    const boton = document.getElementById('boton');

    for (let i = 0; i < films.length; i++) { 
        
        // console.log(film)

        let myNewStuff = filmTemplate(films[i])

        elem.innerHTML = elem.innerHTML + myNewStuff;

    }

    if (numPaginaBase < 2) {
        anterior.style.display = 'none'
    } else {
        anterior.style.display = 'block'
    }

    if (numPaginaBase > 9) {
        siguiente.style.display = 'none'
    } else {
        siguiente.style.display = 'block'
    }
    
    const filtrar = () => {
        console.log(buscador.value);
        elem.innerHTML = '';

        const texto = buscador.value.toLowerCase();

        for (let pelicula of films) {
            let nombre = pelicula.original_title.toLowerCase();
            if (nombre.indexOf(texto) !== -1) {
                elem.innerHTML += `<div class="col-3 d-flex justify-content-center align-items-center">
                                    <div class="card mb-4">
                                        <img class="card-img-top" src="https://image.tmdb.org/t/p/w500${pelicula.poster_path}" alt="Card image cap">
                                        <ul class="list-group list-group-flush">
                                            <li class="list-group-item bg-warning fw-bold">${pelicula.original_title} </li>
                                        </ul>
                                    </div>
                                 </div>`;
            } 
        }
        
        if (elem.innerHTML === '') {
            elem.innerHTML = `<div class='col d-flex justify-content-center align-items-center' id='noEncontrados'>
                                <div id='falloBusqueda' class='d-flex justify-content-center align-items-center'>
                                    <h2>No se ha encontrado ninguna película con ese titulo.</h2>
                                </div>
                              </div> `
        }
    }
    
    boton.addEventListener('click', filtrar);

    buscador.addEventListener('keypress', (enter) => {
        if (enter.key === 'Enter') {
            filtrar();
        }
    })

    
}

const loading = (numPagina = 1) => {

    elem.innerHTML = '';

    document.getElementById('films').style.display = 'none';

    document.getElementById('loading').style.display = 'block';

    getFilms(numPagina).then(() => {

        document.getElementById('loading').style.display = 'none';

        document.getElementById('films').style.display = 'block';

    }, null)

    anterior.addEventListener('click', () => {
        elem.innerHTML = '';
        getFilms(numPagina -= 1);
    });

    siguiente.addEventListener('click', () => {
        elem.innerHTML = '';
        getFilms(numPagina += 1);            
    });
        
}

const cargaPeliculas = (numPagina) => {
    elem.innerHTML = '';
    loading(numPagina);
}

document.addEventListener("DOMContentLoaded", () => {
    //código a ejecutar cuando el DOM está listo para recibir acciones
    loading();
});

for (let i = 1; i < 11; i++) {
    document.getElementById(`${i}`).addEventListener('click', () => {
        loading(i);
        });
}




