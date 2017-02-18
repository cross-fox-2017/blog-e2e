var express    = require('express');
var router     = express.Router();
var controller = require('../controllers/users.controller.js')

router.get('/', controller.getUser)

router.post('/new', controller.createUser)

router.post('/login', controller.login)

router.put('/:username', controller.updateUser)

router.delete('/:username', controller.deleteUser)

module.exports = router;
