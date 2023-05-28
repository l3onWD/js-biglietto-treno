/* *****************************************
! DEBUG
* *****************************************/
console.log('=============== DEBUG =================');

console.log('JS OK!');// Check if JS is linked to the page


/* *****************************************
* INIT
* *****************************************/
console.log('=============== INIT =================');


// *** PRICE DATA ***//
const pricePerKm = 0.21;// Ticket price per KM [€]

// Underage Price Reduction
const underAgeValue = 18;// [years]
const underAgeDiscount = 0.20;// [percentage unit]

// Overage Price Reduction
const overAgeValue = 65;// [years]
const overAgeDiscount = 0.40;// [percentage unit]

//! Log Data
console.log('Prezzo del biglietto per KM: €' + pricePerKm);
console.log(`Sconto Minorenni: Sconto del ${underAgeDiscount.toFixed(2)}% se hai un età inferiore a ${underAgeValue} anni.`);
console.log(`Sconto "Over 65": Sconto del ${overAgeDiscount.toFixed(2)}% se hai un età superiore o uguale a ${overAgeValue} anni.`);


// *** GET DOM ELEMENTS ***//
const tripLengthElem = document.getElementById('trip-length');
const passengerAgeElem = document.getElementById('passenger-age');
const ticketKmElem = document.getElementById('ticket-km-price');
const ticketBaseElem = document.getElementById('ticket-base-price');
const discountElem = document.getElementById('discount');
const ticketFinalPriceElem = document.getElementById('ticket-final-price');

//! Log Elements
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


// *** GET USER INPUTS ***//
// Get trip length
const tripLengthInput = parseInt(prompt('Fornisci la lunghezza del viaggio in KM', 10));

// Get passenger age
const passengerAgeInput = parseInt(prompt('Fornisci l\'età del passeggero', 8));

//! Log Inputs
console.log(`Lunghezza viaggio: ${tripLengthInput} KM.`)
console.log(`Età passeggero: ${passengerAgeInput} anni.`)


// *** VALIDATION ***//
let isValid = true;
let errorMsg = '';// Message container for error logs
const errorElem = '<span class="text-danger">inserisci un numero maggiore di 0!</span>';// Element to insert on page if an input is invalid

// Check trip length input
if(isNaN(tripLengthInput) || tripLengthInput < 1) {

    isValid = false;

    // Update error log message
    errorMsg += '### Lunghezza viaggio non valido: inserisci un numero maggiore di 0!\n';

    // Update DOM element
    tripLengthElem.innerHTML = errorElem;
}

// Check age input 
if(isNaN(passengerAgeInput) || passengerAgeInput < 1) {

    isValid = false;

    // Update error log message
    errorMsg += '### Anni passeggero non validi: inserisci un numero maggiore di 0!\n';

    // Update DOM element
    passengerAgeElem.innerHTML = errorElem;
}


// *** UPDATE DATA ***//
if(!isValid) {

    //! Log error
    console.log(errorMsg);

} else {

    // *** CALCULATE FINAL PRICE ***//
    // Calculate standard ticket price
    const ticketBasePrice = tripLengthInput * pricePerKm;

    //! Log standard price
    console.log('Prezzo biglietto standard: €' + ticketBasePrice.toFixed(2));


    // Apply ticket reductions
    let ticketFinalPrice = ticketBasePrice;// Final price
    let discountMsg = 'Nessuno';// Discount message

    // Underage check
    if (passengerAgeInput < underAgeValue) {

        ticketFinalPrice *= (1 - underAgeDiscount);// Apply ticket reduction
        discountMsg = `"Minorenni" del ${underAgeDiscount * 100}%`;// Create discount message

    } 
    // Overage check
    else if (passengerAgeInput >= overAgeValue) {

        ticketFinalPrice *= (1 - overAgeDiscount);// Apply ticket reduction
        discountMsg = `"Over 65" del ${overAgeDiscount * 100}%`;// Create discount message
    }

    //! Log discount message
    console.log('Sconto applicato: ' + discountMsg);


    // *** RENDER RESULTS ***//
    //! Log final price
    console.log('Il prezzo finale del biglietto è di €' + ticketFinalPrice.toFixed(2));

    // Update DOM elements
    tripLengthElem.innerText = tripLengthInput + ' KM';
    passengerAgeElem.innerText = passengerAgeInput + ' Anni';
    ticketKmElem.innerText = '€' + pricePerKm.toFixed(2) + ' per KM';
    ticketBaseElem.innerText = '€' + ticketBasePrice.toFixed(2);
    discountElem.innerText = discountMsg;
    ticketFinalPriceElem.innerText = '€' + ticketFinalPrice.toFixed(2);

}


console.log('=============== DONE =================');