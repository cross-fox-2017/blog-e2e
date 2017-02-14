
var express = require('express');
var router = express.Router();
var article = require('../controllers/articles.controller.js')

router.post('/create',article.create)
router.get('/show',article.show)
router.put('/update/:id',article.update)
router.delete('/delete/:id',article.delete)
module.exports = router;
