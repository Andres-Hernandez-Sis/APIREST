const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send('Servidor express constestando - 19100197')
})

app.post('/', (req, res) => {
    res.send('Servidor Express Recibio Post')
})

app.listen(8082, () => {
    console.log('Servidor Express en Puerto 8082')
})


// 1. npm init, para crear los archivos, la carpeta de modulos.
// 2. npm install express , que este en la carpeta nodule modules, para que nos baje el capeta express
// 3.- node servidorexpress <- nombre de tu archivo