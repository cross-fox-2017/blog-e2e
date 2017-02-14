var mongoose = require('mongoose')
var Schema = mongoose.Schema

// create a schema
var blogSchema = new Schema({
  blogid: Number,
  author: String,
  title: String,
  text: String
}, {
  timestamps: true
})

// the schema is useless so far
// we need to create a model using it
var Blog = mongoose.model('Blog', blogSchema)

module.exports = Blog
