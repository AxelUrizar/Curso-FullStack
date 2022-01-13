const first = Promise.resolve('secret value');
const second = first.then((param) => {
    return new Promise((resolve, rejected) => resolve(param));
});

second.then(console.log, null);

// firstPromise = first();

// secondPromise = firstPromise.then((param) => {
//     return second(param);
// });

// secondPromise.then(console.log, null);