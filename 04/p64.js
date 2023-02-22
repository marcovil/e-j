var anObject = {left: 1, right: 2};
console.log("left" in anObject);
console.log(anObject.left);

anObject.left = undefined;
console.log("left" in anObject);
console.log(anObject.left);

delete anObject.left;
console.log("left" in anObject);
console.log(anObject.left);
anObject.left = 3;
console.log(anObject.left);
