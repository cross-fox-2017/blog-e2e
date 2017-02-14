const chai = require('chai');
const should = chai.should();
const chaiHttp = require('chai-http');
chai.use(chaiHttp);

const models = require('../models/user');

describe('Testing Users', function () {
  it('should return Schema', function () {
    models.should.be.ok
  })
  it('should return username of new user', function (done) {
    chai.request('http://localhost:3000')
    .post('/register')
    .send({username: "timo", password: "1234"})
    .end(function(err,res){
      res.body.username.should.equal("timo")
      done()
    })
  })
  it('should return username of login user', function (done) {
    chai.request('http://localhost:3000')
    .post('/login')
    .send({username: "qblol", password: "1234"})
    .end(function(err,res){
      res.body.should.not.equal()
      done()
    })
  })
  it('should return message deleted', function (done) {
    chai.request('http://localhost:3000')
    .delete(`/delete/timo`)
    .end(function(err,res){
      res.body.should.be.an('object')
      done()
    })
  })
})
