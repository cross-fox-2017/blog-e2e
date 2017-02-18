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
    newBlogs.save((err, data) =>{
      console.log(data);
      res.send(data)
    })
  },

  updateBlog : (req, res) => {
    blog.findOneAndUpdate({_id: req.params.id}, {title: req.body.title, author: req.body.author, article: req.body.article, category  : req.body.category, updatedAt: new Date()}, {new: true}, function(err, data){
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
