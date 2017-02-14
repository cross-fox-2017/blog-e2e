const chai = require('chai');
const expect = chai.expect
const Nightmare = require('Nightmare')
var nightmare = Nightmare({ show: true });

describe('test crud blog engine', function() {
  it('create new article and expect new article posted on board', function(done) {
    this.timeout(30000)
    nightmare
      .goto('http://localhost:59720/main.html')
      .wait('input[name=article-title]')
      .click('input[name=article-title]')
      .type('input[name=article-title]', 'The Story of Small Human')
      .click('input[name=article-author]')
      .type('input[name=article-author]', 'Me and Mu')
      .click('textarea[name=article-content]')
      .type('textarea[name=article-content]', 'Once upon a time .............')
      .click('button#saved')
      .wait(1000)
      .evaluate(function(){
        return document.querySelector('td.title').last().innerHTML
      })
      .end()
      .then(function(result) {
        expect(result).to.be.equal('The Story of Small Human');
        done();
      })
  });
});
