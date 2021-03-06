const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const AuthorSchema = new Schema(
  {
    name: String,
    age: Number
  },
  { timestamps: true }
);

module.exports = Author = mongoose.model("Author", AuthorSchema);
