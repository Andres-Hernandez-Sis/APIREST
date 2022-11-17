const crud   = require('../metodos');
var express  = require('express');
var router = express.Router();

/**
 * @swagger
 * /:
 *  get:
 *   Summary: Información de los registros existentes.
 *   responses:
 *    200:
 *     description: Devuelve todos los clientes registrados en la tabla, no es necesario enviar parametros.
*/

router.get('/', (req, res) =>{ 
    crud.Buscar().then(function(results){
        res.send(results)
    })
});

/**
 * @swagger
 * /:
*  get:        
*   summary: Información de los objetos en la tabla.
*   responses:
*    200:
*     description: Devuelve los clientes registrados en la tabla, de acuerdo a un id enviado.
*/

router.get('/:id_cliente', (req, res) =>{ 
    crud.BuscarCliente(req.params.id_cliente).then(function(results){
        res.send(results)
    })
});

/**
 * @swagger
 * /:
 *  post:
 *   summary: Agregar un nuevo registro.
 *   responses:
 *    200:
 *     description: Permite agregar un nuevo cliente.
*/

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

/**
 * @swagger
 * /:
 *  patch:
 *   summary: Modificar un registro.
 *   responses:
 *    200:
 *     description: Permite modificar el registro de un cliente.
*/

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

/**
 * @swagger
 * /:
 *  delete:
 *   summary: Eliminar un registro existente.
 *   responses:
 *    200:
 *     description: Permite eliminar un registro de cliente existente.
*/

//Peticion Delete
router.delete('/BajaCliente/:id_cliente',(req,res)=> {
    console.log(req.params);
    crud.Eliminar(req.params.id_cliente).then(function(results){
        res.send(results)
    })
});

module.exports.router = router;