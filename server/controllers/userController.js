const users = require('../models/users')
const hash = require('password-hash')
var jwt = require('jsonwebtoken');

let userController = {
  register: function(req, res){
    let data = {
      username :  req.body.username,
      password : hash.generate(req.body.password),
      email : req.body.email
    }
    let newusers = users(data)
    newusers.save(function(err){
      if(err) throw err;
      res.json(newusers)
    })
  },
  login: function(req, res){
    let username =  req.body.username
    let password = req.body.password
    users.findOne({username: username}).then(function(user){
      if(hash.verify(password, user.password)){
        var token = jwt.sign(user, 'superSecret');
        res.json({token: token})
      } else {
        res.send("username or password incorrect")
      }
    })
  },
  delete: function(req, res){
    let id = req.params.id
    users.findByIdAndRemove(id, function(err, user) {
      if (err) throw err;
      res.json(user);
    });
  },
}
module.exports = userController
