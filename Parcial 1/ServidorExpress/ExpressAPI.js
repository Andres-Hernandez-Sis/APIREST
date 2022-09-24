var express = require('express')
var cors = require('cors')
const { request } = require('express')

var app = express()

app.use(cors({origin: "http://localhost"}))
app.use(express.text())
app.use(express.json())

//Funcion MiddleWare 23 Sep 22 , Una funcion que tiene a tu request y a tu siguiente middle o siguiente funcion.
app.post((req, res, next) =>{
    console.log("Esta es una funcion middleware");
    next();
},(req, res, next) =>{
    console.log("Segunda funcion middleware");
    next();
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
    let cadena =- "Hola" + req.body.nombre + " " + req.body.apellido + "como estas?"
    res.json({saludo:cadena})
})

app.get('mayusculas/:cadena', (req, res) =>{
    console.log(req.params)
    res.send(req.params)
})

app.get('/suma', (req, res) => {
    console.log(req.query)
    let suma = parseInt(req.query.x) + parseInt(req.query.y)
    res.send(`La suma es: ${suma}`)
})




//Funciones de Status Web 21 Sep 22
app.get('/', (req, res) => {
    res.sendFile('./static/index.html',{root:__dirname},(err)=>(console.log('ArchivoEcontrao')))
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
