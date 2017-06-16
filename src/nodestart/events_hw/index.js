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
    res.writeHead(resCode,{'Content-type': 'text/html'});
    res.write('request logging.. ' + '<br />');
    if (req.method == 'GET') {
        serverEvent.emit('onGet', req, res);
    }
    else {
        serverEvent.emit('onElse', req, res);
    }
    res.end('disconnected..' + '<br />');
}

function onGet(req, res) {
    res.write('Query String: ' + req.url + '<br />');
}

function onElse(req, res) {
    res.write('Method "' + req.method + '" is not allowed.<br />');
}

serverEvent.on('listening', listening);
serverEvent.on('connection', connection);
serverEvent.on('request', logRequest);
serverEvent.on('onGet', onGet);
serverEvent.on('onElse', onElse);
serverEvent.emit('listening');