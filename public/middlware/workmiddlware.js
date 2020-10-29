
const express = require('express');
const app = express();




module.exports=function(req, res, next){
    let day=new Date().getDay();
    let hour=new Date().getHours();
if (((day>0) && (day<6)) && ((hour>8) && (hour<18)))    {next();}
else{app.get(res.send("wrongHour"));}
 }
 