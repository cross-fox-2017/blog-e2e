`use strict`
const mongoose = require('mongoose')
const Schema = mongoose.Schema

var artikelSchema = new Schema({
  title: String,
  text: String
},
  {
    timestamp: true
  })

var Artikel = mongoose.model('Artikel', artikelSchema)

module.exports = Artikel
