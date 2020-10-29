
const express = require("express");
const router = express.Router();
var path = require('path'),
    __parentDir = path.dirname(process.mainModule.filename);

router.get("/Services", function(req, res){  res.render('OurServices');});

module.exports = router;