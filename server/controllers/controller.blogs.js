const Blog = require('../models/model.blogs')

var controllerBlog = {
  getAllBlog: function (req, res) {
    Blog.find({}, function (err, data) {
      res.json(data)
    })
  },
  getOneBlog: function (req, res) {
    Blog.findOne({ blogid: req.params.id }, function (err, data) {
      res.json(data)
    })
  },
  createOneBlog: function (req, res) {
    // create a new user
    var newBlog = Blog({
      blogid: req.body.blogid,
      author: req.body.author,
      title: req.body.title,
      text: req.body.text
    })
    // save the user
    newBlog.save(function (err, data) {
      if (err) throw err
      // send response
      res.json(data)
    })
  },
  editOneBlog: function (req, res) {
    // blogid: req.body.blogid
    Blog.findOneAndUpdate({ _id: req.body.id }, { author: req.body.author, title: req.body.title, text: req.body.text }, { new: true }, function (err, data) {
      if (err) throw err
      // we have the updated user returned to us
      res.json(data)
    })
  },
  deleteOneBlog: function (req, res) {
    // blogid: req.body.blogid
    Blog.findOneAndRemove({ _id: req.body.objid }, function (err, data) {
      if (err) throw err
      // we have deleted the user
      res.json(data)
    })
  }
}

module.exports = controllerBlog
