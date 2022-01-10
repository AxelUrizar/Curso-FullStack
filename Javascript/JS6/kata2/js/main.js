let string = 'Hola mundo';
let caracteres = string.split('');

let result = {};

for (let letter = 0; letter < caracteres.length; letter++) {
    result[caracteres[letter]] ? result[caracteres[letter]]++ : result[caracteres[letter]] = 1;
    
}

console.log(result)