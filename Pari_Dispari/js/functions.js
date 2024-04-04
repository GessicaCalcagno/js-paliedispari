// Funziona con Alt J .
/**
 * Description: Even --> controlla se il numero è pari o dispari
//  * @param {number} 
//  * @returns {boolean} 
//  */

function even(evenNumb) {
    let flag = false;
    if (evenNumb % 2 === 0){
        flag = true
    }
  return flag
}

function randomNumb() {
  let computerNumb = Math.floor(Math.random() * 5) + 1;
  
  return computerNumb
}

