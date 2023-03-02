function Vector(x, y) {
    this.x = x;
    this.y = y;
}

Vector.prototype.plus = function(otherV) {
    return new Vector(
	this.x + otherV.x,
	this.y + otherV.y);
}

Vector.prototype.minus = function(otherV) {
    return new Vector(
	this.x - otherV.x,
	this.y - otherV.y);
}

Object.defineProperty(Vector.prototype, "length", {
    get: function() {
	return Math.sqrt(this.x * this.x + this.y * this.y);
    }
});

console.log(new Vector(1, 2).plus(new Vector(2, 3)));
// → Vector{x: 3, y: 5}
console.log(new Vector(1, 2).minus(new Vector(2, 3)));
// → Vector{x: -1, y: -1}
console.log(new Vector(3, 4).length);
// → 5
