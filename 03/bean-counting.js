function countBs(s) {
    var count = 0;
    for (var i = 0; i < s.length; i = i + 1) {
	if (s.charAt(i) == "B")
	    count = count + 1;
    }
    return count;
}

console.log(countBs("AAAA"));
console.log(countBs(""));
console.log(countBs("B"));
console.log(countBs("ABA"));
console.log(countBs("BAB"));
console.log(countBs("BBB"));

console.log("-----");

function countChar(s, c) {
    var count = 0;
    for (var i = 0; i < s.length; i = i + 1) {
	if (s.charAt(i) == c)
	    count = count + 1;
    }
    return count;
}

function countBs2(s) {
    return countChar(s,"B");
}

console.log(countBs2("AAAA"));
console.log(countBs2(""));
console.log(countBs2("B"));
console.log(countBs2("ABA"));
console.log(countBs2("BAB"));
console.log(countBs2("BBB"));
