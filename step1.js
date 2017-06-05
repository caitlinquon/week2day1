
var https = require('https');

    var requestOptions = {
        host: 'syntantris.github.io',
        path: '/http-examples/step1.html'
    };

function getAndPrintHTMLChunks() {

https.get(requestOptions, function (response) {

    response.setEncoding('utf8');
    response.on('data', function(data){
        console.log('Chunk:' + data + '\n')
    });
});
}

getAndPrintHTMLChunks();