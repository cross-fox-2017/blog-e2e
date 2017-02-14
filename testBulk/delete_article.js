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
      .wait('button#delete-1')
      .click('button#delete-1')
      .wait(1000)
      .click('#modal1 button#confirm_delete')
      .wait(2000)
      .evaluate(function () {
        const title = document.querySelector('#title-1')
        const content = document.querySelector('#content-1')
        if (title == null && content == null) {
          return 'Deleted'
        }else {
          return { title, content}
        }
      })
      .end()
      .then(function (result) {
        console.log('its result! ', result)
        result.should.equal('Deleted')
        done()
      })
  })
})
