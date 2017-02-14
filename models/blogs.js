const mongoose = require('mongoose')
const Schema = mongoose.Schema

const blogSchema = new Schema({
  title: String,
  author: String,
  description: String,
  created_at: Date
})

const Blogs = mongoose.model('blogs', blogSchema)

module.exports = Blogs
