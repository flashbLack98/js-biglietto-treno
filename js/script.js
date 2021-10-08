
const km = 150;
console.log("n di kilometri " + km);


const etaPasseggero = prompt("Quanti anni hai?");
console.log("età " + etaPasseggero);


let costoBiglietto = km * 0.21;
costoBiglietto = costoBiglietto.toFixed(2);
console.log("il tuo biglietto costa " + costoBiglietto + "€");

let bigliettoScontato20 = (costoBiglietto) - ((costoBiglietto / 100) * 20);
bigliettoScontato20 = bigliettoScontato20.toFixed(2);


let bigliettoScontato40 = (costoBiglietto) - ((costoBiglietto / 100) * 40);
bigliettoScontato40 = bigliettoScontato40.toFixed(2);


if (etaPasseggero < 18) {
    alert("Hai diritto di uno sconto del 20% perchè sei minorenne");
    costoBiglietto = bigliettoScontato20;
    console.log("il tuo biglietto scontato costa " + bigliettoScontato20);
} else if (etaPasseggero >= 65) {
    costoBiglietto = bigliettoScontato40;
    console.log("il tuo biglietto scontato costa " + bigliettoScontato40);
}

alert("il tuo biglietto costa " + costoBiglietto + "€");