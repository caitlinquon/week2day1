var https = require('https');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step1.html'
};

function getHTML(options, callback) {
  var buffer = "";
  https.get(options, function (response) {
    response.setEncoding('utf8');
    response.on('data', data => buffer += data);
    response.on('end', () => callback(buffer));
  });
}
function printHTML (html) {
  console.log(html);
}

getHTML(requestOptions, printHTML);
