let user    = require('../models/users.model')
const jwt   = require('jsonwebtoken');

module.exports={

  getUser : (req, res) => {
    user.find({}, (err,data) =>{
      res.send(data)
    })
  },

  createUser : (req, res, next) => {
    var newUsers = user({
      username  : req.body.username,
      password  : req.body.password
    })
    newUsers.save((err) =>{
      res.send('success')
    })
  },

  login : (req,res,next) => {
    var token = jwt.sign({ username: req.body.username}, 'May the force be with you');
    user.findOne({username: req.body.username, password: req.body.password}).then( (login) => {
      if (login) {
        res.send({token:token})
      }
      else {
        {msg : "not found"}
      }
  })
},

  updateUser : function(req,res){
    user.findById(req.params.id).then(function (data){
      data.update({username: req.body.username, password: hash.generate(req.body.password), updatedAt: new Date()})
      res.send(data)
      })
  },

  //DELETE
  deleteUser : function(req,res){
    user.findOneAndRemove( {username: req.params.username}).then(function(data) {
      res.send('User has been removed')
    })
  }
}
