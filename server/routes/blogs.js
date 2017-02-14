var express = require('express')
var router = express.Router()
const controllerBlog = require('../controllers/controller.blogs')

router.get('/:id', controllerBlog.getOneBlog)
router.get('/', controllerBlog.getAllBlog)
router.post('/', controllerBlog.createOneBlog)
router.put('/', controllerBlog.editOneBlog)
router.delete('/', controllerBlog.deleteOneBlog)

module.exports = router
