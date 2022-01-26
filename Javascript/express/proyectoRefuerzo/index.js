const express = require('express');
const bodyParser = require('body-parser');
const colors = require('colors');

const app = express();
const PORT = 3000;

app.listen(PORT, ()=>{
    console.log(`Servidor abierto en el puerto ${PORT}` .bgGreen.black)
});

app.get('/', (req, res)=>{
    let date = new Date();
    console.log(`home route works ---------  ${date}`);
    res.send(`Bienvenido a Express`)
});