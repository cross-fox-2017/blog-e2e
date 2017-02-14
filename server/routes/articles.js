var express = require('express');
var router = express.Router();
var articleController = require('../controllers/articleController')

/* GET users listing. */
router.get('/', articleController.read);
router.get('/:id', articleController.details);
router.post('/', articleController.create);
router.delete('/:id', articleController.delete);
router.put('/:id', articleController.update);

module.exports = router;
