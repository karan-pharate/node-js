var http = require('http'),
fs = require('fs'),
url = require('url');

//create a server
http.createServer( function (request, response) {
    var pathname =url.parse(request.url).pathname;
    console.log("Request for" +pathname+ "received.");
 
    fs.readFile(pathname.substr(1), function( err, data){
        if (err) {
            console.log(err);
            response.writeHead(404, {'content-type': 'text/html'});
        } else {
            response.writeHead(200,{'content-type': 'text/html'});
            response.write(data.toString());
        }
        response.end;
    })
}).listen(8081);
console.log("server running at http://127.0.0.1:8081/");
