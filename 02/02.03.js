for (var i = 1; i <= 8; i++) {
    output = "";
    for (var j = 1; j <= 8; j++) {
        if ((i+j) % 2 == 0)
            output += "#";
        else
            output += " ";
    }
    console.log(output);
}

var size = 16

for (var i = 1; i <= size; i++) {
    output = "";
    for (var j = 1; j <= size; j++) {
        if ((i+j) % 2 == 0)
            output += "#";
        else
            output += " ";
    }
    console.log(output);
}  