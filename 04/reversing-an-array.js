function reverseArray(x) {
    arr = [];
    for (var i = 0; i < x.length; i++) {
	arr.push(x[x.length-i-1]);
    }
    return arr;
}

function reverseArrayInPlace(x) {
    for (var i = 0; i < (x.length / 2); i++) {
	var temp = x[i];
	x[i] = x[x.length - i - 1];
	x[x.length - i - 1] = temp;
    }
}
    

console.log(reverseArray([1,3,5,7,9]));
arr = [2, 4, 6, 8];
reverseArrayInPlace(arr);
console.log(arr);
arr1 = [2, 4, 6, 8, 10];
reverseArrayInPlace(arr1);
console.log(arr1);

