const mongoose = require('mongoose')
const Blogs = require('../models/blogs')

const blogController = {
  addBlog: (req, res) => {
    Blogs.create({
      title: req.body.title,
      author: req.body.author,
      description: req.body.description,
      created_at: new Date()
    }, (err, blog) => {
      if (err) throw err
      res.json(blog)
    })
  },
  getAllBlogs: (req, res) => {
    Blogs.find((err, blogs) => {
      if (err) throw err
      res.json(blogs)
    })
  },
  deleteBlog: (req, res) => {
    Blogs.findByIdAndRemove(req.params.id, (err, blog) => {
      if (err) throw err
      res.json(blog)
    })
  },
  updateBlog: (req, res) => {
    Blogs.findByIdAndUpdate(req.params.id, {
      title: req.body.title,
      author: req.body.author,
      description: req.body.description
    }, {
      new: true
    }, (err, blog) => {
      if(err) throw err
      res.json(blog)
    })
  }
}

module.exports = blogController
