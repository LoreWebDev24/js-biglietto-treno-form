// Inizializzo le variabili customer name e km to do andandoole a prendere dal DOM

let customerNameInputDomEle = document.getElementById('customer-name')

console.log(customerNameInputDomEle)

let kmToDoInputDomEle = document.getElementById('km-to-do')

// KM TO DO E' IL PARSEFLOAT DELLA MIA INPUT
let kmToDo = parseFloat(kmToDoInputDomEle.value);

console.log(kmToDo)
console.log(typeof kmToDo)


// Inizializzo la variabile btn andandoola a prendere dal DOM

let buttonCreateDomEle = document.getElementById('submit-btn')

console.log(buttonCreateDomEle)

// Inizializzo la variabile del multiplier del prezzo x Km
const multiplier = 0.21

console.log(multiplier)

// Inizializzo ed assegno la variabile dello sconto = a 0 (cambiera' nell' if/ else if)

let sconto = 0 

console.log(sconto)

// Inizializzo ed assegno la variabile del prezzo 

let prezzo = (multiplier * kmToDo)- sconto

console.log(prezzo)