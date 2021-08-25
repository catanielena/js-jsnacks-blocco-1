// Crea un array vuoto. 
var box = [];
var newNum = 0;
// Chiedi per 6 volte all’utente di inserire un numero, 
for (i=0; i<6; i++) {
    var newNum = parseInt(prompt("Inserisci un numero"));
    if (isNaN(newNum)) {
        var newNum = parseInt(prompt("Errore! Inserisci un numero"));
    } else if (!(newNum % 2) == 0) {
        box.push(newNum);
    }
}

console.log(box);
// se è dispari inseriscilo nell’array