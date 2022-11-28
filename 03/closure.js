function counter(start) {
    var localVariable = start - 1;
    return function() {
        localVariable += 1;
        return localVariable;
    }
}

var counter1 = counter(18);
var counter2 = counter(45);

console.log(counter1());
console.log(counter2());
console.log(counter1());
console.log(counter2());
console.log(counter1());
console.log(counter2());