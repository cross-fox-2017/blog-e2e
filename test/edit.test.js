const chai = require('chai');
const expect = chai.expect
const Nightmare = require('Nightmare')
var nightmare = Nightmare({ show: true });

describe('test crud blog engine', function() {
  it('Expect edited article to be updated', function(done) {
    this.timeout(30000)
    nightmare
      .goto('http://localhost:59720/main.html')
      .wait('button.edit')
      .click('button.edit')
      .wait('textarea[name=update-form]')
      .click('textarea[name=update-form]')
      .type('textarea[name=update-form]', ' there was a young boy that dreams to conquer the world')
      .click('div#update-content')
      .wait(1000)
      .evaluate(function(){
        return document.querySelector('td.content').innerHTML
      })
      .end()
      .then(function(result) {
        expect(result).to.be.equal('Once upon a time there was a young boy that dreams to conquer the world');
        done();
      })
  });
})
