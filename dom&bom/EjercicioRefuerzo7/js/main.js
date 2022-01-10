let contr = '1234'

for (let i = 3; i > 0; i--) {

    intento = prompt(`Escribe tu contraseña (Intentos restantes: ${i})`)

    if (contr == intento) {
        console.log('Has acertado');
        break;
    }
    
}