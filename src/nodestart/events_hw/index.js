var events = require('events');
var http = require('http');
var curl = require('curl');

var app = new http.createServer(start).listen(10101);
var serverEvent = new events.EventEmitter();
var resCode = 200;
var allowedMethods = ['GET', 'POST', 'PUT', 'DELETE'];

function start(req, res) {
    res.writeHead(resCode, {'Content-type': 'text/html'});
    serverEvent.emit('connection');
    serverEvent.emit('request', req);
    if (req.url == '/stop') {
        console.log('request: stop');
        app.close();
        process.exit(-1);
        res.end('disconnected..' + '<br />');
    }
    else if (req.url == '/about') {
        console.log('request: about');
        console.log('url: ' + req.url);
        console.log('method: ' + req.method);
        res.end('disconnected..' + '<br />');
   }
    else if (req.url == '/currency') {
        var currensy = curl.getJSON('https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=3', function (err, response, data) {
            console.log('err: ' + err);
            //console.log('response: ' + response);
            //console.log('body: ' + data);
            //console.log(res);
            for (var i = 0; i < data.length; i++) {
                for (var k in data[i]) {
                    res.write(k + ' -> ' + data[i][k] + '<br>');
                }
            }
            res.end('disconnected..' + '<br />');
        })

        console.log('currency:' + currensy);
    }
    // res.write('request logging.. ' + '<br />');
    //
    // if (allowedMethods.indexOf(req.method) > -1) {
    //     serverEvent.emit('onAllowed', req, res);
    // }
    // else {
    //     serverEvent.emit('onElse', req, res);
    // }
    //res.end('disconnected..' + '<br />');

}

function logRequest(req) {
    console.log('url: ' + req.url);
    console.log('method: ' + req.method);
    resCode = 200;
    console.log('response http code: ' + resCode);
}

function onAllowed(req, res) {
    res.write('Method: ' + req.method + '<br />');
    res.write('Query String: ' + req.url + '<br />');

}

function onElse(req, res) {
    res.write('Method "' + req.method + '" is not allowed.<br />');
}

serverEvent.on('listening', function () {
    console.log('Listening...');
});
serverEvent.on('connection', function () {
    console.log('Conneting...');
});
serverEvent.on('request', logRequest);
serverEvent.on('onAllowed', onAllowed);
serverEvent.on('onElse', onElse);
serverEvent.on('about', function () {
    res.write('Query String: ' + req.url + '<br />');
});
serverEvent.on('stop', function () {
    app.close();
});
serverEvent.emit('listening');