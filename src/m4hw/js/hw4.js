//First  task:
var fitData = {
    Sunday: 1,
    Monday: 7,
    Tuesday: 4,
    Wednesday: 7,
    Thursday: 8,
    Friday: 5,
    Saturday: 1
};

var maxDistance = 0;
var distancePerWeek = 0;

for (var key in fitData) {
    if (fitData[key] > maxDistance) {
        maxDistance = fitData[key];
    }
    distancePerWeek += fitData[key];
}

console.log('Max Distance: ' + maxDistance);
console.log('Distance per week: ' + distancePerWeek);

//Second task:
var arr = [1, 4, 5, -8, 0, 23, 5, 31];
var resultArr = new Array();

for (var i = 0; i < arr.length; i++) {
    var min = Infinity;
    for (var j = 0; j < arr.length; j++) {
        if (arr[j] < min) {
            min = arr[j];
        }
    }
    resultArr.push(min);
    arr[arr.indexOf(min)] = Infinity;
    min = Infinity;
}
console.log(resultArr);

var array = [1, 4, 5, -8, 0, 23, 5, 31];
for (var i = 0; i < array.length; i++) {
    for (var j = 0; j < array.length - i - 1; j++) {
        if (array[j] > array[j + 1]) {
            var tmp = array[j];
            array[j] = array[j + 1];
            array[j + 1] = tmp;
        }
    }
}
var newArray = new Array();
for (var i = 0; i < array.length; i++) {
    newArray.push(array[i]);
}

console.log(newArray);