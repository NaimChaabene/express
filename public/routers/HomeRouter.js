
const express = require("express");
const router = express.Router();
var path = require('path'),
    __parentDir = path.dirname(process.mainModule.filename);

router.get("/", function(req, res){  res.render('Home');});

module.exports = router;