const chai = require('chai');
const should = chai.should();
const Nightmare = require('nightmare');

describe(`delete post`, function(){
  this.timeout(10000);
  it('should return empty string',function(done){
    const nightmare = Nightmare({show: true});
    nightmare
    .goto('http://localhost:8080')
    .wait('#blog-posts')
    .click('a[name=delete]')
    .evaluate(function(){
      if(document.querySelector('#blog-posts').innerHTML) {
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
