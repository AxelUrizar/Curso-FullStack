let filmTemplate = (film) =>{
    let template =`<div class="col-lg-3 col-sm-6 d-flex justify-content-center align-items-center mt-4">
                        <div class="card">
                            <img class="card-img-top imgSeleccion" src="https://image.tmdb.org/t/p/w500${film.poster_path}" alt="Card image cap">
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item pilotoSeleccion">${film.original_title} </li>
                            </ul>
                        </div>
                    </div>`;
        return template;
};

const getFilms = async (page = 1) => {
    let films = getPageCached(page);
    //console.log(films);
    if ( films == null) {
        const res = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=cea68b520beecac6718820e4ac576c3a&language=es-ES&page=${page}`);
        films = res.data.results;
        cachePage(page, films);
    }
    
    let elem = document.querySelector ( '#rooster' );
    elem.innerHTML = '';
    for (let i = 0; i < films.length; i++) {
        let myNewStuff = filmTemplate(films[i])
        elem.innerHTML = elem.innerHTML + myNewStuff;
    }

    return new Promise(function(resolve) {
        resolve('films charged')
    });
}
/*const cargaPeliculas = (numPagina) => { 
    numPaginaBase = numPagina;
    loading();
}*/

let later = (delay, getFilms) => {
    return new Promise(function(resolve) {
        setTimeout(resolve, delay);
    });
}

document.addEventListener("DOMContentLoaded", function(event) {
       chargeFilms(1);
});

const chargeFilms = (page) => {
    loading();
    getFilms(page).then(() =>{
        closeLoading();
    }, null);
}

const loading = () => {
    document.getElementById('films').style.display = 'none';
    document.getElementById('loading').style.display = 'block';
}

const closeLoading = () => {
    document.getElementById('loading').style.display = 'none'
    document.getElementById('films').style.display = 'block'
}


/*var userSelection = document.getElementsByClassName('pages');

for(let i = 0; i < userSelection.length; i++) {
  userSelection[i].addEventListener("click", function(e) {
    console.log("Clicked index: " + e.getAttribute('page'));
  })
}*/

const pageLinks = document.querySelectorAll('.pages li');

pageLinks.forEach((page) => {
    page.addEventListener('click', (event)=> {
        if(!event.target.matches('.pages li')) {
            return;
        }
        let currentPage = document.getElementsByClassName('currentPage');
        if(event.target.getAttribute('page') === currentPage[0].getAttribute('page')) return;
        //console.log(event.target.getAttribute('page'));
        chargeFilms(event.target.getAttribute('page'));
        var currentPageBlocks = document.getElementsByClassName('currentPage');
        let active = pageLinks[currentPage - 1];
        /*for(let i = 0; i < active.length; i++) {
            active[i].classList.remove("active");
        }*/
        for(let i = 0; i < currentPageBlocks.length; i++) {
            currentPageBlocks[i].innerHTML = event.target.getAttribute('page');
            currentPageBlocks[i].setAttribute('page', event.target.getAttribute('page'));
        }
        //console.log('Before: ', currentPageBlocks[i].classList);
        //currentPageBlocks[i].classList.add("active");
        //console.log('After: ', currentPageBlocks[i].classList);
        //console.log()
        /*newActive = "[page="+event.target.getAttribute('page')+"]";
        let addActive = document.querySelectorAll(newActive);
        
        console.log(addActive);
        for (let i = 0; i < addActive.length; i++ ) {
            addActive[i].classList.add('active');
        }  
        let removeActive = document.querySelectorAll("[page="+currentPage[0].getAttribute('page')+"]");
        for (let i = 0; i < removeActive.length; i++ ) {
            removeActive[i].classList.remove('active');
        }  */
    })
})
