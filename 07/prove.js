var cips = [2, 3, 4, 28];
cips.forEach(function(elt,id) {
    console.log(elt + id);
})

function Oggetto(arr) {
    this.ciopo = arr;
    this.scrapo = [2, 3, 4, 5];
    this.scropo = 7;
    this.funzione = function() {
        return this.scrapo.forEach(function(elt) {
            console.log(this.scropo + elt);
        }.bind(this));
    }  
};

var ogg1 = new Oggetto(cips);
ogg1.funzione();

function Oggetto2() {
    this.numero = 42;
    this.funzione = function(i) {
        return this.numero + i;
    }
}

var ogg2 = new Oggetto2();
var torna = ogg2.funzione(23);
console.log(torna);