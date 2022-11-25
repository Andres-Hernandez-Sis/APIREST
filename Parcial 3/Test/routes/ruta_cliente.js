const crud   = require('../metodos');
var express  = require('express');
var router = express.Router();

/**
* @swagger
* paths:
*   /Cliente/:
*     get:        
*      summary: Consulta los registros de los clientes
*      responses:
*       200:
*        description: OK - Se devolvieron todos los clientes registrados en la tabla
*       404:
*        description: ERROR - No se encontraron clientes
*/
router.get('/', (req, res) =>{ 
    crud.Buscar().then(function(results){
        res.send(results)
    })
});

/**
* @swagger
* paths:
*   /Cliente/{id_cliente}:
*     get:
*       summary: Consulta los registros de un cliente dado un Id
*       parameters:
*       - in: path
*         name: id_cliente
*         required: true
*         example: 1
*         schema:
*           type: integer
*       responses:
*         200:
*           description: OK - Se devolvio el cliente registrado.
*         404:
*           description: ERROR - No se encontraron clientes
*/
router.get('/:id_cliente', (req, res) =>{ 
    crud.BuscarCliente(req.params.id_cliente).then(function(results){
        res.send(results)
    })
});

/**
*@swagger
*paths:
*  /Cliente/NuevoCliente:
*    post:
*      summary: Añade un nuevo cliente
*      requestBody:
*        content:
*          application/json:
*            schema:
*              type: object
*              properties:
*                id_cliente:
*                  type: string
*                telefono:
*                  type: integer
*                hora_reservacion:
*                  type: integer
*                example:
*                  id_cliente: 10
*              example:   # Sample object
*                id_cliente: 10
*                nombre: Carlos
*                telefono: 8671234433
*                hora_reservacion: 12
*      responses:
*        '200':
*          description: OK - Se añadio un nuevo cliente.
*/
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
*@swagger
*paths:
*  /Cliente/DatosClientes:
*    patch:
*      summary: Modifica un cliente registrado
*      requestBody:
*        content:
*          application/json:
*            schema:
*              type: object
*              properties:
*                id_cliente:
*                  type: string
*                telefono:
*                  type: integer
*                hora_reservacion:
*                  type: integer
*                example:
*                  id_cliente: 10
*              example:   # Sample object
*                id_cliente: 10
*                nombre: Carlos
*                telefono: 8671234433
*                hora_reservacion: 12
*      responses:
*        '200':
*          description: OK - Se edito un cliente.
*        '404':
*          description: Not Found - No se encontraron clientes
*/
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
* paths:
*   /Cliente/BajaCliente/{id_cliente}:
*     delete:
*       summary: Elimina un registro.
*       parameters:
*       - in: path
*         name: id_cliente
*         required: true
*         example: 1
*         schema:
*           type: integer
*       responses:
*         200:
*          description: OK- Se elimino un registro de cliente existente.
*/
//Peticion Delete
router.delete('/BajaCliente/:id_cliente',(req,res)=> {
    console.log(req.params);
    crud.Eliminar(req.params.id_cliente).then(function(results){
        res.send(results)
    })
});

module.exports.router = router;