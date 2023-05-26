/*
Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
*/

/* *****************************************
! DEBUG
* *****************************************/
// Check if file is linked to the HTML
console.log('JS OK!')


/* *****************************************
* INIT
* *****************************************/
console.log('=============== INIT =================');

//###### Trip Variables ######\\
const pricePerKm = 0.21;



/* *****************************************
* LOGIC
* *****************************************/
console.log('=============== LOGIC =================');


//###### Retrieve User Data ######\\
// Get trip length
const tripLengthInput = prompt('Fornisci la lunghezza del viaggio in KM', 10);

// Get passenger age
const passengerAgeInput = prompt('Fornisci l\'età del passeggero', 8);

// Log data
console.log(`Lunghezza viaggio: ${tripLengthInput} KM.`)
console.log(`Età passeggero: ${passengerAgeInput} anni.`)

//###### Calculate standard ticket price ######\\
let ticketPrice = tripLengthInput * pricePerKm;

// Log result
console.log('Prezzo biglietto standard: €' + ticketPrice.toFixed(2));



//console.log('=============== DONE =================');