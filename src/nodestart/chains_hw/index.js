var User = {
    getName: function (argument) {
        console.log(argument);
        return this;
    },
    getCode: function (argument) {
        console.log(argument);
        return this;
    }
};
//ответ на вчерашний вопрос по цепочкам - чтобы цепочки работали - метод объекта должен возвращать ссылку на самого себя..
user.getName("name").getCode("code").getName("Name");

