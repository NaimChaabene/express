

const express = require('express');
const app = express();
app.set('view engine', 'ejs');
const middlware = require('./public/middlware/workmiddlware.js');
router = express.Router();

const port = 4000;



app.use(express.static('public'));

app.use('/', middlware);


app.get('/', require('./public/routers/HomeRouter') );
app.get('/ContactUs', require('./public/routers/contactRouter') );
app.get('/Services', require('./public/routers/ServicesRouter'));





app.listen(port, function() {
    console.log('The server is running, ' +
        ' please, open your browser at http://localhost:%s', 
        port);
  });