/*
Bonus
[X] Stampare il prezzo finale sulla pagina invece che in console
Aggiungere, sempre in pagina, altre informazioni, come il prezzo prima dello sconto e l'età e il chilometraggio indicati dall'utente
Validazione
Abbellimenti vari con CSS
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


//###### DOM Elements ######\\

const tripLengthElem = document.getElementById('trip-length');
const passengerAgeElem = document.getElementById('passenger-age');
const discountElem = document.getElementById('discount');
const ticketPriceElem = document.getElementById('ticket-price');

// Log
console.log('Trip Length Element:', tripLengthElem);
console.log('Passenger Age Element:', passengerAgeElem);
console.log('Discount Element:', discountElem);
console.log('Price Element:', ticketPriceElem);


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


//###### Update DOM elements ######\\
tripLengthElem.innerText = tripLengthInput + ' KM';
passengerAgeElem.innerText = passengerAgeInput + ' anni';
discountElem.innerText = discountMsg;
ticketPriceElem.innerText = '€' + ticketPrice.toFixed(2);


console.log('=============== DONE =================');