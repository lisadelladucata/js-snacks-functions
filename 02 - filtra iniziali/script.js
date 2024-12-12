/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];
const letter = "A"

// Dichiara la funzione qui.
function firstLetter (names){
    const result=[];
    for (let i= 0; i < names.length; i++){
        if (names[i][0] === letter){
            result.push(names[i])
        }
    }
    return result;
}

// Invoca la funzione qui e stampa il risultato in console

const result= firstLetter(names, letter)
console.log(result)

//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]