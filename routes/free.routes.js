const express = require("express");
const { FreeModel } = require("../models/free.model");
const freeRoute = express.Router();

// See All free content
freeRoute.get("/", async (req, res) => {
  try {
    const data = await FreeModel.find();
    res.status(200).send(data);
  } catch (err) {
    res.status(400).send(err);
  }
});

// Add free content
freeRoute.post("/add", async (req, res) => {
  try {
    const {name} =
      req.body;
      // console.log(req.files['thumbnail'][0])

    const free = new FreeModel({
      name,
      thumbnail : req.files["thumbnail"][0].filename,
      freePdf : req.files["freePdf"][0].filename,
    });
    await free.save();
    res.status(200).send({ msg: "Free content Added Successfully!!" });
  } catch (err) {
    res.status(400).send(err);
  }
});

// Delete free content
freeRoute.delete("/delete/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await FreeModel.findByIdAndDelete({ _id: id });
    res.status(200).send({ msg: "Free content Deleted Successfully!!" });
  } catch (err) {
    res.status(400).send(err);
  }
});

// Update/Patch free content
freeRoute.patch("/patch/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await FreeModel.findByIdAndUpdate({ _id: id }, req.body);
    res.status(200).send({ msg: "Free content Updated Successfully!!" });
  } catch (err) {
    res.status(400).send({ err });
  }
});

// Update/Put free content
freeRoute.put("/put/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await FreeModel.findByIdAndUpdate({ _id: id }, req.body);
    res.status(200).send({ msg: "Free content Updated Successfully!!" });
  } catch (err) {
    res.status(400).send({ err });
  }
});
// export
module.exports = {
  freeRoute,
};
