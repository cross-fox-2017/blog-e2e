const Nightmare = require('nightmare')
const should = require('chai').should()

describe('test new article',function(){
  this.timeout(50000)
  it('should return the right title of the article',function(done){
    var nightmare = Nightmare({show: true})
    nightmare
    .goto('http://127.0.0.1:8080/article.html')
    .wait('[name=delete]')
    .click('[name=delete]')
    .wait(2000)
    .wait('#yesdelete')
    .click('#yesdelete')
    .wait(2000)
    .evaluate(function(){
      return document.querySelector('#titleDelete').innerHTML
    })
    .end()
    .then(function(result){
      result.should.be.equal('Delete Success');
      done()
    })
  })
})
