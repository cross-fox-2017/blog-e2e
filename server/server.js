const express = require('express')
const app = express()
const router = express.Router()
const cors = require('cors')
const bodyParser = require('body-parser');
var user = require('./routes/users.js');
var article = require('./routes/articles.js');
var mongoose = require('mongoose');
//mongoose connection to mongodb
mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost/article');



app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/users',user)
app.use('/articles',article)
app.listen(3000)

module.exports = app;
