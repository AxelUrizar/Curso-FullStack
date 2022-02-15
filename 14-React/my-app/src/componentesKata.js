function ComponentesKata(props) {
    return (
        <div>
            <h1>{props.nombre}</h1>
            <h2>{props.cargo}</h2>
            <img src={props.urlImg} />
        </div>
    );
}

export default ComponentesKata;