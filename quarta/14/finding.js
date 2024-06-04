let link = document.body.getElementsByTagName("a")[0];
console.log(link.href);

let ostrich = document.getElementById("gertrude");
console.log(ostrich.src);

let perclasse = document.body.getElementsByClassName("ciapa");
console.log(perclasse);

let bodyChildren = document.body.childNodes;
for(const node of bodyChildren) {
    console.log(node);
}

