var mongoose = require('mongoose');
var Schema = mongoose.Schema;


// create a schema
var articleSchema = new Schema({
  userid: {type:Schema.Types.ObjectId,ref:'User'},
  title:String,
  story: String
});

// the schema is useless so far
// we need to create a model using it
var Article = mongoose.model('Article', articleSchema);

// make this available to our users in our Node applications
module.exports = Article;
