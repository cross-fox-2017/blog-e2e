const chai = require('chai')
const expect = chai.expect
const Nightmare = require('Nightmare')

describe('Add new Blog', function(){
  // set timeout to 13s
  this.timeout(13000)
  it('return new blog data as expected', function(done){
    const nightmare = Nightmare({show:true})
    nightmare
    .goto('http://localhost:3000/blog.html')
    .wait('#title')
    .click('#title')
    .type('#title', 'Harry Potter')
    .click('#author')
    .type('#author', 'J.R.R. Tolkien')
    .click('#description')
    .type('#description', 'Harry Potter The Goblet of Fire')
    .click('#submit_blog_add')
    .wait(3000)
    .evaluate(function(){
      return document.querySelector('td.title').innerHTML
    })
    .end()
    .then(function(result){
      console.log('ini res', result);
      expect(result).to.equal('Harry Potter')
      done()
    })
  })
})

describe('update Blog', function(){
  // set timeout to 13s
  this.timeout(13000)
  it('return updated blog as expected', function(done){
    const nightmare = Nightmare({show:true})
    nightmare
    .goto('http://localhost:3000/blog.html')
    .wait('td button.update')
    .click('td button.update')
    .click('#title')
    .type('#title', 'Star Wars')
    .click('#author')
    .type('#author', 'George Lucas')
    .click('#description')
    .type('#description', 'Star Wars Episode:1 The Phantom Menace')
    .click('#submit_blog_update')
    .wait(3000)
    .evaluate(function(){
      return document.querySelector('td.title').innerHTML
    })
    .end()
    .then(function(result){
      console.log('ini res', result);
      expect(result).to.equal('Star Wars')
      done()
    })
  })
})

describe('Delete Blog', function(){
  // set timeout to 13s
  this.timeout(5000)
  it('return message blog deleted as expected', function(done){
    const nightmare = Nightmare({show:true})
    nightmare
    .goto('http://localhost:3000/blog.html')
    .wait('td button.delete')
    .click('td button.delete')
    .wait(1500)
    .evaluate(function(){
      return document.querySelector('#global_message .message').innerHTML
    })
    .end()
    .then(function(result){
      console.log('ini res', result);
      expect(result).to.equal('Blog Star Wars successfully deleted')
      done()
    })
  })
})
