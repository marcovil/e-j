function primitiveMultiply(i,j) {
    if (Math.random() < 0.5) {
	return i * j;
    } else {
	throw new MultiplicatorUnitFailure();
    }
}

function MultiplicatorUnitFailure() {
}

MultiplicatorUnitFailure.prototype = Object.create(Error.prototype);
MultiplicatorUnitFailure.name = "MultiplicatorUnitFailure";

function retry(i,j) {
    for (;;) {
	try {
	    console.log(primitiveMultiply(i,j));
	    break;
	} catch(e) {
	    if (e instanceof MultiplicatorUnitFailure)
			console.log("error returned");
		else
			throw e;
	}
    }
}

retry();
