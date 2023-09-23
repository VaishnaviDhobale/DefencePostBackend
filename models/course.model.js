const mongoose = require("mongoose");

// Course Schema
const courseSchema = mongoose.Schema({
  name: String,
  title: String,
  price: String,
  discount: String,
  sellPrice : String,
  description : String,
  thumbnail : String,
  previewPDF :String,
  coursePDF : String,
  introVideo :String,                                       
});

// Course Model
const CourseModel = mongoose.model("course", courseSchema);

// export
module.exports = {
    CourseModel,
};
