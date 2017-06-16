var User = {
    getName: function (argument) {
        console.log(argument);
        return this;
    },
    getCode: function (argument) {
        console.log(argument);
        return this;
    },
    addr: 'O. Polya, 100',
    Address: {
        getAddress: function () {
            console.log(User['addr']);
            console.log('getAddress');
        }
    }
};
User.getName('name').getCode('code').getName('Name')['Address'].getAddress();
//['Address'].getAddress().getName('Name after addr')

var A = {
    name: 'val',
    F: {
        getName: function () {
            console.log(this);
        }
    }
};
A['F'].getName();