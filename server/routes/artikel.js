var express = require('express');
var router = express.Router();
const Artikel = require('../controllers/artikel')

/* GET home page. */

router.post('/add',Artikel.add)

router.get('/show',Artikel.show)

router.delete('/delete',Artikel.delete)

module.exports = router;
