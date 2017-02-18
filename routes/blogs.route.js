var express    = require('express');
var router     = express.Router();
var controller = require('../controllers/blogs.controller.js')

router.get('/', controller.getBlog)

router.post('/new', controller.createBlog)

router.put('/:id', controller.updateBlog)

router.delete('/:id', controller.deleteBlog)

module.exports = router;
