const express   = require('express');
const cors      = require('cors');
const ruta_cliente = require('./ruta_cliente.js')

const app       = express();
app.use(cors({origin: "*"}))
app.use(express.text())
app.use(express.json())

app.use('/cliente', ruta_cliente.router)

app.listen(8082, () =>{
    console.log("Servidor escuchando en el puerto 8082")
})