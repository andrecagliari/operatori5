let GattiTotali = 44;
let FileDiGatti = 6;

let GattiPerFila = Math.floor(GattiTotali / FileDiGatti);
console.log("Gatti in fila: " + GattiPerFila);

let GattiRimanenti = GattiTotali % FileDiGatti;
console.log("Gatti rimanenti: " + GattiRimanenti);

let GattiMancanti = FileDiGatti - GattiRimanenti;
console.log("Gatti mancanti: " + GattiMancanti);

console.log(`ci sono ${GattiTotali} gatti, di cui ${GattiPerFila} in ogni fila e ${GattiRimanenti} gatti rimanenti. Mancano ${GattiMancanti} gatti per completare le file.`);
console.log(`44 gatti in fila per 6 col resto di 2`);
