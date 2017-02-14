const User = require('../models/user');
const jwt = require('jsonwebtoken');

module.exports = {
  register: function(req, res) {
    let newUser = User({
      username: req.body.username,
      password: req.body.password
    })
    newUser.save().then(function(data){
      res.send(data)
    })
  },
  login: function(req, res) {
    User.findOne({username:req.body.username}).then(function(data){
      let token = jwt.sign({username:data.username},'rahasia')
      console.log(token);
      !data ? res.send(`NO DATA`) :
      data.password != req.body.password ? res.send('WRONG PASS') :
      res.send(token)
    })
  },
  delete: function(req,res) {
    User.findOneAndRemove({username: req.params.username}).then(function(data) {
      res.send(data)
    })
  }
}
