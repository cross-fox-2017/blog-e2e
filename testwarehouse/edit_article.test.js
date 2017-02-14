const Nightmare = require('nightmare')
const should = require('chai').should()

describe('test new article',function(){
  this.timeout(50000)
  it('should return the right title of the article',function(done){
    var nightmare = Nightmare({show: true})
    nightmare
    .goto('http://127.0.0.1:8080/article.html')
    .wait('[name=update]')
    .click('[name=update]')
    .wait('#titleUpdate')
    .click('#titleUpdate')
    .type('#titleUpdate',' enak')
    .click('#storyUpdate')
    .type('#storyUpdate',' .siap disajikan')
    .click('#updateblog')
    .wait(2000)
    .evaluate(function(){
      return document.querySelector('span.card-title').innerHTML
    })
    .end()
    .then(function(result){
      result.should.be.equal('ayam bawang enak');
      done()
    })
  })
})
