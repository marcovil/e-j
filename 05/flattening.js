function flatten(x) {
    return x.reduce(function(a,b) { return a.concat(b); }, []);
}


var arrays = [[1, 2, 3], [4, 5], [6]];
console.log(flatten(arrays));
