const Nightmare = require('Nightmare')
const chai = require('chai')
const should = chai.should()

describe('Edit an article', function () {
  this.timeout(10000)
  it('should edit an article', function (done) {
    let nightmare = Nightmare({show: true})
    nightmare
      .goto('http://localhost:3000/')
      .wait('[name=username]')
      .click('[name=username]')
      .type('[name=username]', 'fadly')
      .click('[name=password]')
      .type('[name=password]', '123')
      .wait('button#login')
      .click('button#login')
      .wait('a#update-1')
      .click('a#update-1')
      .wait('[name=title_update]')
      .click('[name=title_update]')
      .type('[name=title_update]', 'About Us')
      .click('[name=content_update]')
      .type('[name=content_update]', 'Anything about us')
      .click('button#update')
      .wait(2000)
      .evaluate(function () {
        const title = document.querySelector('#title-1').innerHTML
        const content = document.querySelector('#content-1').innerHTML
        return { title, content}
      })
      .end()
      .then(function (result) {
        result.title.should.equal('About Us')
        result.content.should.equal('Anything about us')
        done()
      })
  })
})
