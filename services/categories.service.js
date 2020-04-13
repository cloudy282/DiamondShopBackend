let Category = require("../models/category.model");

let findAllCategories = (req, res) => {
  Category.find().then((data) => {
    res.send(data);
  });
};

module.exports = { findAllCategories };
