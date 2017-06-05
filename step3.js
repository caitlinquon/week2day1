var https = require('https');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step1.html'
};

function getAndPrintHTML(options) {
  var buffer = "";
  https.get(options, function (response) {
    response.setEncoding('utf8');
    response.on('data', data => buffer += data);
    response.on('end', () => console.log(buffer));
  });
}

getAndPrintHTML(requestOptions);

