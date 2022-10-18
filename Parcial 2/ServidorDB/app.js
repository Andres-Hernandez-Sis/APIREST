var express  = require('express')
let json2xls  = require('json2xls')
let mysql = require('mysql')
let fs = require('fs')

const app = express();

app.use(express.text())
app.use(express.json())

app.get('/cliente/:id_cliente', (req, res) =>{
    console.log(req.params)
    res.send(req.params)
})

var con = mysql.createConnection({
    host : '127.0.0.1',
    user : 'root',
    database : 'Restaurante'
});

con.connect();
con.query('SELECT * FROM cliente', function(error, results, fields) {
    if(error) throw error;
    var xls = json2xls(results)
    console.log(results);
});
con.end();