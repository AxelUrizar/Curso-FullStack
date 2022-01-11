const encadenada = () => {

    console.log('1');

    setTimeout(() => {
        
        console.log('2');

        setTimeout(() => {
            
            console.log('4')

        }, 500);

        console.log('3')

    }, 1000);
}

encadenada();