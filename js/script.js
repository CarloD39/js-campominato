// Consegna Il computer deve generare 16 numeri casuali tra 1 e 100.
// I numeri non possono essere duplicati.
// In seguito deve chiedere all’utente per (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
// L’utente non può inserire più volte lo stesso numero.
// Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.
// La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.


// generiamo 16 numeri => creo funzione => while array.length < 16, 
// perché di volta in volta pusho nell'array il numero generato, solo se non è già presente
// --- 
//     0. while listNum.length <= 16
//     1.      genero un numero randomico
//     2.      if num not in array then, lo pusho nell'array listNum

// ora listNum contiene 16 numeri NON duplicati.

// while userNums.length < 84
//     chiedi all'utente un numero 
//     if num (quello inserito dall'utente) not in array userNums:
//         if num in array listNum (numeri generati dal computer), then break. // il gioco è finito, si stoppa il ciclo.
//         else push num to userNums => next step.

// risultato, stampo lo score che è userNums.length.




// COMPUTER PART

function getRandomNumber (min, max){
  
    return Math.floor(Math.random() * (max - min + 1) + min); // credo un number randomico da 1 a 100;

}

var computerNumbers = []; //array vuoto;
var generateNumber = 16;

while(computerNumbers.length < generateNumber){  //apro ciclo while per i numeri generati dal computer;

    var randomNumbers = getRandomNumber(1,70);

    if(!computerNumbers.includes(randomNumbers)) {   // ! = se computerNumbers NON include randomNumbers;

        computerNumbers.push(randomNumbers);
    }
}

console.log('numbers by computer' + computerNumbers);


// USER PART

var userNumbers =[]; // array vuoto per definire punteggio finale;
var gameOver = false;

while (userNumbers.length < 35) { //apro un ciclo while per l'utente come fatto per i computerNumbers; 

    var pickedNUmber = parseInt(prompt('scrivi un numero compreso t ra 1 e 100'));

    if (!userNumbers.includes(pickedNUmber)){  //se il numero dell'utente NON è incluso neòò'array;

        if(computerNumbers.includes(pickedNUmber)) {
            alert('Sei finito su una mina!')
            gameOver = true;
            break;

        } else {
            userNumbers.includes(pickedNUmber);
            console.log('I numeri totali dell\'utente :', userNumbers );
        }

    } else {
        alert('Riprova! Hai inserito un numero duplicato');
    }

} 

if (!gameOver) { //doppia negazione;
    alert('Hai vinto')
} else{
    alert('Hai perso !')
}

alert('Il punteggio finale è' + userNumbers.length);
