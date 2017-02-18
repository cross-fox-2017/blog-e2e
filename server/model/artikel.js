var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var blogSchema = new Schema({
  judul   : String,
  penulis : String,
  isi     : String
});

var Blog = mongoose.model('Blog', blogSchema);
module.exports = Blog
