var express = require('express');
var app = express();

app.get('/', function(req, res){
  res.send('hello world');
});

app.get('/about', function (req, res) {
  res.send('about');
});

// will match request to /random.text
app.get('/random.text', function (req, res) {
  res.send('random.text');
});

app.listen(3000);