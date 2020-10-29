
const express = require("express");
const router = express.Router();
var path = require('path'),
    __parentDir = path.dirname(process.mainModule.filename);

router.get("/ContactUs", function(req, res){  res.render('ContactUs');});

module.exports = router;