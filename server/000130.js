var http = require('http');
var fs = require('fs');

function listener(request, response) {
  function send(err, contents) {
    if (err) {
      console.error(err); // DON'T DO THIS IN PRODUCTION
    } else {

    }
  }
  fs.readFile(require.main.filename, send);
}

var server = http.createServer(listener);
server.listen(1337);
