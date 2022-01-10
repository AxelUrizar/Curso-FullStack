let spread = (nombre) => {
    
    let arr = [];
    
    for(let i = 0; i < nombre.length; i++){
    
        if(nombre[i].charCodeAt(0) >= 97 && nombre[i].charCodeAt(0) <= 122)
            arr[i] = String.fromCharCode(nombre[i].charCodeAt(0)-32);
        else if(nombre[i].charCodeAt(0) >= 224)
            arr[i] = String.fromCharCode(nombre[i].charCodeAt(0)-32);
        else
            arr[i] = String.fromCharCode(nombre[i].charCodeAt(0));
    }
    
    return arr;
    
};

let nombre = "Javascript";
let resultado = spread([...nombre]);
console.log(resultado);