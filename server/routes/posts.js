var express = require('express');
var router = express.Router();
const controllers = require('../controllers/posts');

/* GET home page. */
router.post('/post/new', controllers.newPost);

router.get('/post/all', controllers.allPosts);

router.get('/post/:id', controllers.getPost);

router.put('/edit/post/:id', controllers.updatePost);

router.delete('/delete/post/:id', controllers.deletePost);

module.exports = router;
