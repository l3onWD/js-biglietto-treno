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

//###### Ticket Data ######\\
// Ticket price per KM
const pricePerKm = 0.21;

// Price Reductions
const underAgeValue = 18;
const underAgeDiscount = 0.20;

const overAgeValue = 65;
const overAgeDiscount = 0.40;

// Log Data
console.log('Prezzo del biglietto per KM: €' + pricePerKm);
console.log(`Sconto Minorenni: Sconto del ${underAgeDiscount.toFixed(2)}% se hai un età inferiore a ${underAgeValue} anni.`);
console.log(`Sconto "Over 65": Sconto del ${overAgeDiscount.toFixed(2)}% se hai un età superiore o uguale a ${overAgeValue} anni.`);

/* *****************************************
* LOGIC
* *****************************************/
console.log('=============== LOGIC =================');


//###### Retrieve user data ######\\
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


//###### Check ticket reductions ######\\
// Discount string
let discountMsg = 'Nessuno Sconto applicato';

// Under age check
if (passengerAgeInput < underAgeValue) {

    ticketPrice *= (1 - underAgeDiscount);
    discountMsg = `Applicato lo sconto "Minorenni" del ${underAgeDiscount * 100}%.`;

} 
// Over age check
else if (passengerAgeInput >= overAgeValue) {

    ticketPrice *= (1 - overAgeDiscount);
    discountMsg = `Applicato lo sconto "Over 65" del ${overAgeDiscount * 100}%.`;
}

// Log discount
console.log(discountMsg);


//###### Log final price ######\\
console.log('Il prezzo finale del biglietto è di €' + ticketPrice.toFixed(2));


console.log('=============== DONE =================');