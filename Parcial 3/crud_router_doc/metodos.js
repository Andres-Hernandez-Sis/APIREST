const mysql     = require('mysql');

var con = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    database: 'Restaurante'
});

// GET Buscar
function BuscarCliente(id) {
    let query = 'SELECT * FROM cliente where id_cliente = ' + id
    return new Promise(function (resolve, reject) {
        con.query(query, function (error, results) {
            if (results == undefined) {
                reject(error)
            }
            else {
                resolve(results)
            }
        })
    })
}
//Buscar Todos
function Buscar() {
    let query = 'SELECT * FROM cliente'
    return new Promise(function (resolve, reject) {
        con.query(query, function (error, results) {
            if (results == undefined) {
                reject(error)
            }
            else {
                resolve(results)
            }
        })
    });
}

//POST
function Insertar(cliente) {
    return new Promise(function (resolve, reject) {
        con.query(`insert into cliente (id_cliente,nombre, telefono, hora_reservacion) values (?,?,?,?)`, [cliente.id_cliente, cliente.nombre, cliente.telefono, cliente.hora_reservacion], function (error, results) {
            if (!error) {
                resolve("Se inserto un nuevo registro (●ˇ∀ˇ●)")
            }
            else {
                reject(error + "No se pudo insertar el registro:(")
            }
        })
    });
}

// DELETE
function Eliminar(id) {
    return new Promise(function (resolve, reject) {
        con.query(`delete from cliente where id_cliente=? `, [id], function (error, results) {
            if (results.affectedRows > 0) {
                resolve("Se elimino correctamente ( •̀ ω •́ )✧ " + results.affectedRows);
            }
            else {
                reject("Ocurrio un error, no se borro el registro （；´д｀）ゞ");
            }
        })
    });
}

// PUT/PATCH
function Modificar(cliente) {
    return new Promise(function (resolve, reject) {
        con.query(`UPDATE cliente SET nombre=?, telefono=?, hora_reservacion=? WHERE id_cliente = ?`, [cliente.nombre, cliente.telefono, cliente.hora_reservacion, cliente.id_cliente], function (error, results) {
            if (error) {
                console.log(error)
                //reject(new Error("No se pudo modificar （；´д｀）ゞ"))
            } else {
                resolve("Se modifico: " + results.affectedRows)
            }
        })
    });
}

exports.BuscarCliente = BuscarCliente;
exports.Buscar = Buscar;
exports.Insertar = Insertar;
exports.Eliminar = Eliminar;
exports.Modificar = Modificar;

