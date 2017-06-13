var http = require('http');

console.log('server started on 10101...')

var app = http.createServer(function foo(request, response) {
    response.writeHead(200, {'Content-type': 'text/html'});
    response.write('Server Node.js.<br>');
    response.write('Forever tested..<br>');
    response.write('Nodemon tested..<br>');
    response.write('add line.1111111.<br>');
    response.end('SS Script stopped.');

}).listen(10101);
