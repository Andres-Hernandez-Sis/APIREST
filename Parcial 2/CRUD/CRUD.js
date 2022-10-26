const cors = require('cors');
var express  = require('express');
const app    = express();
const crud   = require('./metodos');

app.use(cors({origin: "*"}));

app.use(express.text());
app.use(express.json());


// Peticion GET- Lunes 17 Oct 22
app.get('/Cliente/:id_cliente', (req, res) =>{ 
    crud.BuscarCliente(req.params.id_cliente).then(function(results){
        res.send(results)
    })
});

app.get('/Cliente', (req, res) =>{ 
    crud.Buscar().then(function(results){
        res.send(results)
    })
});

// Peticion Post Insertar
app.post('/NuevoCliente', (req, res) =>{ 
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

//Peticion Delete
app.delete('/BajaCliente/:id_cliente',(req,res)=> {
    console.log(req.params);
    crud.Eliminar(req.params.id_cliente).then(function(results){
        res.send(results)
    })
});

// Peticion Modificar
app.patch('/DatosClientes',(req,res)=> {
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


app.listen(8082, () => {
    console.log('Servidor Express en Puerto 8082')
})