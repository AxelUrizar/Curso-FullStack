const { response } = require('express');
const express = require('express');
const bodyParser = require('body-parser')
const index = express();

index.use(bodyParser.urlencoded({ extended: true }));
index.use(bodyParser.json());
index.use(bodyParser.raw());

index.get('/',(req, res)=> res.send('Bienvenidos a la API REST'));

index.get('/about',(req, res)=> res.send('About endpoint test'));

index.post('/about', (req, res)=> {
    console.log(req.query);
    console.log(req.body)
    res.json(req.body)
});

index.get('/request/user/:name', (req, res)=>{
    res.send('My name is : ' + req.params.name)
})

index.listen(4201,()=>{
    console.log('La API está levantada en el puerto 4201');
    console.log('PID Process', process.pid);
});
