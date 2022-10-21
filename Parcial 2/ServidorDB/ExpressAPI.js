var express  = require('express')
var cors     = require('cors')
var fs       = require('fs');
var morgan   = require('morgan');
var path     = require('path');
const app    = express();
const cadena = require('./cadena');
let mysql = require('mysql')
app.use(cors({origin: "http://localhost"}))
app.use(express.text())
app.use(express.json())
 
// Peticion GET, para la consulta de una BD - Lunes 17 Oct 22
app.get('/:id_cliente', (req, res) =>{
    var con = mysql.createConnection({
        host : '127.0.0.1',
        user : 'root',
        database : 'Restaurante'
    });
    
    con.connect();
    con.query('SELECT * FROM cliente where id_cliente = '+req.params.id_cliente, function(error, results, fields) {
        if(error) throw error;
        res.send(results);
    });
    con.end();
})

app.post('/json' , (req, res) => {
    
    console.log(req.body);
    let create = crud.Create(req.body);

    res.json({
        registro : crear
         })
})






// create a write stream (in append mode)
var accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a' })
 
// setup the logger
app.use(morgan('combined', { stream: accessLogStream }))




//Funcion MiddleWare 23 Sep 22 , Una funcion que tiene a tu request y a tu siguiente middle o siguiente funcion.
app.use('/',(req, res, next) =>{
    console.log("Esta es una funcion middleware");
    next();
},(req, res, next) =>{
    console.log("Segunda funcion middleware");
    next();
})



// 26 Sep 2022 Creando Modulos
app.post('/texto' , (req, res) => {
    console.log(req.body);
    let may = cadena.PasaMayusculas(req.body);
    let sinesp = cadena.QuitarEspacios(req.body);
    let longi = cadena.RetornarLongitud(req.body);

    res.json({
        mayusculas: may,
        sinespacios: sinesp,
        longitud: longi
    })
})



// Funciones post 22 Sep 22
app.post('/texto',(req, res) =>{
    console.log(req.body)
    let may = req.body.toUpperCase()
    let sinesp = req.body.trim()
    let longi = req.body.length
    res.json({mayusculas : may,
            sinespacios:  sinesp,    
            longitud: longi
             })
})


app.post('/json',(req, res) =>{
    console.log(req.body.nombre)
    let cadena = "Hola " + req.body.Nombre + " " + req.body.Apellido + " como estas?"
    res.json({saludo:cadena})
})

app.get('/mayusculas/:cadena', (req, res) =>{
    console.log(req.params)
    res.send(req.params.cadena.toUpperCase())
})


app.get('/suma', (req, res) => {
    console.log(req.query)
    let suma = parseInt(req.query.x) + parseInt(req.query.y)
    res.send(`La suma es: ${suma}`)
})




//Funciones de Status Web - 21 Sep 22
app.get('/', (req, res) => {
    res.sendFile('./static/index.html',{root:__dirname},(err)=>(console.log('Archivo Econtrado')))
})

app.post('/', (req, res) => {
    res.json({usuario: 'Andrew'})
})

app.use('/', (req, res) => {
    res.status(404).sendFile('./static/404.html',{root:__dirname})
})


app.listen(8082, () => {
    console.log('Servidor Express en Puerto 8082')
})
