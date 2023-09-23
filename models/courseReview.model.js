const mongoose = require("mongoose");

// courseReview Schema
const courseReviewSchema = mongoose.Schema({
  name: String,
  rating: String,
  date: String,
  review: String,
  courseId : String
});

// Admin Model
const CourseReviewModel = mongoose.model("courseReview", courseReviewSchema);

//export
module.exports = {
    CourseReviewModel,
};
