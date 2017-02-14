const Nightmare = require('nightmare');
const should = require('chai').should();

describe('Testing Artikel',function() {
  this.timeout(30000);
  it('Testing Add Artikel', function(done) {
    var nightmare = Nightmare({show: true})
    nightmare
    .goto('http://127.0.0.1:8080/artikel.html')
    .wait("#title")//"input[type=text]" // "[name=nameTitle]" // "input[name=nameTitle]"
    .click("#title")
    .type("#title",'Wisata Jogja')
    .click("#isi")
    .type("#isi",'Perjalanan Menuju Jogja')
    .click("#author")
    .type("#author","Hacktiv8")
    .click("button[onclick='postArtikel()']")
    .wait(2000)
    .evaluate(function(){
        console.log(document.querySelector('[id=listtodo] tr td').innerHTML)
        return document.querySelector('[id=listtodo] tr td').innerHTML
    })
    .end()
    .then(function(result) {
      result.should.be.equal("Wisata Jogja")
      done()
    })

  })
  
  it('Testing Edit Artikel', function(done) {

  })

  // it('Testing Delete Artikel', function(done) {
  //
  // })
})

// document.querySelector('input[type=text]')
