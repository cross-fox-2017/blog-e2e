// const app = require('../app')
const mongoose = require('mongoose')
const Blog = require('../models/model.blogs')
let chai = require('chai')
let chaiHttp = require('chai-http')
chai.use(chaiHttp)
let should = chai.should()

/* delete all user before testing*/
describe('before testing blog, delete all data blog from database', () => {
  it(('remove all blog data'), (done) => {
    Blog.remove({}, (err) => {
      done()
    })
  })
})

/* testing all blog */
describe('Testing Blog', () => {
  /* register new user */
  it('Testing create New blog', (done) => {
    chai.request('http://localhost:3000')
      .post('/api/blogs')
      .send({
        blogid: 1,
        author: 'Alexander',
        title: 'batu tidak hanya sekedar aksesoris belaka',
        text: 'batu akik bukan lah batu biasa yang hanya di jadikan sebagai hiasan, batu memiliki energi yang tidka dapat di rasakan dengan kasat mata'
      })
      .end((err, res) => {
        res.should.have.status(200)
        res.body.blogid.should.equal(1)
        res.body.title.should.equal('batu tidak hanya sekedar aksesoris belaka')
        done()
      })
  })

  /* get one blog */
  it('Testing Get One Blog', (done) => {
    chai.request('http://localhost:3000')
      .get('/api/blogs/1')
      .end((err, res) => {
        res.should.have.status(200)
        res.body.blogid.should.equal(1)
        res.body.title.should.equal('batu tidak hanya sekedar aksesoris belaka')
        done()
      })
  })

  /* edit blog */
  it('Testing Edit Blog', (done) => {
    chai.request('http://localhost:3000')
      .put('/api/blogs')
      .send({
        blogid: 1,
        author: 'Alexander 2'
      })
      .end((err, res) => {
        // console.log(res.body)
        res.should.have.status(200)
        res.body.blogid.should.equal(1)
        res.body.author.should.equal('Alexander 2')
        done()
      })
  })

  /* delete blog */
  it('Testing Delete Blog', (done) => {
    chai.request('http://localhost:3000')
      .delete('/api/blogs')
      .send({
        blogid: 1
      })
      .end((err, res) => {
        res.should.have.status(200)
        res.body.blogid.should.equal(1)
        res.body.author.should.equal('Alexander 2')
        done()
      })
  })
})
