const crud   = require('./metodos');

var express  = require('express');
var router = express.Router();

// Peticion GET
router.get('/', (req, res) =>{ 
    crud.Buscar().then(function(results){
        res.send(results)
    })
});

router.get('/:id_cliente', (req, res) =>{ 
    crud.BuscarCliente(req.params.id_cliente).then(function(results){
        res.send(results)
    })
});

// Peticion Post Insertar
router.post('/NuevoCliente', (req, res) =>{ 
    let cliente = {
        "id_cliente" : req.body.id_cliente,
        "nombre" : req.body.nombre,
        "telefono" : req.body.telefono,
        "hora_reservacion": req.body.hora_reservacion
    }
    crud.Insertar(cliente).then(function(results){
        res.send(results)
    })
});

// Peticion Modificar
router.patch('/DatosClientes',(req,res)=> {
    let cliente = {
        "id_cliente" : req.body.id_cliente,
        "nombre" : req.body.nombre,
        "telefono" : req.body.telefono,
        "hora_reservacion": req.body.hora_reservacion
    }
    crud.Modificar(cliente).then(function(results){
        res.send(results)
    })
});

//Peticion Delete
router.delete('/BajaCliente/:id_cliente',(req,res)=> {
    console.log(req.params);
    crud.Eliminar(req.params.id_cliente).then(function(results){
        res.send(results)
    })
});

module.exports.router = router;
