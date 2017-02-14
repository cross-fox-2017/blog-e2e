const Blog = require('../model/blog');

module.exports = {
/* show all blog post */
  getAllPost : function(req, res, next) {
    Blog.find({},function(err,post){
      if(err)throw err;
      res.send(post)
    })
  },
/* insert new book */
  createNewPost : function(req, res, next) {
    var newBlog = new Blog({
      postID:req.body.postID,
      author: req.body.author,
      title: req.body.title,
      body: req.body.body
    })
    newBlog.save(function(err,data){
      if(err)throw err;
      res.send(data)
    })
  },
/* deleted book from database */
  deletePost: function(req, res, next) {
    var input_postID = req.body.postID
    Blog.findOneAndRemove({ postID: input_postID }, function(err,data) {
    if (err) throw err;
    res.send(data)
    });
  },
/* update data book */
  updatePost: function(req, res, next) {
    Blog.findOneAndUpdate({ postID: req.body.postID }, { author: req.body.author, title: req.body.title, body: req.body.body},{new:true},
      function(err, data) {
    if (err) throw err;
    res.send(data)
  })
  }
}
