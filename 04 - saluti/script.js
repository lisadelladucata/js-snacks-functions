/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito (es. "Ciao [nome]") */

const userName = 'Mario';


// Dichiara la funzione qui.

function greetings(userName){
    let hello =  ` Ciao ${userName} ! ` 
    return hello
}

// Invoca la funzione qui e stampa il risultato in console

const helloMario = greetings(userName)
console.log(helloMario)

//Risultato atteso se si passa 'Mario': // ciao Mario
