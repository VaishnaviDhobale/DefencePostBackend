const express = require("express");
const { CourseReviewModel } = require("../models/courseReview.model");
const courseReviewRoute = express.Router();

// See All posts
courseReviewRoute.get("/", async (req, res) => {
  try {
    const data = await CourseReviewModel.find();
  // console.log(data)

    res.status(200).send(data);
  } catch (err) {
    res.status(400).send(err);
  }
});

// See single posts
courseReviewRoute.get("/:id", async(req,res)=>{
  const {id} = req.params;
  const authorId = id;
  try{
      const data = await CourseReviewModel.findById(authorId);
      res.status(200).send(data)
  }catch(err){
      res.status(400).send({err});
  }
});


// Add post
courseReviewRoute.post("/add", async (req, res) => {
  try {
    const { name,rating,date,review,courseId } =
      req.body;
    const reviewData = new CourseReviewModel({
      name,
      rating,
      review,
      date,
      courseId,
    });
    await reviewData.save();
    res.status(200).send({ msg: "Review Added Successfully!!" });
  } catch (err) {
    res.status(400).send(err);
  }
});

// Delete post
courseReviewRoute.delete("/delete/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await CourseReviewModel.findByIdAndDelete({ _id: id });
    res.status(200).send({ msg: "Post Deleted Successfully!!" });
  } catch (err) {
    res.status(400).send(err);
  }
});

// Update/Patch Product
courseReviewRoute.patch("/patch/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await CourseReviewModel.findByIdAndUpdate({ _id: id }, req.body);
    res.status(200).send({ msg: "Post Updated Successfully!!" });
  } catch (err) {
    res.status(400).send({ err });
  }
});

// Update/Put Product
courseReviewRoute.put("/put/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await CourseReviewModel.findByIdAndUpdate({ _id: id }, req.body);
    res.status(200).send({ msg: "Post Updated Successfully!!" });
  } catch (err) {
    res.status(400).send({ err });
  }
});
// export
module.exports = {
    courseReviewRoute,
};
