const Artikel = require('../models/artikel');

module.exports = {
  newArtikel: function(req, res) {
    let newArtikel = Artikel({
      title: req.body.title,
      text: req.body.text
    })
    newArtikel.save().then(function(post){
      res.send(post)
    })
  },
  getArtikel: function(req, res) {
    Artikel.find({}).then(function(post){
      res.send(post)
    })
  },
  getArtikelById: function(req, res) {
    Artikel.find({_id: req.params.id}).then(function(post){
      res.send(post)
    })
  },
  updateArtikel: function(req, res) {
    Artikel.findOneAndUpdate({_id: req.params.id},{
      title:req.body.title,
      text:req.body.text,
      updatedAt: new Date()
    },{new:true}).then(function(post) {
      res.send(post)
    })
  },
  deleteArtikel: function(req, res) {
    Artikel.findOneAndRemove({_id: req.params.id}).then(function(post) {
      res.send(`Artikel with id ${req.params.id} has been deleted`)
    })
  }
}
