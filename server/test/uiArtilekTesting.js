const Nightmare = require('nightmare');
const should = require('chai').should();


describe('Testing Artikel Add', function() {
  this.timeout(10000);
    it('Testing Add Artikel', function(done) {
      var nightmare = Nightmare({
          show: true
      })
        nightmare
            .goto('http://127.0.0.1:8080/artikel.html')
            .wait("#title") //"input[type=text]" // "[name=nameTitle]" // "input[name=nameTitle]"
            .click("#title")
            .type("#title", 'Wisata Jogja')
            .click("#isi")
            .type("#isi", 'Perjalanan Menuju Jogja')
            .click("#author")
            .type("#author", "Hacktiv8")
            .click("button[onclick='postArtikel()']")
            .wait(2000)
            .evaluate(function() {
                return document.querySelector('[id=listtodo] tr td').innerHTML
            })
            .end()
            .then(function(result) {
                result.should.be.equal("Wisata Jogja")
                done()
            })

    })
})

describe('Testing Artikel Edit', function() {
  this.timeout(10000);
    it('Testing Edit Artikel', function(done) {
      var nightmare = Nightmare({
          show: true
      })
        nightmare
            .goto('http://127.0.0.1:8080/artikel.html')
            .wait('input[type="checkbox"')
            .click('input[type="checkbox"')
            .click("button[class='ui positive button']")
            .wait("#titleUpdate")
            .click("#titleUpdate")
            .type("#titleUpdate", " Update")
            .click("#isiUpdate")
            .type("#isiUpdate", ' Update')
            .click("#authorUpdate")
            .type("#authorUpdate", " Update")
            .click("div[onclick='runningUpdate()']")
            .wait(2000)
            .evaluate(function() {
                return document.querySelector('[id=listtodo] tr td').innerHTML
            })
            .end()
            .then(function(result) {
                result.should.be.equal("Wisata Jogja Update")
                done()
            })
    })
})

// it('Testing Delete Artikel', function(done) {
//
// })

// document.querySelector('input[type=text]')
