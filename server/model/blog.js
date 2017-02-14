var mongoose = require('mongoose')
var Schema = mongoose.Schema

var BlogPostSchema = new Schema({
    postID    : Number,
    author    : String,
    title     : String,
    body      : String
});

var Blog = mongoose.model('Blog', BlogPostSchema);
module.exports = Blog;
