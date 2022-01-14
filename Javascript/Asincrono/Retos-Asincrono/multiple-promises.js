const all = (prom1, prom2) => {
    return new Promise((resolve, reject) => {
        let counter = 0;
        let arrProm = [];

        prom1.then((val) => {
            arrProm[0] = val;
            counter++;

            if (counter >= 2) {
                resolve(arrProm);    
            }
        });

        prom2.then((val) => {
            arrProm[1] = val;
            counter++;

            if (counter >= 2) {
                resolve(arrProm);    
            }
        }); 

    });
}

all(getPromise1(), getPromise2())
    .then(console.log);