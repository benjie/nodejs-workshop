var http = require('http');
var fs = require('fs');

function listener(request, response) {
  fs.readFile(
}

var server = http.createServer(listener);
server.listen(1337);
