function PasaMayusculas(cadena){
    return cadena.toUpperCase();
}

function QuitarEspacios(cadena){
    return cadena.trim();
}

function RetornarLongitud(cadena){
    return cadena.length;
}


exports.PasaMayusculas = PasaMayusculas;
exports.QuitarEspacios = QuitarEspacios;
exports.RetornarLongitud = RetornarLongitud;







// const PasaMayusculas = (cadena) => {
//     return cadena.toUpperCase();
// }

// const QuitarEspacios = (cadena) => {
//     return cadena.replace(" ", "");
// }

// const RetornarLongitud = (cadena) => {
//     return cadena.length();
// }
