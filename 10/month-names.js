var month = function() {
    var months = ["January","February","March","April","May","June","July","August","September","October","November","December"];

    return {
	name: function(i) { return months[i]; },
	number: function(i) { return months.indexOf(i); }
    }
}();

console.log(month.name(2));
// → March
console.log(month.number("November"));
// → 10
