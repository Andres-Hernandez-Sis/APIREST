export function PasaMayusculas(cadena){
    return cadena.toUpperCase();
}

export function QuitarEspacios(cadena){
    // return cadena.trim();
    //replace(/\s+/g, '')
    return cadena.replace(/ /g, "")
}

export function RetornarLongitud(cadena){
    return cadena.length;
}

