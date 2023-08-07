var string1 = "\"stringa dentro stringa\"";

var match = /^"([^"]*)"/.exec(string1);
var match2 = /\d+/.exec("one two 200");
var match3 = /\d+/.exec("234");

console.log(match3);
console.log(match2);
console.log(match);
console.log(match[1]);
