let dia = prompt('Escribe un dia de la semana')


switch (dia) {
    case 'sábado':
        console.log('Festivo');
        break;
        
    case 'Sábado':
        console.log('Festivo');
        break;
    
    case 'domingo':
        console.log('Festivo');
        break;
    
    case 'Domingo':
        console.log('Festivo');
        break;
    
    default:
        console.log('Laboral');
        break;
}