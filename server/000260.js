var http = require('http');
//var fs = require('fs');
var fs = require('graceful-fs'); // npm install graceful-fs

var fileContents;

function listener(request, response) {
  response.end(fileContents);
}

function read(err, contents) {
  if (err) {
    console.error(err); // DON'T DO THIS IN PRODUCTION
    process.exit(1);
  } else {
    fileContents = contents;
    server.listen(1337);
  }
}
fs.readFile(require.main.filename, read);

var server = http.createServer(listener);
server.listen(1337);
