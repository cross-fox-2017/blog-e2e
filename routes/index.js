var express = require('express')
var router = express.Router()
const articleController = require('../controllers/articles')
const userController = require('../controllers/users')
const sessionVerify = require('../helpers/auth.js')

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('pages/main')
})

router.get('/home', function (req, res, next) {
  res.render('pages/home')
})

router.get('/register', function (req, res, next) {
  res.render('pages/register')
})

router.get('/logout', function (req, res, next) {
  req.session.destroy()
  res.redirect('/')
})

router.get('/create', function (req, res, next) {
  res.render('pages/create')
})

router.get('/update/:id', function (req, res, next) {
  res.render('pages/update', {id: req.params.id})
})

router.get('/api', function (req, res, next) {
  res.send({
    endpoints: [
      '/api/articles',
      '/api/articles/:id'
    ]
  })
})

router.get('/api/articles', articleController.getArticles)

router.post('/api/articles', articleController.createArticle)

router.post('/api/articles/:id', articleController.updateArticle)

router.delete('/api/articles/:id', articleController.deleteArticle)

router.get('/auth', function (req, res, next) {
  res.send({
    endpoints: [
      '/auth/register',
      '/auth/login',
      '/auth/users',
      '/auth/users/:id'
    ]
  })
})

router.post('/auth/register', userController.createUser)

router.post('/auth/login', userController.verifyUser)

// router.get('/auth/users', userController.getUsers)
//
// router.put('/auth/users/:id', userController.updateUser)
//
// router.delete('/auth/users/:id', userController.deleteUser)

module.exports = router
