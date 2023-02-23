function range(start, end) {
    var i = start;
    arr = [];
    while (i <= end) {
	arr.push(i);
	i++;
    }
    return arr;
}

function sum(numbers) {
    var sum = 0;
    for (var i = 0; i < numbers.length; i++) {
	sum += numbers[i];
    }
    return sum;
}

console.log(range(1,1));
console.log(range(1,10));
console.log(sum(range(1,10)));

function range2(start, end) {
    var step = 1;
    if (arguments.length == 3) {
	step = arguments[2];
    }
    var i = start;
    arr = [];
    if (step > 0) {
	while (i <= end) {
	    arr.push(i);
	    i += step;
	}
    } else if (step < 0) {
	while (i >= end) {
	    arr.push(i);
	    i += step;
	}
    } else {
	arr.push(i);
    }
    return arr;
}


console.log(range2(1,10));
console.log(range2(1,10,2));
console.log(range2(5,2,-1));

function range3(start, end, step) {
    if (step == null) step = 1;
    var i = start;
    arr = [];
    if (step > 0) {
	while (i <= end) {
	    arr.push(i);
	    i += step;
	}
    } else if (step < 0) {
	while (i >= end) {
	    arr.push(i);
	    i += step;
	}
    } else {
	arr.push(i);
    }
    return arr;
}

console.log(range3(1,10));
console.log(range3(1,10,2));
console.log(range3(5,2,-1));
console.log(range3(10,1,0));
