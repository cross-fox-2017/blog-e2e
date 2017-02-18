var Nightmare = require('nightmare');
// var nightmare = Nightmare({ show: true });
const should = require('chai').should();


describe('test create blog : ', function(done) {
  this.timeout(20000)
  it('should create new blog', function(done) {
    var nightmare = Nightmare({ show: true });
    nightmare
    .goto('http://127.0.0.1:8080/index.html')
    .wait('#title-input')
    .click('#title-input')
    .type('#title-input', "Test")
    .click('#author-input')
    .type('#author-input', "Raditya")
    .click('#article-input')
    .type('#article-input', "Lorem.")
    .click('#category-input')
    .type('#category-input', "testing")
    .click('#submit-new-blog')
    .wait('[id=posted] div div h4 b')
    .evaluate(function() {
      return document.querySelector("[id=posted] div div h4 b").innerHTML
    })
    .end()
    .then(function(result) {
      // console.log(`document.querySelector("[id=posted] div div h4 b").innerHTML`);
      result.should.be.equal('Test')
      done()
    })
    .catch(function (error) {
      console.log(error);
    })
  });
})

describe('test update blog : ', function(done) {
  this.timeout(20000)
  it('should update blog', function(done) {
    var nightmare = Nightmare({ show: true });
    nightmare
    .goto('http://127.0.0.1:8080/index.html')
    .click('[id=posted] div div a')
    .click('#edit-title')
    .type('#edit-title', "[UPDATED] ")
    .click('#edit-author')
    .type('#edit-author', "[UPDATED] ")
    .click('#edit-article')
    .type('#edit-article', "[UPDATED] ")
    .click('#edit-category')
    .type('#edit-category', "[UPDATED] ")
    .click('#submit-update')
    .evaluate(function() {
      return document.querySelector("[id=edit-title]").value
    })
    .end()
    .then(function(result) {
      result.should.equal('[UPDATED] Test')
      done()
    })
    .catch(function (error) {
      console.log(error);
    })
  });
})
