promise = new Promise((fulfill, reject) =>  {
   fulfill('PROMISE VALUE') 
});

promise2 = new Promise((fulfill, reject) => {
    fulfill({
        'film1' : {
            'title' : 'title1',
            'description' : 'description1'
        },

        'film2' : {
            'title' : 'title2',
            'description' : 'description2'
        },
    })
})

promise.then(console.log);

console.log('MAIN PROGRAM');

promise2.then((json) => {
    // console.log(JSON.stringify(json))
    for (const i in json) {
        for (const j in json[i]) {
            console.log(`${j}: ${json[i][j]}`)
        }
    }
})

console.log('MAIN PROGRAM');

console.log('MAIN PROGRAM');

