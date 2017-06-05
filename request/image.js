var request = require('request');
var fs = require('fs');

request.get('https://sytantris.github.io/http-examples/future.jpg', console.log('Downloading Image!'))
       .on('error', function(err){
         throw err;
       })
       .on('response', function (response){
         console.log('Reponse Status Code: ', response.statusCode);
         console.log('Download complete!');
       })
       .pipe(fs.createWriteStream('./future.jpg'));