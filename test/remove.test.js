const chai = require('chai');
const expect = chai.expect
const Nightmare = require('Nightmare')
var nightmare = Nightmare({ show: true });

describe('test crud blog engine', function() {
  it('delete one article from board', function(done) {
    this.timeout(30000)
    nightmare
      .goto('http://localhost:59720/main.html')
      .wait('button.destroy')
      .click('button.destroy')
      .wait(1000)
      .click('div#approve-delete')
      .wait(1000)
      .evaluate(function(){
        return document.querySelector('td.title')
      })
      .end()
      .then(function(result) {
        expect(result).to.be.null
        done();
      })
  });
});
