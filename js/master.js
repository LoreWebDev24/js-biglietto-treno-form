// Inizializzo le variabili customer name e km to do andandoole a prendere dal DOM

let customerNameInputDomEle = document.getElementById('customer-name');

console.log(customerNameInputDomEle);

let kmToDoInputDomEle = document.getElementById('km-to-do');

let kmToDo

let selectValue

// Inizializzo la variabile btn andandoola a prendere dal DOM

let buttonCreateDomEle = document.getElementById('submit-btn');

console.log(buttonCreateDomEle);

// Inizializzo la variabile btn andandoola a prendere dal DOM
const multiplier = 0.21;

console.log(multiplier);


// COSA SUCCEDE DURANTE L'EVENT LISTENER:

document.getElementById('submit-btn').addEventListener('click', function () {
    const kmToDoInputDomEle = document.getElementById('km-to-do');
    // KM TO DO E' IL MIO PARSE FLOAT DEL VALUE DELL' INPUT
    let kmToDo = parseFloat (kmToDoInputDomEle.value);
    console.log(kmToDo);
    const selectDomElement = document.getElementById('customer-range-age');
    // SELECT VALUE E' IL VALUE DEL SELECTDOMELEMENT
    let selectValue = (selectDomElement.value);
    console.log(selectValue);

    // DICHIARO ED ASSEGNO IL PREZZO BASE
    let prezzoBase = (multiplier * kmToDo)
    // IMPOSTO LO SCONTO UGUALE A 0
    let sconto = 0;
    // SE LA SELECT VALUE === MINORENNE
    //  ALLORA SCONTO = 0.20 * PREZZO BASE
    if (selectValue === "minorenne") {
        sconto = 0.20 * prezzoBase
    // ELSE IF SELECT VALUE === OVER 65
    //  ALLORA SCONTO = 0.40 * PREZZO BASE
    } else if (selectValue === "over") {
        sconto = 0.40 * prezzoBase
    }

    console.log("prezzoBase", prezzoBase);
    console.log("sconto", sconto);

    // DICHIARO ED ASSEGNO IL VALORE DEL PREZZO 
    let prezzo = (multiplier * kmToDo) - sconto;
    // ARROTONDO IL PREZZO FINALE A DUE CIFRE DOPO LA VIRGOLA
    const prezzoFixed = prezzo.toFixed(2);
    console.log("prezzoFixed", prezzoFixed);

    // RECUPERO IL VALORE "EURO" DAL DOM

    const pContent = document.getElementById('prezzo').innerHTML;
    
    // STAMPO NELL' HTML IL PREZZO DEL BIGLETTO CON IL SIMBOLO DELL' EURO
    
    document.getElementById('prezzo').innerHTML = `${prezzoFixed} ${pContent}`;

    // SECONDO MODO DI STAMPARE IL PREZZO DEL BIGLETTO

    // document.getElementById('prezzo').innerHTML = prezzoFixed + " " + pContent;
});

