const chai = require('chai');
const http = require('chai-http');
let should = chai.should();
let expect = require('chai').expect;
const url= 'http://localhost:8082';
chai.use(http);

describe('GET All Movies', () => {
  it('Deberia regresar todas las peliculas', (done) => {
    chai.request(url)
      .get('/Movie')
      .end((err, res) => {
        chai.expect(res).to.have.status(200);
        chai.expect(res.body).to.be.an('array');
        chai.expect(res.body[0]).to.have.property('id_pelicula');
        chai.expect(res.body[0]).to.have.property('titulo');
        chai.expect(res.body[0]).to.have.property('lanzamiento');
        chai.expect(res.body[0]).to.have.property('duracion');
        chai.expect(res.body[0]).to.have.property('sinopsis');
        chai.expect(res.body[0]).to.have.property('genero');
        done();
      });
  });

  it('Deberia obtener todas las peliculas', (done) => {
      chai.request(url)
      .get('/Movie')
      .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('array');
          return done();
      });
  });
});

describe('GET a Movie by ID', () => {
  let id_pelicula = 1;
  it('Deberia obtener un registro de pelicula de acuerdo a un ID dado', (done) => {
    chai.request(url)
      .get(`/Movie/${id_pelicula}`)
      .end((err, res) => {
        chai.expect(res).to.have.status(200);
        chai.expect(res.body).to.be.an('array');
        done();
      });
  });
});

describe('POST a Movie', () => {
  it('Deberia añadir una nueva persona', (done) => {
    chai.request(url)
      .post('/NuevaPelicula')
      .send({
        id_pelicula: 5,
        titulo: "5 cm Por Segundo",
        lanzamiento: "Marzo 2007",
        duracion: "64 Minutos",
        sinopsis: "Después de graduarse..",
        genero: "Romance, Drama"
      })
      .end((err, res) => {
        expect(res).to.have.status(200);
        done();
      });
    });   
});

describe('PATCH a Movie', () => {
  it('Deberia editar el registro de una pelicula', (done) => {
  chai.request(url)
      .patch(`/DatosPelicula`)
      .send({
      id_pelicula: 5,
      titulo: "Juan",
      lanzamiento: "Marzo 2007",
      duracion: "64 Minutos",
      sinopsis: "Después de graduarse..",
      genero: "Romance, Drama"
      })
      .end((err, res) => {
      expect(res).to.have.status(200);
      done();
      });
  });
});

describe('DELETE one Movie by ID', () => {
  let id_pelicula = 5
  it('Deberia eliminar un registro de pelicula de acuerdo a un id dado', (done) => {
  chai.request(url)
      .delete(`/BorrarPelicula/${id_pelicula}`)
      .end((err, res) => {
      expect(res).to.have.status(200);
      done();
      });
  });
});