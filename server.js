// http://stackoverflow.com/questions/6084360/using-node-js-as-a-simple-web-server

var connect = require('connect');
// var express = require('express');
// var cors = require('cors');
// var app = express();
var serveStatic = require('serve-static');
connect().use(serveStatic(__dirname)).listen(8888, function(){
    console.log('The app is running on http://localhost:8888/');
});
 
/*app.use(cors());
 
app.get('/products/:id', function (req, res, next) {
  res.json({msg: 'This is CORS-enabled for all origins!'})
});
 
app.listen(80, function () {
  console.log('CORS-enabled web server listening on port 8081')
});*/