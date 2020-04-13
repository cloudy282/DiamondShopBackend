const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv").config();
const mongoose = require("mongoose");

//App
const app = express();
const mongoURL = process.env.MONGODB_URL;
const PORT = process.env.PORT || 5000;

//Config
app.use(cors());
app.use(bodyParser.json());

mongoose
  .connect(mongoURL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("DB connect successfully");
  })
  .catch((err) => {
    console.log(err);
  });
app.listen(PORT, () => console.log("Server is running on PORT : " + PORT));

//Define routes

const categoryRouter = require("./routes/categories.route");

//Use routes
app.get("/", (req, res) => {
  res.send("Wellcome!");
});

app.use("/api/categories", categoryRouter);
