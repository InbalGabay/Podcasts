const mongoose = require("mongoose");

const audioSchema = mongoose.Schema(
  {
    title: {
      type: String,
      require: true,
      minlength: 7,
      maxlength: 20,
    },
    description: {
      type: String,
      minlength: 10,
      maxlength: 250,
    },
    createDate: {
      type: Date,
      default: new Date(),
    },
    img: {
      type: String,
      default: "require('./../assets/images/img01.jpg')",
    },
    url: {
      type: String,
    },
    duration: {
      type: Number,
    },
  }
);

module.exports = mongoose.model("audio", audioSchema);
