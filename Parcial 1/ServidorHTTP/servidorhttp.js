let http = require('http');

let servidor = http.createServer(function (req,res){
    res.write('Servidor http contestanto! - 19100197')
    res.end();
})

servidor.listen(8081,()=>{ console.log('Servidor http listo')});
