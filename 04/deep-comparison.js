function deepEqual(obj1, obj2) {
    if (obj1 == null && obj2 != null ||
	obj1 != null && obj2 == null)
	return false;
    if (typeof(obj1) == "object" && typeof(obj2) == "object") {
	for (var prop in obj1) {
	    if (!(prop in obj2))
		return false;
	    if (!deepEqual(obj1[prop], obj2[prop]))
		return false;
	}
    } else if (typeof(obj1) != "object" && typeof(obj2) != "object") {
	return obj1 === obj2;
    } else {
	return false;
    }
    return true;
}

console.log(deepEqual({a: 1, b: 2}, null));
console.log(deepEqual(null, {a: 1, b: 2}));
console.log(deepEqual(2,2));
console.log(deepEqual(2,3));
console.log(deepEqual(null, null));


var obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
console.log(deepEqual(obj, {here: 1, object: 2}));
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
