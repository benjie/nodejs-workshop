var http = require('http');
var fs = require('fs');

function listener(request, response) {
  fs.readFile(require.main.filename, send);
}

var server = http.createServer(listener);
server.listen(1337);
