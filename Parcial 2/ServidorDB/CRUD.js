//POST
function Create(cadena){
    return cadena.toUpperCase();
}

// GET
function Read(cadena){
    return cadena.trim();
}

// PUT/PATCH
function Update(cadena){
    return cadena.length;
}

// DELETE
function Delete(cadena){
    return cadena.length;
}

exports.Create = Create;
exports.Read = Read;
exports.Update = Update;
exports.Delete = Delete;
