var names = ["gigi","giorgio","gigi","steve"];

var filtered = names.filter(
    function(name) { return name == "gigi"; }
);

console.log(filtered);

console.log("---");

var fun_names = {
    "@": foo,
    "$": bar,
};

function foo(t) {
    this.t = t;
    console.log("foo");
    console.log(this.t);
}

function bar(t) {
    this.t = t;
    console.log("bar");
    console.log(this.t);
}

var funs = ["@","$","@"];

funs.forEach(function(i) {
    var Fun_n = fun_names[i];
    console.log(Fun_n);
    new Fun_n("string");
});
