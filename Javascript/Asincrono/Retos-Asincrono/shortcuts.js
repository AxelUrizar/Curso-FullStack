promise = Promise.reject('SECRET VALUE');

promise.catch((err) => {
    console.error('THERE IS AN ERROR!!!');
    console.error(err.message);
})