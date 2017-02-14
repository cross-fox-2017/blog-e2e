const User = require('../models/model.users')
var passwordHash = require('password-hash')
var jwt = require('jsonwebtoken')

var controllerUser = {
  getAllUser: function (req, res) {
    User.find({}, function (err, data) {
      res.json(data)
    })
  },
  getOneUser: function (req, res) {
    User.findOne({ userid: req.params.id }, function (err, data) {
      res.json(data)
    })
  },
  createOneUser: function (req, res) {
    // create a new user
    var newUser = User({
      userid: req.body.userid,
      username: req.body.username,
      password: passwordHash.generate(req.body.password)
    })
    // save the user
    newUser.save(function (err, data) {
      if (err) throw err
      // send response
      res.json(data)
    })
  },
  editOneUser: function (req, res) {
    User.findOneAndUpdate({ userid: req.body.userid }, { username: req.body.username, password: req.body.password }, { new: true }, function (err, data) {
      if (err) throw err
      // we have the updated user returned to us
      res.json(data)
    })
  },
  deleteOneUser: function (req, res) {
    User.findOneAndRemove({ userid: req.body.userid }, function (err, data) {
      if (err) throw err
      // we have deleted the user
      res.json(data)
    })
  },
  login: function (req, res) {
    User.findOne({ username: req.body.username }, function (err, data) {
      // check username in database or not
      if (data) {
        // check password is true or not
        if (passwordHash.verify(req.body.password, data.password)) {
          var token = jwt.sign({
            exp: Math.floor(Date.now() / 1000) + (60 * 60),
            data: {
              username: req.body.username,
              password: req.body.password
            }
          }, 'secret')
          res.json({token: token})
        }else {
          res.json({msg: 'password salah'})
        }
      }else {
        res.json({msg: 'username tidak di temukan'})
      }
    })
  }
}

module.exports = controllerUser
