var express = require('express');
var router = express.Router();
const controllerArtikel = require('../controller/artikelController');
const controllerUser = require('../controller/userController');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
// Artikel Routing

router.post('/artikel', controllerArtikel.newArtikel);

router.get('/artikel', controllerArtikel.getArtikel);

router.get('/artikel/:id', controllerArtikel.getArtikelById);

router.delete('/artikel/:id', controllerArtikel.deleteArtikel);

router.put('/artikel/:id', controllerArtikel.updateArtikel);

//Login Routing

router.post('/register', controllerUser.register);

router.post('/login', controllerUser.login);

router.delete('/delete/:username', controllerUser.delete);


module.exports = router;


/* GET home page. */
