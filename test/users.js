const chai = require('chai')
const chaiHttp = require('chai-http');
const expect = chai.expect
const controller = require('../controllers/users')
chai.use(chaiHttp);

const url = 'http://localhost:3000'

describe('Login page testing', () => {
  it('Server login testing connection', (done) => {
    chai.request(url).get('/').end((err, res) => {
      expect(res).to.have.status(200)
      done()
    })
  })
  it('Server login testing connection', (done) => {
    chai.request(url).get('/').end((err, res) => {
      expect(res).to.be.html
      done()
    })
  })
})

describe('API path testing', () => {
  it('API connection', (done) => {
    chai.request(url).get('/api').end((err, res) => {
      expect(res).to.have.status(200)
      done()
    })
  })
  it('JSON response', (done) => {
    chai.request(url).get('/api').end((err, res) => {
      expect(res).to.be.json
      done()
    })
  })
  it('Get API users description URL', (done) => {
    chai.request(url).get('/api').end((err, res) => {
      expect(res.body).to.have.deep.property('users_url', 'http://localhost:3000/api/users');
      done()
    })
  })
  it('Get API blogs description URL', (done) => {
    chai.request(url).get('/api').end((err, res) => {
      expect(res.body).to.have.deep.property('blogs_url', 'http://localhost:3000/api/blogs');
      done()
    })
  })
})

describe('Users API testing', () => {
  it('Users API connection', (done) => {
    chai.request(url).get('/api/users').end((err, res) => {
      expect(res).to.have.status(200)
      done()
    })
  })
  it('Users API JSON response', (done) => {
    chai.request(url).get('/api/users').end((err, res) => {
      expect(res).to.be.json
      done()
    })
  })
  it('Get JSON data users username', (done) => {
    chai.request(url).get('/api/users').end((err, res) => {
      expect(res.body).to.have.deep.property('[0].username', 'dgana');
      done()
    })
  })
})

describe('Users SignIn testing', () => {
  it('User get token when signin', (done) => {
    chai.request(url).post('/api/users/signin').send({
      username: 'dgana',
      password: '123'
    }).end((err, res) => {

      expect(res.body.token).to.not.equal('');
      done()
    })
  })
})

/*
describe('CRUD Users', () => {
  // Add Users
  it('Insert new User', (done) => {
    chai.request(url).post('/api/users').send({
      username: 'dgana',
      password: '123'
    }).end((err, res) => {
      expect(res.body).to.have.deep.property('username', 'dgana');
      done()
    })
  })
  // Delete Users
  it('Delete users data and return deleted data with params id', (done) => {
    chai.request(url).delete('/api/users/58a1789c4da9ef2dffda925b').end((err, res) => {
      console.log(res.body);
      expect(res.body).to.have.deep.property('username', 'dgana');
      done()
    })
  })
})
*/
