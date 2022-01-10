function addHtml (){
    let escrito = document.getElementById("input1");
    
    let objetoDiv = document.getElementById("contenedor");
    let p = document.createElement("p");
    
    p.innerHTML = escrito.value;
    
    escrito.value = "";
    
    objetoDiv.appendChild(p);
}