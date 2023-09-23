const express = require("express");
const { CourseModel } = require("../models/course.model");
const courseRoute = express.Router();


// See All Course
courseRoute.get("/", async (req, res) => {
  try {
    const data = await CourseModel.find();
    res.status(200).send(data);
  } catch (err) {
    res.status(400).send(err);
  }
});

// See single course
courseRoute.get("/:id", async(req,res)=>{
  const {id} = req.params;
  const authorId = id;
  try{
      const data = await CourseModel.findById(authorId);
      res.status(200).send(data)
  }catch(err){
      res.status(400).send({err});
  }
});

// Add course
courseRoute.post("/add", async (req, res) => {
  try {
    const { name, title, price, discount, sellPrice, description } = req.body;
    // const { name } = req.body;
    // console.log(req.files['thumbnail'][0])
    const course = new CourseModel({
      name: name,
      title: title,
      price: price,
      discount: discount,
      sellPrice: sellPrice,
      description: description,
      thumbnail : req.files['thumbnail'][0].filename,
      previewPDF: req.files["previewPDF"][0].filename,
      coursePDF: req.files["coursePDF"][0].filename,
      introVideo : req.files['introVideo'][0].filename,
    });
    await course.save();
    res.status(200).send({ msg: "Course Added Successfully!!" });
  } catch (err) {
    res.status(400).send(err);
  }
});

// Delete course
courseRoute.delete("/delete/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await CourseModel.findByIdAndDelete({ _id: id });
    res.status(200).send({ msg: "Course Deleted Successfully!!" });
  } catch (err) {
    res.status(400).send(err);
  }
});

// Update/Patch course
courseRoute.patch("/patch/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await CourseModel.findByIdAndUpdate({ _id: id }, req.body);
    res.status(200).send({ msg: "Course Updated Successfully!!" });
  } catch (err) {
    res.status(400).send({ err });
  }
});

// Update/Put course
courseRoute.put("/put/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await CourseModel.findByIdAndUpdate({ _id: id }, req.body);
    res.status(200).send({ msg: "Course Updated Successfully!!" });
  } catch (err) {
    res.status(400).send({ err });
  }
});
// export
module.exports = {
  courseRoute,
};
