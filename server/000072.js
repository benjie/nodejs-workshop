var http = require('http');
var fs = require('fs');

function listener(request, response) {
  response.end("Hello world!");
}

var server = http.createServer(listener);
server.listen(1337);
