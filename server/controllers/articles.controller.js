var Article = require('../models/article')

module.exports ={
  create: function(req,res){
    var newArticle = Article({
      userid: req.body.userid,
      title:req.body.title,
      story: req.body.story
    })

    newArticle.save(function(err){
      if(err){
        throw err
      }
      else{
        res.json(newArticle)
      }
    })
  },
  show: function(req,res){
    Article.find({},function(err,article){
      if(article){
        res.json(article)
      }
    })
  },
  update: function(req,res){
  Article.findOne({_id:req.params.id},function(err,article){
    if(err){
      throw err
    }
    else{
      article.title = req.body.title
      article.story = req.body.story

      article.save(function(err){
        if(err){
          throw err
        }
        else{
          res.json(article)
        }
      })
    }
  })
},
  delete: function(req,res){
    Article.findOneAndRemove({_id:req.params.id}, function(err) {
        if (err) throw err;

      res.send(`story deleted`);
    });
  }
}
