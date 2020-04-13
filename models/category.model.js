const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let categorySchema = new Schema({
  type: String,
  name: String,
});

let Category = mongoose.model("Category", categorySchema, "categories");

module.exports = Category;
