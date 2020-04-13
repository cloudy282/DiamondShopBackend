const express = require("express");
const router = express.Router();

const categoryService = require("../services/categories.service");

router.get("/", categoryService.findAllCategories);

module.exports = router;
