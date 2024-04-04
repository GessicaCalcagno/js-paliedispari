//--------------------- ESERCIZIO -------------------------------------
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.
//----------------------------------------------------------

// TEST
//alert('ciao')

//************************************************ */
// Lo usiamo come controllo alla fine se c'è qualche problema di sintassi! COMMENTALO SE ANCORA STAI LAVORANDO SUL CODICE
//"use strict";
//**************************************************** */
const userChoice = prompt("Scegli pari o dispari");//Stringa
console.log(userChoice);

const userNumb = parseInt(prompt("Dimmi un numero da 1 a 5"));//Number
console.log(userNumb);

const pcNumb = randomNumb(); //Number
console.log(pcNumb);

const sum = userNumb + pcNumb; //Number
console.log(sum);

const oddEven = even(sum); //Boolean
console.log(oddEven);

// Output

// Se dico pari e il risultato della somma è pari ho vinto
// Se dico dispari e il sultato della somma è dispari  ho vinto
// Se no ho perso

if (userChoice === "pari" && oddEven === true){
    console.log("Hai vinto")    
} else if (userChoice === "dispari" && oddEven === false){
    console.log("Hai vinto!!!");
} else{
    console.log("Hai perso!");
}




