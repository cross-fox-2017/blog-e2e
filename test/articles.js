const chai = require('chai')
const should = chai.should()
const expect = chai.expect
const chaiArrays = require('chai-arrays')
const chaiHTTP = require('chai-http')
chai.use(chaiArrays)
chai.use(chaiHTTP)

const url = 'http://localhost:3000'

describe('Testing article CRUD', function () {
  let createdId
  let dummy = ['something', 'anything']

  before(function () {
    // drop collection
  })

  it('should show home details', function (done) {
    chai.request(url)
      .get('/')
      .end(function (err, res) {
        res.should.have.status(200)
        res.body.message.should.equal('You are in home')
        done()
      })
  })

  it('should show api details', function (done) {
    chai.request(url)
      .get('/api')
      .end(function (err, res) {
        res.should.have.status(200)
        res.body.endpoints.should.equalTo([
          '/api/articles',
          '/api/articles/:id'
        ])
        done()
      })
  })

  it('should be able to post new article', function (done) {
    chai.request(url)
      .post('/api/articles')
      .send({
        title: dummy[0],
        content: dummy[0]
      })
      .end(function (err, res) {
        createdId = res.body._id
        res.body.title.should.equal(dummy[0])
        res.should.have.status(200)
        done()
      })
  })

  it('should get all articles', function (done) {
    chai.request(url)
      .get('/api/articles')
      .end(function (err, res) {
        res.body[0].title.should.equal(dummy[0])
        res.should.have.status(200)
        done()
      })
  })

  it('should be able to update article', function (done) {
    chai.request(url)
      .put(`/api/articles/${createdId}`)
      .send({
        title: dummy[1],
        content: dummy[1]
      })
      .end(function (err, res) {
        res.body.title.should.equal(dummy[1])
        res.should.have.status(200)
        done()
      })
  })

  it('should be able to delete article', function (done) {
    chai.request(url)
      .delete(`/api/articles/${createdId}`)
      .end(function (err, res) {
        res.body.should.have.deep.property('m')
        res.should.have.status(200)
        done()
      })
  })
})
