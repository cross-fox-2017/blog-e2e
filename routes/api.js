const express = require('express')
const router = express.Router()
const userController = require('../controllers/users')
const blogController = require('../controllers/blogs')

// User Routes
router.get('/', userController.path)
router.post('/users', userController.addUsers)
router.get('/users', userController.getAllUsers)
router.delete('/users/:id', userController.deleteUser)
router.post('/users/signin', userController.signIn)

// Blog Routes
router.post('/blogs', blogController.addBlog)
router.get('/blogs', blogController.getAllBlogs)
router.delete('/blogs/:id', blogController.deleteBlog)
router.put('/blogs/:id', blogController.updateBlog)

module.exports = router
