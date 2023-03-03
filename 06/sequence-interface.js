//next_el (get next element)
//has_next (is there a next element?)

function logFive(sequence) {
    var i = 1;
    while (i <= 5 && sequence.has_next()) {
	console.log(sequence.next_el());
	i++;
    }
};

function ArraySeq(array) {
    this.array = array;
    this.i = 0;
};

ArraySeq.prototype.next_el = function() {
    var el_to_return = this.array[this.i];
    this.i = this.i + 1;
    //console.log(this.i);
    return el_to_return;
};

ArraySeq.prototype.has_next = function() {
    return this.i < this.array.length;
};

var arr1 = [4,7,2,1,5,7,8,5,34];
var arr2 = [2134,4326,8736];

logFive(new ArraySeq(arr1));
logFive(new ArraySeq(arr2));

function RangeSeq(from, to) {
    this.from = from;
    this.to = to;
    this.i = 0;
};

RangeSeq.prototype.next_el = function() {
    var el_to_return = this.from + this.i;
    this.i = this.i + 1;
    return el_to_return;
};

RangeSeq.prototype.has_next = function() {
    return this.from + this.i != this.to + 1;
};

logFive(new RangeSeq(4,6));
logFive(new RangeSeq(56,124));

logFive(new ArraySeq([1, 2]));
// → 1
// → 2
logFive(new RangeSeq(100, 1000));
