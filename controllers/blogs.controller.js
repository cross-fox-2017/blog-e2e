let blog      = require('../models/blogs.model')
const jwt     = require('jsonwebtoken');

module.exports={

  getBlog : (req, res) => {
    blog.find({}, (err,data) =>{
      res.send(data)
    })
  },

  createBlog : (req, res, next) => {
    var newBlogs = blog({
      title     : req.body.title,
      author    : req.body.author,
      article   : req.body.article,
      category  : req.body.category,
      updatedAt : new Date(),
      createdAt : new Date()
    })
    newBlogs.save((err) =>{
      res.send({title : req.body.title, author    : req.body.author, article   : req.body.article,})
    })
  },

  updateBlog : (req, res) => {
    blog.findById(req.params.id).then(function (data){
      data.update({_id: req.body.title, author: req.body.author, article: req.body.article, category  : req.body.category, updatedAt: new Date()})
      res.send(data)
      })
  },

  //DELETE
  deleteBlog : function(req,res){
    blog.findOneAndRemove( {_id: req.params.id}).then(function(data) {
      res.send('Blog has been removed')
    })
  }
}
