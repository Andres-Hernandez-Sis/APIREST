let chai        = require('chai');
let chaiHttp    = require('chai-http');
const expect    = require('chai').expect;

chai.use(chaiHttp);
const url= 'http://localhost:8082';

// Encapsular en test dentro de la funcion describe() Y describirmos el test    
describe('Inserta un cliente: ',()=>{ 

    it('deberia insertar un cliente', (done) => {      // En la funcion it() lo que deberia hacer
        chai.request(url)
        .post('/cliente/NuevoCliente')
        .send({ "id_cliente": 10,
                "nombre": "Juan",
                "telefono": 8672121212,
                "hora_reservacion":14
            })
        .end( function(err,res){
            expect(res).to.have.status(200); 
            expect(res.text).to.be.a("string");                                
            done();
        });
    });
    
});

describe('Obtiene empleados: ',()=>{  
    it('Deberia obtener todos los empleados', (done) => {
        chai.request(url)
        .get('/cliente')                      
        .send()                      
        .end( function(err,res){
            expect(res).to.have.status(200);                               
            expect(res).to.be.json;                               
            done();
        });
    });
});