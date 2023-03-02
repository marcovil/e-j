var arr1 = [1, 2, 8, 4, 5];

console.log(arr1.reduce(function(max, cur) {
    return Math.max(max, cur);
}, 0));

arr1.map(function(el,i) {
    console.log(i);
});
