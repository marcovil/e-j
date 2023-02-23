function arrayToList(x) {
    list = null;
    for (var i = x.length-1; i >= 0; i--) {
	list = prepend(x[i], list);
    }
    return list;
}

function listToArray(l) {
    arr = [];
    while (l != null) {
	arr.push(l.value);
	l = l.rest;
    }
    return arr;
}

function prepend(element, list) {
    new_list = {};
    new_list.value = element;
    new_list.rest = list
    return new_list;
}

function prepend2(element, list) {
    return {value: element, rest: list};
}

function nth(list, number) {
    if (list == null)
	return undefined;
    if (number == 0)
	return list.value;
    return nth(list.rest, number-1);
}

console.log(arrayToList([10, 20]));
console.log(listToArray(arrayToList([10, 20, 30])));
console.log(prepend(10, prepend(20, null)));
console.log(prepend(10, prepend2(20, null)));
console.log(nth(arrayToList([10, 20, 30]), 1));
