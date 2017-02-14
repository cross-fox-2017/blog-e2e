const Post = require('../models/post');

module.exports = {
  newPost: function(req, res) {
    let newPost = Post({
      subject: req.body.subject,
      text: req.body.text
    })
    newPost.save().then(function(post){
      res.json(post)
    })
  },
  getPost: function(req, res) {
    Post.findOne({_id:req.params.id}).then(function(post){
      res.json(post)
    })
  },
  allPosts: function(req, res) {
    Post.find().then(function(post){
      res.json(post)
    })
  },
  updatePost: function(req, res) {
    Post.findOneAndUpdate({_id: req.params.id},{
      subject:req.body.subject,
      text:req.body.text,
      updatedAt: new Date()
    },{new:true}).then(function(post) {
      res.json(post)
    })
  },
  deletePost: function(req, res) {
    Post.findOneAndRemove({_id: req.params.id}).then(function(post) {
      res.json(`Post with id ${req.params.id} has been deleted`)
    })
  }
}
