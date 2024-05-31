function talksAbout(node, string) {
    if (node.nodeType == Node.ELEMENT_NODE) {
	console.log("found elementnode");
	console.log(node.nodeName);
	for (let child of node.childNodes) {
	    if (talksAbout(child, string)) {
		return true;
	    }
	}
	return false;
    } else if (node.nodeType == Node.TEXT_NODE) {
	return node.nodeValue.indexOf(string) > -1;
    }
}

console.log(talksAbout(document.body, "igi"));
