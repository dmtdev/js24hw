var event = require('events');
var http = require('http');

new http.createServer(start).listen(10101);
var serverEvent = new event.EventEmitter();
var resCode = 200;

function listening() {
    console.log('Listening...');
}

function connection() {
    console.log('Conneting...');
}

function logRequest(req) {
    console.log('url: ' + req.url);
    console.log('method: ' + req.method);
    resCode = 200;
    console.log('response http code: ' + resCode);
}

function start(req, res) {
    serverEvent.emit('connection');
    serverEvent.emit('request', req);
    res.writeHead(resCode);
    res.write('request logging.. ');
    res.end('disconnected..');
}

serverEvent.on('listening', listening);
serverEvent.on('connection', connection);
serverEvent.on('request', logRequest);
serverEvent.emit('listening');