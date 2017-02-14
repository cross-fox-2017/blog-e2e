const Nightmare = require('nightmare')
const should = require('chai').should()

describe('testing post blog',function(done){
  this.timeout(10000)
  it('should create article and return author of the blog',function(done){
    var nightmare = Nightmare({show:true})
    nightmare
    .goto('http://127.0.0.1:8080/')
    .wait('#postid')
    .click('#postid')
    .type('#postid',3)
    .wait('#author')
    .click('#author')
    .type('#author','nightmare')
    .wait('#title')
    .click('#title')
    .type('#title','testing nightmare')
    .wait('#description')
    .click('#description')
    .type('#description','really nightmare')
    .wait('#post')
    .click('#post')
    .wait(1000)
    .evaluate(function(){
      return document.querySelector('#data3 td.author').innerHTML
    })
    .end()
    .then(function(result){
      result.should.equal('nightmare')
      done()
    }).catch(function(err){
      console.log(err);
    })
})

})


describe('testing update blog',function(done){
  this.timeout(10000)
it('should update and return updated value of the blog',function(done){
  var nightmare = Nightmare({show:true})
  nightmare
  .goto('http://127.0.0.1:8080/')
  .wait('#update3')
  .click('#update3')
  .wait('#author')
  .click('#author')
  .type('#author','2')
  .wait('#title')
  .click('#title')
  .type('#title','2')
  .wait('#description')
  .click('#description')
  .type('#description','2')
  .wait('#updateData')
  .click('#updateData')
  .wait(1000)
  .evaluate(function(){
    return document.querySelector('#data3 td.author').innerHTML
  })
  .end()
  .then(function(result){
    result.should.equal('nightmare2')
    done()
  }).catch(function(err){
    console.log(err);
  })
})
})

describe('testing delete blog',function(done){
  this.timeout(10000)
it('should delete and return deleted value of the blog',function(done){
  var nightmare = Nightmare({show:true})
  nightmare
  .goto('http://127.0.0.1:8080/')
  .wait('#delete3')
  .click('#delete3')
  .wait(1000)
  .evaluate(function(){
    if(document.querySelector('#data3') === null) {
      return 'deleted'
    }
    else {
      return 'failed'
    }
  })
  .end()
  .then(function(result){
    console.log('should be null yeah : ', result);
    result.should.equal('deleted')
    done()
  }).catch(function(err){
    console.log(err);
  })
})

})
