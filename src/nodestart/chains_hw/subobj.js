var User = {
    getName: function (argument) {
        console.log(argument);
        return this;
    },
    getCode: function (argument) {
        console.log(argument);
        return this;
    },
    addr: "O. Polya, 100",
    Address: {
        getAddress: function () {
            console.log(User['addr']);
            console.log('getAddress');
        }
    }
};
//ответ на вчерашний вопрос по цепочкам - чтобы цепочки работали - метод объекта должен возвращать ссылку на самого себя..
User.getName("name").getCode("code").getName("Name")['Address'].getAddress();
//['Address'].getAddress().getName('Name after addr')
