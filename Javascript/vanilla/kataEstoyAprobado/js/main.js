function calculaNota() {
   
    let nota = document.getElementById('notas').value

    if (nota <= 4) {
        alert(`Insuficiente`);
    } else if (nota <= 6) {
        alert(`Suficiente`);  
    } else if (nota <= 8) {
        alert(`Notable`);
    } else if (nota <= 10) {
        alert(`Sobresaliente`);  
    }

}    

