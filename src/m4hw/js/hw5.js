/**
 * Created by root on 31.05.2017.
 */

var callCount = 0;
var sum = 0;

function calcSum(a) {
    if (!isNaN(parseFloat(a)) && isFinite(a)) {
        var a = a;

        if (callCount > 0) {
            ++callCount;
            sum += a;
            return sum;
        }
        else {
            ++callCount;
            sum += a;
            return a;
        }
    }
    else {
        ++callCount;
        return 0;
    }
}


console.log(calcSum(10));
console.log(calcSum("sads"));
console.log(calcSum(0));
console.log(calcSum(10));
console.log(calcSum(10));
console.log("==============");

function calcSumWithClosure() {
    var callCount = 0;
    var sum = 0;
    return function (a) {
        if (!isNaN(parseFloat(a)) && isFinite(a)) {
            var a = a;

            if (callCount > 0) {
                ++callCount;
                sum += a;
                return sum;
            }
            else {
                ++callCount;
                sum += a;
                return a;
            }
        }
        else {
            ++callCount;
            return 0;
        }
    }
}

var f = calcSumWithClosure();

console.log(f(10));
console.log(f(10));
console.log(f(0));
console.log(f("asas"));
console.log(f(25));
console.log("==============");


var f = function (obj) {
    obj.nw = "new";
}

function getFunction(f) {
    var f = f;
    var obj = {"k": "v", "k1": 1};
    f(obj);
    console.log(obj);
}
getFunction(f);



