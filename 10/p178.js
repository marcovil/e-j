var ops = {};

(function(exports) {
    exports.mult = function(a,b) {
	return a * b;
    };
    exports.sum = function(a,b) {
	return a + b;
    }
})(ops);

console.log(ops.mult(2,9));
console.log(ops.sum(1,3));

(function(exports) {
    exports.sub = function(a,b) {
	return a - b;
    }
})(ops);

console.log(ops.sub(9,3));
console.log(ops.mult(6,4));
    
