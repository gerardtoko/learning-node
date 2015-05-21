var http = require('http');
var monfichier = require('./monfichier');

http.createServer(function (req, res) {
  var num = req.url.split('/')[1];
  console.log(monfichier);
  console.log(monfichier.calcul(num));

  res.writeHead(200, {'Content-Type': 'text/plain'});

  monfichier.calculAsync(num, function(error, value){
    res.end('Result:'+ value);
  });

}).listen(1337, '127.0.0.1');
console.log('Server running at http://127.0.0.1:1337/');
