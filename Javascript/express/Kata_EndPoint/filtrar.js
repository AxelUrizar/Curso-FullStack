const filtrar = (listadoPeliculas) => {
    for (const pelicula of listadoPeliculas) {
        let titulo = pelicula.titulo;
        let textoBuscado = req.query.movie;
        if (titulo.indexOf(textoBuscado) !== -1) {
            return pelicula.title
        }
    }
}

export default filtrar