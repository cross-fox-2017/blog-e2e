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
    .type('#judul','yomaswn')
    .click('button[type=submit]')
    .wait(1000)
    .evaluate(function(){
      return document.querySelector('.card-title').innerHTML
    })
    .end()
    .then(function(result) {
      result.should.be.equal('yomaswn')
      done()
    })
  })


})
