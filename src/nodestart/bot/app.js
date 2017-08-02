var express = require('express');
var bodyParser = require('body-parser');
var url = require('url');

var app = express();



app.get('/', function (req, res) {
    var parsedURL = url.parse(req.url);
    console.log();
    res.send('get');
    var s = 'http';

});

app.post('/', function (req, res) {
    res.send('post');
});

app.listen(3000, function () {
    console.log('start on 3000');
});