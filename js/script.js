//KM
const km = parseInt(prompt("Quanti km desideri fare?"));
console.log("n di kilometri " + km);

//KM NON VALIDI
if (isNaN(km)) {
    alert("I Km inseriti non sono validi. Utilizza solo numeri ");
}

//ETA'
const etaPasseggero = parseInt(prompt("Quanti anni hai?"));
console.log("età " + etaPasseggero);

//ETA' NON VALIDA
if (isNaN(etaPasseggero)) {
    alert("La tua età non è valida. Inseriscila utilizzando soltanto numeri");
}

let costoBiglietto = km * 0.21;
costoBiglietto = costoBiglietto.toFixed(2);
console.log("il tuo biglietto costa " + costoBiglietto + "€");

let bigliettoScontato20 = (costoBiglietto) - ((costoBiglietto / 100) * 20);
bigliettoScontato20 = bigliettoScontato20.toFixed(2);


let bigliettoScontato40 = (costoBiglietto) - ((costoBiglietto / 100) * 40);
bigliettoScontato40 = bigliettoScontato40.toFixed(2);

//VARIABILE ETA
if (etaPasseggero < 18) {
    alert("Complimenti! Hai diritto ad uno sconto del 20% perchè sei minorenne");
    costoBiglietto = bigliettoScontato20;
    console.log("il tuo biglietto, scontato al 20%, costa " + bigliettoScontato20);
} else if (etaPasseggero >= 65) {
    alert("Complimenti! Hai diritto ad uno sconto del 40% perchè hai più di 65 anni");
    costoBiglietto = bigliettoScontato40;
    console.log("il tuo biglietto, scontato al 40%, costa " + bigliettoScontato40);
}


//VARIABILE PREZZO FINALE
if (isNaN(costoBiglietto)) {
    alert("Hai inserito scorrettamente i km");

} else {
    alert("il tuo biglietto costa " + costoBiglietto + "€");
}

if (isNaN(etaPasseggero)) {
    alert("Hai inserito scorrettamente la tua età");
}








