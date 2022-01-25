var express = require('express')
var router = express();

router.get('/prueba',(req,res,next)=>{
    res.render('prueba.hbs',{
        usuarios: [
            {id: 1 , name: 'xavi'},
            {id: 2 , name: 'pepe'},
            {id: 3 , name: 'jesus'}
        ],
        administrador:{
            nombre: 'Xavi',
            apellidos : 'Rodriguez'
        },
        appName: 'Prueba',
        layout: 'template'
    })
});

module.exports = router;