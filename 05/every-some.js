var arr1 = [4,4,4,4,5,6,7];
var arr2 = [3,3,3,3,1,2,1];

console.log(arr1.every(function(value) { return value > 3; }));
console.log(arr2.every(function(value) { return value > 3; }));

console.log(arr1.some(function(value) { return value > 5; }));
console.log(arr2.some(function(value) { return value < 3; }));

console.log("----------");

function every2(array, f) {
    for (var i = 0; i < array.length; i++) {
	if (!f(array[i]))
	    return false;
    }
    return true;
}

console.log(every2(arr1, function(x) { return x > 3; }));
console.log(every2(arr1, function(x) { return x > 4; }));

console.log("----------");

function some2(array, f) {
    for (var i = 0; i < array.length; i++) {
	if (f(array[i]))
	    return true;
    }
    return false;
}

console.log(some2(arr1, function(x) { return x == 5; }));
console.log(some2(arr1, function(x) { return x == 8; }));

console.log("----------");

console.log(every2([NaN, NaN, NaN], isNaN));
// → true
console.log(every2([NaN, NaN, 4], isNaN));
// → false
console.log(some2([NaN, 3, 4], isNaN));
// → true
console.log(some2([2, 3, 4], isNaN));
// → false




