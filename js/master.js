// Inizializzo le variabili customer name e km to do andandoole a prendere dal DOM

let customerNameInputDomEle = document.getElementById('customer-name');

console.log(customerNameInputDomEle);

let kmToDoInputDomEle = document.getElementById('km-to-do');
let kmToDo



let selectValue

// Inizializzo la variabile btn andandoola a prendere dal DOM

let buttonCreateDomEle = document.getElementById('submit-btn');

console.log(buttonCreateDomEle);

// Inizializzo la variabile del multiplier del prezzo x Km
const multiplier = 0.21;

console.log(multiplier);

// Inizializzo ed assegno la variabile dello sconto = a 0 (cambiera' nell' if/ else if)

let sconto = 0 


console.log(sconto);





document.getElementById('submit-btn').addEventListener('click', function () {
    const kmToDoInputDomEle = document.getElementById('km-to-do');
    let kmToDo = parseFloat (kmToDoInputDomEle.value);
    console.log(kmToDo);
    const selectDomElement = document.getElementById('customer-range-age');
    let selectValue = (selectDomElement.value);
    console.log(selectValue);
    
    let prezzoBase = (multiplier * kmToDo)
    


    if (selectValue = a) {
        sconto = 0.20 * prezzoBase
    } else if (selectValue = b) {
        sconto = 0.40 * prezzoBase
    } else if (selectValue = c) {
        sconto = 0 
    }


});


let prezzo = (multiplier * kmToDo) - sconto;
const prezzoFixed = prezzo.toFixed(2);

document.getElementById('prezzo').innerHTML = `${prezzoFixed}`;