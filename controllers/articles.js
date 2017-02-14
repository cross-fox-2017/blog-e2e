const Articles = require('../models/articles')

module.exports = {
  createArticle: (req, res) => {
    Articles.create({
      title: req.body.title_create,
      content: req.body.content_create
    }).then(function () {
      res.redirect('/home')
    }).catch(function (err) {
      res.send(err)
    })
  },

  getArticles: (req, res) => {
    Articles.find().then(function (data) {
      res.send(data)
    }).catch(function (err) {
      res.send(err)
    })
  },

  updateArticle: (req, res) => {
    Articles.findOneAndUpdate({
      _id: req.params.id
    }, req.body, {
      new: true
    }).then(function (data) {
      res.send(data)
    }).catch(function (err) {
      res.send(err)
    })
  },

  deleteArticle: (req, res) => {
    Articles.findOneAndRemove({
      _id: req.params.id
    }).then(function (data) {
      res.send({m: `Deleted Article with ID: ${req.params.id}`})
    }).catch(function (err) {
      res.send({m: 'Error data not found'})
    })
  }
}
