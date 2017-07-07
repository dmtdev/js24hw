var events = require('events');
//var http = require('http');

var users = {};

//var app = http.createServer(start).listen(3000);
var allEvents = new events.EventEmitter();

allEvents.on('login', login);
allEvents.on('logout', logout);

function login(user) {
    users[user] = new Date();
}

function logout(user) {
    delete users[user];
}

allEvents.emit('login', "name1");
allEvents.emit('login', "name2");
allEvents.emit('logout','name1');
allEvents.emit('logout','name3');
console.log(users);
