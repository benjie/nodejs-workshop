var http = require('http');

function listener(request, response) {
  response.end("Hello world!");
}

var server = http.createServer(listener);
