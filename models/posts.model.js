const mongoose = require("mongoose");

// Post Schema
const postSchema = mongoose.Schema({
  heading: String,
  intro: String,
  readTime: String,
  date: String,
  category : String,
  tag : Array,
  content : String
});

// Post Model
const PostModel = mongoose.model("post", postSchema);

// export
module.exports = {
  PostModel,
};
