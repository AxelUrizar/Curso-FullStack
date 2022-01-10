let input1 = document.addEventListener('input', valorUpdate);
function valorUpdate(e){
    let escrito = e.target.value;

    if(escrito === 'Axel'){
    document.getElementById("parrafo").innerHTML = "Has escrito tu nombre";

    }
    
    else{
        document.getElementById("parrafo").innerHTML = "";
    }

}