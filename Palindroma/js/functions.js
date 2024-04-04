// Funziona con Alt J .
/**
 * Description: Verifico se la parola dell'utente è palindroma
//  * @param {string} word è la parola da controllare
//  * @returns {boolean} true se la parola è palindroma
//  */

function wordPalindroma(word) {
  // Inizializzo una variabile per contenere la parola invertita
  let reversedWord = "";
  // Ciclo for per invertire la parola
  for (let i = userWord.length - 1; i >= 0; i--) {
    reversedWord += userWord[i];
    //console.log(reversedWord)
  }

  if (userWord === reversedWord) {
    return true;
  }

  return false;
}
