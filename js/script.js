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
const ticketKmElem = document.getElementById('ticket-km-price');
const ticketBaseElem = document.getElementById('ticket-base-price');
const discountElem = document.getElementById('discount');
const ticketFinalPriceElem = document.getElementById('ticket-final-price');

// Log
console.log('=============== Elementi DOM =================');
console.log('Trip Length Element:', tripLengthElem);
console.log('Passenger Age Element:', passengerAgeElem);
console.log('Ticket KM Price Element:', ticketKmElem);
console.log('Ticket Base Price Element:', ticketBaseElem);
console.log('Discount Element:', discountElem);
console.log('Ticket Price Element:', ticketFinalPriceElem);


/* *****************************************
* LOGIC
* *****************************************/
console.log('=============== LOGIC =================');


//###### Retrieve user data ######\\
// Get trip length
const tripLengthInput = parseInt(prompt('Fornisci la lunghezza del viaggio in KM', 10));

// Get passenger age
const passengerAgeInput = parseInt(prompt('Fornisci l\'età del passeggero', 8));

// Log data
console.log(`Lunghezza viaggio: ${tripLengthInput} KM.`)
console.log(`Età passeggero: ${passengerAgeInput} anni.`)


//###### Validation ######\\
let isValid = true;
let errorMsg;

if(isNaN(tripLengthInput) || isNaN(passengerAgeInput) || tripLengthInput < 1 || passengerAgeInput < 1) {
    isValid = false;
    errorMsg = 'Dati inseriti non validi';
}


if(!isValid) {
    //###### Log errore ######\\
    console.log(errorMsg);

} else {

    //###### Calculate standard ticket price ######\\
    const ticketBasePrice = tripLengthInput * pricePerKm;

    // Log result
    console.log('Prezzo biglietto standard: €' + ticketBasePrice.toFixed(2));


    //###### Calculate ticket reductions ######\\
    // Final price var
    let ticketFinalPrice = ticketBasePrice;

    // Discount string
    let discountMsg = 'Nessuno';

    // Under age check
    if (passengerAgeInput < underAgeValue) {

        ticketFinalPrice *= (1 - underAgeDiscount);
        discountMsg = `"Minorenni" del ${underAgeDiscount * 100}%`;

    } 
    // Over age check
    else if (passengerAgeInput >= overAgeValue) {

        ticketFinalPrice *= (1 - overAgeDiscount);
        discountMsg = `"Over 65" del ${overAgeDiscount * 100}%`;
    }

    // Log discount
    console.log('Sconto applicato: ' + discountMsg);


    //###### Log final price ######\\
    console.log('Il prezzo finale del biglietto è di €' + ticketFinalPrice.toFixed(2));


    //###### Update DOM elements ######\\
    tripLengthElem.innerText = tripLengthInput + ' KM';
    passengerAgeElem.innerText = passengerAgeInput + ' Anni';
    ticketKmElem.innerText = '€' + pricePerKm.toFixed(2) + ' per KM';
    ticketBaseElem.innerText = '€' + ticketBasePrice.toFixed(2);
    discountElem.innerText = discountMsg;
    ticketFinalPriceElem.innerText = '€' + ticketFinalPrice.toFixed(2);

}

console.log('=============== DONE =================');