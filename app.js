// require and instantiate express
var express = require('express');
var app = express();
var path = require('path');
app.use(express.static(path.join(__dirname,'public')));
app.get('/', function(req, res){
  res.sendfile(path.join(__dirname,'/views/index.html'));
  // route to serve up the homepage (index.html)
});

app.post('/api/shorten', function(req, res){
  // route to create and return a shortened URL given a long URL
});

app.get('/:encoded_id', function(req, res){
  // route to redirect the visitor to their original URL given the short URL
});

var server = app.listen(3000, function(){
  console.log('Server listening on port 3000');
});
