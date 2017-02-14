const chai = require('chai');
const should = chai.should();
const Nightmare = require('nightmare');

describe(`edit post`, function(){
  this.timeout(50000);
  it('should return edited post',function(done){
    const nightmare = Nightmare({show: true});
    nightmare
    .goto('http://localhost:8080')
    .wait('#blog-posts')
    .click('a[name=modaledit]')
    .wait('.modal')
    .click('.modal input[type=text]')
    .type('.modal input[type=text]', 'edit')
    .click('.modal .materialize-textarea')
    .type('.modal .materialize-textarea', 'edit')
    .click('.modal .modal-action')
    .evaluate(function(){
      return document.querySelector('#blog-posts').innerHTML
    })
    .end()
    .then((result) => {
      result.should.be.a('string')
      done()
    })
  })
})
