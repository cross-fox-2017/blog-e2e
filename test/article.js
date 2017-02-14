var chai = require('chai')
var should = chai.should()
var chaiHttp = require('chai-http');
var tampung ='';
chai.use(chaiHttp);

describe('tes routing article',function(){
  it('should return article json when post /articles/create',function(done){
    chai.request('http://localhost:3000').post('/articles/create').send({title:'kisah seorang anak',story: 'anak ini adalah seorang anak yang sangat pandai' }).end(function (err, res) {
    res.body.should.have.deep.property('story','anak ini adalah seorang anak yang sangat pandai')
    tampung = res.body._id
    done()
    })
  })
  it('should return user json when get /articles/show',function(done){
    chai.request('http://localhost:3000').get('/articles/show').end(function (err, res) {
    res.body.should.have.lengthOf(1)
    done()
    })
  })
  it('should return user json when get /articles/update',function(done){
    chai.request('http://localhost:3000').put(`/articles/update/${tampung}`).send({story: 'kisah anak diberi ubat cabut lari' }).end(function (err, res) {
    res.body.should.have.deep.property('story','kisah anak diberi ubat cabut lari')
    done()
    })
  })
  it('should return empty object when delete /articles/delete/id',function(done){
    chai.request('http://localhost:3000').delete(`/articles/delete/${tampung}`).end(function (err, res) {
    res.text.should.equal('story deleted')
    done()
    })
  })
})
