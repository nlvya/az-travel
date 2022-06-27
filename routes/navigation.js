const express = require("express");
const navigation = express.Router();
//authentication middleware
// const { ensureAuthenticated } = require("../middleware/auth.js");

//home page
navigation.get("/", (req, res) => {
  res.render("pages/index");
});
module.exports = navigation;
