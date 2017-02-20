const chai = require('chai');
const should = chai.should();
const chaiArrays = require('chai-arrays');
const chaiHttp = require('chai-http');
const models = require('../../server/models/artikel');

chai.use(chaiArrays);
chai.use(chaiHttp);

let paramsId = ""

describe('Testing Artikel', function () {
  it('should return Schema', function () {
    models.should.be.ok
  })
  it('should return title of new post', function (done) {
    chai.request('http://localhost:3000')
    .post('/artikel')
    .send({"title": "Ini Title", "text": "Ini isi"})
    .end(function(err,res){
      res.body.title.should.equal("Ini Title")
      paramsId = res.body._id
      done()
    })
  })
  it('should return artikel id with params id', function (done) {
    chai.request('http://localhost:3000')
    .get(`/artikel/${paramsId}`)
    .end(function(err,res){
      res.body._id.should.equal(`${paramsId}`)
      done()
    })
  })
  it('should return artikel title with edited title', function (done) {
    chai.request('http://localhost:3000')
    .put(`/artikel/${paramsId}`)
    .send({"title":'updated title'})
    .end(function(err,res){
      res.body.title.should.equal("updated title")
      done()
    })
  })
  it('should return message deleted', function (done) {
    chai.request('http://localhost:3000')
    .delete(`/artikel/${paramsId}`)
    .end(function(err,res){
      res.body.should.be.an('object')
      done()
    })
  })
})
