var submodule = require('./submodule');
var name = 'Simple Module';
var printName = function(){
    return 'I\'m Simple Module..' + submodule;
}

module.exports.name = name;
module.exports.printName = printName;