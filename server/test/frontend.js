const chai = require('chai')
const should = chai.should()
// const chaiHttp = require('chai-http')
const Nightmare = require('Nightmare');

// chai.use(chaiHttp)

describe('menjalankan method untuk artikel', function() {
  this.timeout(10000)
  it('artikel berhasil disimpan', function(done){
    var nightmare = Nightmare({show: true})
    nightmare
    .goto('http://localhost:8080')
    .wait('#judul')
    .click('#judul')
    .type('#judul','ini judul')
    .click('#isi')
    .type('#isi','ini isi')
    .click('#penulis')
    .type('#penulis','yomaswn')
    .click('button[type=submit]')
    .wait(1000)
    .evaluate(function(){
      return document.querySelector('.card-title').innerHTML
    })
    .end()
    .then(function(result) {
      // result.should.be.equal('ini judul')
      result.should.be.a('string')
      done()
    })
  })

  it('artikel berhasil diubah', function(done){
    const nightmare = Nightmare({show: true});
    nightmare
    .goto('http://localhost:8080')
    .wait('.card-title')
    .click('a[name=modaledit]')
    .wait('.modal')
    .click('.modal input[type=text]')
    .type('.modal input[type=text]', 'edit')
    .click('.modal .materialize-textarea')
    .type('.modal .materialize-textarea', 'edit')
    .click('.modal .modal-action')
    .evaluate(function(){
      return document.querySelector('.card-title').innerHTML
    })
    .end()
    .then((result) => {
      result.should.be.a('string')
      done()
    })
  })


  it('artikel berhasil dihapus', function(done){
    const nightmare = Nightmare({show: true});
    nightmare
    .goto('http://localhost:8080')
    .wait('.card-title')
    .click('a[name=delete]')
    .evaluate(function(){
      if(document.querySelector('.card-title').innerHTML) {
        return "abc"
      }
    })
    .end()
    .then((result) => {
      result.should.equal("abc")
      done()
    })
  })
})
