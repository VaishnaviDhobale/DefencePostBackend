const mongoose = require("mongoose");

// Post Schema
const freeSchema = mongoose.Schema({
  thumbnail: String,
  name: String,
  freePdf: String,
});

// Post Model
const FreeModel = mongoose.model("free", freeSchema);

// export
module.exports = {
    FreeModel,
};
