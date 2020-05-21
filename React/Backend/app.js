'use strict'

//Cargar Modulos de Node para cargar el servidor
var express = require('express');
var bodyParser = require('body-parser');


//Ejecutar express (http)
var app = express();


//Cargar Ficheros rutas


//Middlewares
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());


//CORS



//Añadir prefijos a las rutas


//Ruta o metodo de prueba para el API REST
app.get('/probando', (req, res) =>{
    

    return res.status(200).send({

        curso: 'Master en Frameworks JS',
        autor: 'Kenny Pedrique',
        url: 'tumama.es'
    });
});

//exportar el modulo (Fichero actual)
module.exports = app;