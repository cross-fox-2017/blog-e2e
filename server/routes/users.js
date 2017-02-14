var express = require('express')
var router = express.Router()
const controllerUser = require('../controllers/controller.users')

router.get('/:id', controllerUser.getOneUser)
router.get('/', controllerUser.getAllUser)
router.post('/', controllerUser.createOneUser)
router.put('/', controllerUser.editOneUser)
router.delete('/', controllerUser.deleteOneUser)
router.post('/login', controllerUser.login)

module.exports = router
