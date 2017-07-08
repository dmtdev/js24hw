var events = require('events');
//var http = require('http');

var users = [];

//var app = http.createServer(start).listen(3000);
var allEvents = new events.EventEmitter();

allEvents.on('login', login);
allEvents.on('logout', logout);
allEvents.on('find', findUser);
allEvents.on('users', allUsers);
allEvents.on('log', log);


function login(user) {
    var dt = new Date();
    users.push({name: user, dt: dt, action: 'login'});
    console.log('User ' + user + ' login on ' + dt.getTime());
}

function logout(user) {
    var dt = new Date();
    users.push({name: user, dt: dt, action: 'logout'});
    console.log('User ' + user + ' logout on ' + dt.getTime());
}

function findUser(userName) {
    var user = users.find(function (obj) {
        if (obj.name === userName) {
            return obj;
        }
    });
    if (typeof user === 'undefined') {
        console.log('User ' + userName + ' not found.');
    }
    else {
        console.log('Find:');
        console.log(user);
    }
}

function allUsers() {
    var usersLoggin = users.filter(function (user) {
        return user.action === 'login' ? user : false;
    });
    console.log(usersLoggin);
}

function log() {
    var dateFormat = {
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        year: 'numeric',
        month: 'numeric',
        day: 'numeric'
    };
    for(var i=0;i<users.length;i++){
        console.log('User ' + users[i].name + ' ' + users[i].action + ' on ' + users[i].dt.toLocaleString('en-US',dateFormat));
    }
}


allEvents.emit('login', "ivan");
allEvents.emit('login', "anton");
allEvents.emit('login', "olga");
allEvents.emit('login', "stas");
allEvents.emit('find', 'ivan');
allEvents.emit('find', 'Petya.A');
allEvents.emit('logout', 'ivan');
allEvents.emit('logout', 'alex');
allEvents.emit('login', "olga");
allEvents.emit('login', "stas");
allEvents.emit('login', "olga");
allEvents.emit('login', "stas");
console.log('===');
allEvents.emit('users');
console.log('===');
allEvents.emit('log');

