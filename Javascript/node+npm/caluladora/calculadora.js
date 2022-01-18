const suma = (a, b) => {return a + b};
const resta = (a, b) => {return a - b};
const mult = (a, b) => {return a * b};
const div = (a, b) => {
    if (b === 0) throw new Error(`It can't be divided by 0`)
    return a / b
};

export {suma, resta, mult, div};
// module.exports = {suma, resta, mult, div};
