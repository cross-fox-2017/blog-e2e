const chai = require('chai');
const should = chai.should();
const Nightmare = require('nightmare');

describe(`Add new post`, function(){
  this.timeout(50000);
  it('should return new post',function(done){
    const nightmare = Nightmare({show: true});
    nightmare
    .goto('http://localhost:8080')
    .wait('#subject')
    .click('#subject')
    .type('#subject', 'First Blog')
    .click('#article')
    .type('#article', 'Hello World!')
    .click('#submit-button')
    .evaluate(function(){
      return document.querySelector('#blog-posts').innerHTML
    })
    .end()
    .then(function(result){
      result.should.be.a('string')
      done()
    })
  })
})
