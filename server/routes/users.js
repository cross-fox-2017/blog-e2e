var express = require('express');
var router = express.Router();
var userController = require('../controllers/userController')

/* GET users listing. */
router.post('/register', userController.register);
router.post('/login', userController.login);
router.delete('/:id', userController.delete);

module.exports = router;
