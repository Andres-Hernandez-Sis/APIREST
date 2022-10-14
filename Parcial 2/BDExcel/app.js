let mysql = require('mysql')
let json2xls  = require('json2xls')
let fs = require('fs')

var con = mysql.createConnection({
    host : '127.0.0.1',
    user : 'root',
    database : 'Restaurante'
});

con.connect();

con.query('SELECT * FROM cliente', function(error, results, fields) {
    if(error) throw error;
    console.log(results);

    var xls = json2xls(results)
    fs.writeFileSync('./Parcial 2/BaseDatos/data.xlsx', xls, 'binary')
});

con.end();