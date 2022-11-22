var something = 1;
{
    console.log(something);
    var something = 2; // this refers to the same something outside the block
    console.log(something);
} 
console.log(something);