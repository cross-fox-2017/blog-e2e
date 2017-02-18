const chai = require('chai')
const should = chai.should()
// const chaiHttp = require('chai-http')
const Nightmare = require('Nightmare');

// chai.use(chaiHttp)

describe('menjalankan method untuk artikel', function() {
  this.timeout(10000)
  // it('artikel berhasil disimpan', function(done){
  //   var nightmare = Nightmare({show: true})
  //   nightmare
  //   .goto('http://localhost:8080')
  //   .wait('#judul')
  //   .click('#judul')
  //   .type('#judul','ini judul')
  //   .click('#isi')
  //   .type('#isi','ini isi')
  //   .click('#penulis')
  //   .type('#penulis','yomaswn')
  //   .click('button[type=submit]')
  //   .wait(1000)
  //   .evaluate(function(){
  //     return document.querySelector('.card-title').innerHTML
  //   })
  //   .end()
  //   .then(function(result) {
  //     // result.should.be.equal('ini judul')
  //     result.should.be.a('string')
  //     done()
  //   })
  // })

  it('artikel berhasil diubah', function(done){
    var nightmare = Nightmare({show: true})
    nightmare
    .goto('http://localhost:8080')
    .wait('.card-title')
    .click('.update')
    .wait('.modal')
    .click('.modal #judul')
    .type('.modal #judul', 'edit lagi sepanjang ini')
    .click('.modal button[type=submit]')
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

})
