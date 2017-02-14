var chai = require('chai')
var should = chai.should()
var chaiHttp = require('chai-http');
var jwt = require('jsonwebtoken')

chai.use(chaiHttp);

describe('tes routing user',function(){
  it('should return user json when post /users/register',function(done){
    chai.request('http://localhost:3000').post('/users/register').send({ username: '123', password: '123' }).end(function (err, res) {
    res.body.should.have.deep.property('username','123')
    ide = res.body._id
    done()
    })
  })
  it('should return user json when post /users/login',function(done){
    chai.request('http://localhost:3000').post('/users/login').send({ username: '123', password:'123' }).end(function (err, res) {
    res.body.token.should.not.equal('')
    done()
    })
  })
  it('should return empty object when delete /users/delete/id',function(done){
    chai.request('http://localhost:3000').delete(`/users/delete/123`).end(function (err, res) {
    res.text.should.equal('user deleted')
    done()
    })
  })
})
