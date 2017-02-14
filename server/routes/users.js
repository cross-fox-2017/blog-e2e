var express = require('express');
var router = express.Router();
const controllers = require('../controllers/users');

/* GET home page. */
router.post('/register', controllers.register);

router.post('/login', controllers.login);

router.delete('/delete/:username', controllers.delete);

module.exports = router;
