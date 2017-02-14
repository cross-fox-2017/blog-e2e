const Nightmare = require('nightmare')
const should = require('chai').should()

describe('test new article',function(){
  this.timeout(50000)
  it('should return the right title of the article',function(done){
    var nightmare = Nightmare({show: true})
    nightmare
    .goto('http://127.0.0.1:8080/article.html')
    .wait('[name=title]')
    .click('[name=title]')
    .type('[name=title]','ayam bawang')
    .click('[name=story]')
    .type('[name=story]','masukkan ayamnya goreng dengan bawangnya...nah hidupin apinya tunggu 1 jam jadilah ayam bawang')
    .click('[name=newpost]')
    .wait('[name=idpost]')
    .evaluate(function(){
      return document.querySelector('span.card-title').innerHTML
    })
    .end()
    .then(function(result){
      result.should.be.equal('ayam bawang');
      done()
    })
  })
})
