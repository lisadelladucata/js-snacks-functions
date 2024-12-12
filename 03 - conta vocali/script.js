/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';


// Dichiara la funzione qui.
function countVowels(word){
    let count = 0; 
    const vowels = 'aeiou';
    for(i = 0; i < word.length; i++){
        if(vowels.includes(word[i])){
            count++;
        }
    }
    return count
}

// Invoca la funzione qui e stampa il risultato in console

const vowelsNum = countVowels(word)
console.log(vowelsNum)

//Risultato atteso se si passa 'javascript': 3 (a, a, i)