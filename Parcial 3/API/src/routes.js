const crud   = require('./methods');
var express  = require('express');
var router = express.Router();

/**
* @swagger
* paths:
*   /Movie:
*     get:        
*      summary: Consulta los registros de las peliculas
*      responses:
*       200:
*        description: OK - Se devolvieron todos los movies registrados en la tabla
*       404:
*        description: ERROR - No se encontraron peliculas
*/
router.get('/Movie', (req, res) =>{ 
    crud.Buscar().then(function(results){
        res.send(results)
    })
});

/**
* @swagger
* paths:
*   /Movie/{id_pelicula}:
*     get:
*       summary: Consulta los registros de una pelicula dado un Id
*       parameters:
*       - in: path
*         name: id_pelicula
*         required: true
*         example: 1
*         schema:
*           type: string
*       responses:
*         200:
*           description: OK - Se devolvio una pelicula.
*         404:
*           description: ERROR - No se encontraron peliculas
*/
router.get('/Movie/:id_pelicula', (req, res) =>{ 
    crud.BuscarPorID(req.params.id_pelicula).then(function(results){
        res.send(results)
    })
});

/**
*@swagger
*paths:
*  /NuevaPelicula:
*    post:
*      summary: Añade una nueva pelicula
*      requestBody:
*        content:
*          application/json:
*            schema:
*              type: object
*              properties:
*                id_pelicula:
*                  type: string
*                titulo:
*                  type: string
*                lanzamiento:
*                  type: string
*                duracion:
*                  type: string
*                sinopsis:
*                  type: string
*                genero:
*                  type: string
*              example:
*                id_pelicula: 1
*                titulo: 5 cm per Second
*                lanzamiento: 3 Marzo 2007
*                duracion: 65 minutos
*                sinopsis: Erase una vez
*                genero: Accion
*      responses:
*        '200':
*          description: OK - Se añadio una pelicula
*/
router.post('/NuevaPelicula', (req, res) =>{ 
    let movie = {
        "id_pelicula" : req.body.id_pelicula,
        "titulo" : req.body.titulo,
        "lanzamiento" : req.body.lanzamiento,
        "duracion": req.body.duracion,
        "sinopsis": req.body.sinopsis,
        "genero": req.body.genero
    }
    crud.Insertar(movie).then(function(results){
        res.send(results)
    })
});

/**
*@swagger
*paths:
*  /DatosPelicula:
*    patch:
*      summary: Modifica una pelicula registrada
*      requestBody:
*        content:
*          application/json:
*            schema:
*              type: object
*              properties:
*                id_pelicula:
*                  type: string
*                titulo:
*                  type: string
*                lanzamiento:
*                  type: string
*                duracion:
*                  type: string
*                sinopsis:
*                  type: string
*                genero:
*                  type: string
*              example:
*                id_pelicula: 1
*                titulo: 5 cm per Second
*                lanzamiento: 3 Marzo 2007
*                duracion: 65 minutos
*                sinopsis: Erase una vez
*                genero: Accion
*      responses:
*        '200':
*          description: OK - Se edito una pelicula.
*        '404':
*          description: Not Found - No se encontraron peliculas.
*/
router.patch('/DatosPelicula',(req,res)=> {
    let movie = {
        "id_pelicula" : req.body.id_pelicula,
        "titulo" : req.body.titulo,
        "lanzamiento" : req.body.lanzamiento,
        "duracion": req.body.duracion,
        "sinopsis": req.body.sinopsis,
        "genero": req.body.genero
    }
    crud.Modificar(movie).then(function(results){
        res.send(results)
    })
});

/**
* @swagger
* paths:
*   /BorrarPelicula/{id_pelicula}:
*     delete:
*       summary: Elimina una pelicula.
*       parameters:
*       - in: path
*         name: id_pelicula
*         required: true
*         example: 1
*         schema:
*           type: string
*       responses:
*         200:
*          description: OK- Se elimino un registro existente.
*/
router.delete('/BorrarPelicula/:id_pelicula',(req,res)=> {
    console.log(req.params);
    crud.Eliminar(req.params.id_pelicula).then(function(results){
        res.send(results)
    })
});

module.exports.router = router;