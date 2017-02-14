const chai = require('chai')
const chaiHttp = require('chai-http');
const expect = chai.expect
const controller = require('../controllers/blogs')
chai.use(chaiHttp);

const url = 'http://localhost:3000'

describe('Blogs API testing', () => {
  it('Blogs API connection', (done) => {
    chai.request(url).get('/api/blogs').end((err, res) => {
      expect(res).to.have.status(200)
      done()
    })
  })
  it('Blogs API JSON response', (done) => {
    chai.request(url).get('/api/blogs').end((err, res) => {
      expect(res).to.be.json
      done()
    })
  })
  it('Get blogs JSON data', (done) => {
    chai.request(url).get('/api/blogs').end((err, res) => {
      expect(res.body).to.have.deep.property('[0].title', 'Bootcamp or college');
      done()
    })
  })
})

/*
describe('CRUD Blogs', () => {
  // Add Blogs
  it('Insert new Blog', (done) => {
    chai.request(url).post('/api/blogs').send({
      title: 'Bootcamp or college',
      author: 'dgana',
      description: 'Lorem ipsum dollor sit amet'
    }).end((err, res) => {
      expect(res.body).to.have.deep.property('title', 'Bootcamp or college');
      done()
    })
  })
  it('Insert second Blog', (done) => {
    chai.request(url).post('/api/blogs').send({
      title: 'Coding 15 hours per day',
      author: 'dgana',
      description: 'Lorem ipsum dollor sit amet'
    }).end((err, res) => {
      expect(res.body).to.have.deep.property('title', 'Coding 15 hours per day');
      done()
    })
  })
  // Delete Blog
  it('Delete blog and return deleted blog with params id', (done) => {
    chai.request(url).delete('/api/blogs/58a187d943457d3311ec4444').end((err, res) => {
      expect(res.body).to.have.deep.property('author', 'dgana');
      done()
    })
  })
  // Update Blog
  it('Update a blog and return updated blog with params id', (done) => {
    chai.request(url).put('/api/blogs/58a187d2062ede32f8589e1c').send({
      title: 'Coding 18 hours per day',
      author: 'dgana',
      description: 'lorem ipsum dollor sit amet'
    }).end((err, res) => {
      console.log(res.body);
      expect(res.body).to.have.deep.property('author', 'dgana');
      done()
    })
  })
})
*/
