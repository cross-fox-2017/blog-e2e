const Nightmare = require('Nightmare')
const chai = require('chai')
const should = chai.should()

describe('Create new article', function () {
  this.timeout(10000)
  it('should create a new article', function (done) {
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
      .wait('a#add-article')
      .click('a#add-article')
      .wait('[name=title_create]')
      .click('[name=title_create]')
      .type('[name=title_create]', 'About Me')
      .click('[name=content_create]')
      .type('[name=content_create]', 'Anything about me')
      .click('button#create')
      .wait(2000)
      .evaluate(function () {
        const title = document.querySelector('#title-1').innerHTML
        const content = document.querySelector('#content-1').innerHTML
        return { title, content}
      })
      .then(function (result) {
        result.title.should.equal('About Me')
        result.content.should.equal('Anything about me')
        done()
      })
  })
})
