const mysql     = require('mysql');

var con = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    database: 'animapi'
});

/**
 * Funcion que nos devuelve todos registros de peliculas.
 * @return Todas las peliculas con todos sus datos.
 * @return {object} Objeto de pelicula.
 */
function Buscar() {
    let query = 'SELECT * FROM movie'
    return new Promise(function (resolve, reject) {
        con.query(query, function (error, results) {
            if (results == undefined) {
                reject("Ocurrio un error: "+error)
            }
            else {
                resolve(results)
            }
        })
    });
}

/**
 * Funcion que nos devuelve un pelicula de acuerdo a un id especificado.
 * @param {Int} id - numero del id de la pelicula.
 * @return {object} Objeto de pelicula.
 */
function BuscarPorID(id) {
    let query = 'SELECT * FROM movie where id_pelicula = ' + id
    return new Promise(function (resolve, reject) {
        con.query(query, function (error, results) {
            if (results == undefined) {
                reject("Ocurrio un error: "+error)
            }
            else {
                resolve(results)
            }
        })
    })
}

/**
 * Funcion que nos permite agregar un registro de pelicula de acuerdo a un id especificado.
 * @param {Int} id - numero del id de la pelicula.
 * @param {string} titulo - titulo de la pelicula.
 * @param {string} lanzamiento - fecha de lanzamiento de la pelicula - Ejemplo 5 Marzo 2022.
 * @param {string} duracion - duracion de la pelicula - Ejemplo 65 Minutos.
 * @param {string} sipnosis - Resumen general de la obra.
 * @param {string} genero - Generos de la pelicula.
 * @return String con mensaje de exito
 */
function Insertar(movie) {
    return new Promise(function (resolve, reject) {
        //con.query(`insert into movie (id_pelicula,titulo,lanzamiento, duracion, sinopsis, genero,imagen) values (?,?,?,?,?,?,load_file(?))`, [movie.id_pelicula, movie.titulo, movie.lanzamiento, movie.duracion,movie.sinopsis,movie.genero,movie.imagen], function (error, results) {
        con.query(`insert into movie (id_pelicula,titulo,lanzamiento, duracion, sinopsis, genero) values (?,?,?,?,?,?)`, [movie.id_pelicula, movie.titulo, movie.lanzamiento, movie.duracion,movie.sinopsis,movie.genero], function (error, results) {
            if (!error) {
                resolve("Se inserto un nuevo registro")
            }
            else {
                console.log("No se pudo insertar el registro: "+ error )
            }
        })
    });
}

/**
 * Funcion que nos permite modificar un registro de pelicula de acuerdo a un id especificado.
 * @param {Int} id - numero del id de la pelicula.
 * @param {string} titulo - titulo de la pelicula.
 * @param {string} lanzamiento - fecha de lanzamiento de la pelicula - Ejemplo 5 Marzo 2022.
 * @param {string} duracion - duracion de la pelicula - Ejemplo 65 Minutos.
 * @param {string} sipnosis - Resumen general de la obra.
 * @param {string} genero - Generos de la pelicula.
 * @return String con mensaje de exito
 */
function Modificar(movie) {
    return new Promise(function (resolve, reject) {
        //con.query(`UPDATE movie SET titulo = ?,lanzamiento = ?, duracion=?, sinopsis=?, genero=?, imagen=? WHERE id_pelicula = ?`, [movie.titulo, movie.lanzamiento, movie.duracion,movie.sinopsis,movie.genero,movie.imagen,movie.id_pelicula], function (error, results) {
        con.query(`UPDATE movie SET titulo = ?,lanzamiento = ?, duracion=?, sinopsis=?, genero=? WHERE id_pelicula = ?`, [movie.titulo, movie.lanzamiento, movie.duracion,movie.sinopsis,movie.genero,movie.id_pelicula], function (error, results) {
            if (error) {
                console.log("No se pudo modificar el registro, error: " + error)
            } else {
                resolve("Se modifico: " + results.affectedRows + ' Registro(s)')
            }
        })
    });
}

/**
 * Funcion que nos permite eliminar un registro de pelicula de acuerdo a un id especificado.
 * @param {Int} id - numero del id de la pelicula.
 * @return String con mensaje
 */
function Eliminar(id) {
    return new Promise(function (resolve, reject) {
        con.query(`delete from movie where id_pelicula=? `, [id], function (error, results) {
            if (results.affectedRows > 0) {
                resolve("Se elimino correctamente: " + results.affectedRows + ' Registro(s)');
            }
            else {
                console.log("Ocurrio un error, no se borro el registro" + error);
            }
        })
    });
}


exports.Buscar = Buscar;
exports.BuscarPorID = BuscarPorID;
exports.Insertar = Insertar;
exports.Modificar = Modificar;
exports.Eliminar = Eliminar;