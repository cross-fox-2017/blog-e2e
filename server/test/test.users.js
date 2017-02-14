// const app = require('../app')
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/blogtdd')
const User = require('../models/model.users')
let chai = require('chai')
let chaiHttp = require('chai-http')
chai.use(chaiHttp)
let should = chai.should()

/* delete all user before testing*/
describe('before testing user, delete all data user from database', () => {
  it(('remove all user data'), (done) => {
    User.remove({}, (err) => {
      done()
    })
  })
})

/* testing all user */
describe('Testing User', () => {
  /* register new user */
  it('Testing Register New User', (done) => {
    chai.request('http://localhost:3000')
      .post('/api/users')
      .send({
        userid: 3,
        username: 'mil',
        password: 'mil'
      })
      .end((err, res) => {
        res.should.have.status(200)
        res.body.userid.should.equal(3)
        res.body.username.should.equal('mil')
        done()
      })
  })

  /* login */
  it('Tesing user login', (done) => {
    chai.request('http://localhost:3000')
      .post('/api/users/login')
      .send({
        username: 'mil',
        password: 'mil'
      })
      .end((err, res) => {
        res.should.have.status(200)
        res.body.token.should.to.exist
        done()
      })
  })

  /* get one user */
  it('Testing Get One User', (done) => {
    chai.request('http://localhost:3000')
      .get('/api/users/3')
      .end((err, res) => {
        res.should.have.status(200)
        res.body.userid.should.equal(3)
        res.body.username.should.equal('mil')
        done()
      })
  })

  /* edit user */
  it('Testing Edit User', (done) => {
    chai.request('http://localhost:3000')
      .put('/api/users')
      .send({
        userid: 3,
        username: 'toni'
      })
      .end((err, res) => {
        res.should.have.status(200)
        res.body.userid.should.equal(3)
        res.body.username.should.equal('toni')
        done()
      })
  })

  /* delete user */
  it('Testing Delete User', (done) => {
    chai.request('http://localhost:3000')
      .delete('/api/users')
      .send({
        userid: 3
      })
      .end((err, res) => {
        res.should.have.status(200)
        res.body.userid.should.equal(3)
        res.body.username.should.equal('toni')
        done()
      })
  })
})
