//--------------------- ESERCIZIO -------------------------------------
//Chiedere all’utente di inserire una parola. Creare una funzione per capire se la parola inserita è palindroma.
//----------------------------------------------------------

// TEST
//alert('ciao')

//************************************************ */
// Lo usiamo come controllo alla fine se c'è qualche problema di sintassi! COMMENTALO SE ANCORA STAI LAVORANDO SUL CODICE
//"use strict";
//**************************************************** */

// Chiedo all'utente di inserire una parola
let userWord = prompt("Inserisci una parola");
console.log(userWord);

//Output

if (wordPalindroma()) {
  console.log("La parola è palindroma");
} else {
  console.log("La parola non è palindroma");
}


