'use strict';

const attachTitle = (nombre) => {
    return `DR. ${nombre}`;
};

Promise.resolve('MANHATTAN')
    .then(attachTitle)
    .then(console.log)