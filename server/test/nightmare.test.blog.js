const Nightmare = require('nightmare')
const should = require('chai').should()

describe('create new blog', function (done) {
  this.timeout(100000)
  it('should return title of the blog', function (done) {
    var nightmare = Nightmare({show: true})
    nightmare
      .goto('http://127.0.0.1:8080/blog.html')
      .click('nav a.waves-effect')
      .click('#create-blog-title')
      .type('#create-blog-title', 'Batu Super')
      .click('#create-author-name')
      .type('#create-author-name', 'Syanmil')
      .click('#create-text-blog')
      .type('#create-text-blog', 'Batu bukan hanya sebagai acc biasa, batu memiliki energi..')
      .click('#modal1 a')
      .evaluate(function () {
        // return document.querySelector('#data5 td.author').innerHTML
        return document.querySelector('#blog-list div div div span').innerHTML
      })
      .end()
      .then(function (result) {
        result.should.to.equal('Batu Super')
        done()
      }).catch(function (err) {
      console.log(err)
    })
  })
})

describe('delete a blog', function (done) {
  this.timeout(100000)
  it('blog will not found', function (done) {
    var nightmare = Nightmare({show: true})
    nightmare
      .goto('http://127.0.0.1:8080/blog.html')
      .click('#blog-list .delete-blog')
      .evaluate(function () {
        // return document.querySelector('#data5 td.author').innerHTML
        return document.querySelector('#blog-list div div div span').innerHTML
      })
      .end()
      .then(function (result) {
        result.should.to.equal(null)
        done()
      }).catch(function (err) {
      console.log(err)
    })
  })
})
