const { response } = require('express');
const express = require('express');
const index = express();

index.get('/',(req, res)=> res.send('Hello World!'));

index.get('/about',(req, res)=> res.send('About endpoint test'));

index.post('/', (req, res)=> {
    console.log(req);
    res.json({test: '123'})
})

index.listen(3000,()=>{
    console.log('Servidor levantado en 3000');
    console.log('PID Process', process.pid);
});