const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({
  username: {type:Schema.Types.ObjectId, ref:'Users'},
  subject: String,
  text: String
},{
  timestamps: true
})

const Post = mongoose.model('Posts', postSchema);
module.exports = Post;
