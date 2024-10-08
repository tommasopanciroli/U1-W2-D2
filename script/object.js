// OGGETTI
// Un oggetto, in tutti i linguaggi di programmazione, rappresenta la modellazione
// in codice di un vero e proprio oggetto delo mondo reale.
// Si tratta di un tipo di dato COMPLESSO, ovvero una collezione di coppie chiave:valore
// Queste coppie chiave:valore vengono solitamente definite 'proprietà'

const test = {} // oggetto valido ma vuoto

// MODALITA DI ESPLORAZIONE DI OGGETTI
// 1) DOT NOTATION
// Si può espolorare le proprioetòà di un oggetto indicando nomeOggetto.nomeProprietà
//COn la stessa tecnica si può anche esplorare oggetti dentro oggetti
// (es. smartphone.screen.technology)

// negli oggetti l'operatore di assegnazione sono i :, non più =
const smartphone = {
  brand: 'Apple',
  model: 'iPhone 16',
  capacity: 128,
  newModel: true,
  color: 'Blue Marine',
  'is-unlocked': true,
  //sotto-proprietà
  screen: {
    resolutionX: 1179,
    resolutionY: 2556,
    technology: 'oled',
  },
}

// un oggetto può contenere infinite coppie chiave:valore
// la chiave tipicamente non va inserita tra '' (a meno che non abbia un nome particolare)
// il valore dopo i : può essere una stringa, un numero, un booleano, un altro oggetto, etc.

console.log('SMARTPHONE', smartphone)
console.log(
  'Ho un smartphone di marca ' +
    smartphone.brand +
    ', di colore ' +
    smartphone.color
)

console.log(
  'Il mio smartphone ha una risoluzione di ' +
    smartphone.screen.resolutionY +
    'x' +
    smartphone.screen.resolutionX
)

// 2) SQUARE BRACKETS NOTATION
//serve quando il nome della proprietà ha caratteri strani

console.log(smartphone['is-unlocked']) // true

let property = 'capacity'

// !! BRAINFUCK ALERT !!
console.log(smartphone[property]) // vado a LEGGERE IL VALORE di property, e lo uso
// come proprietà di smartphone

// AGGIUNGERE UNA PROPRIETA AD UN OGGETTO ESISTENTE
smartphone.carrier = 'Iliad' // aggiunta una nuova proprietà
console.log('SMARTPHONE DOPO AGGIUNTA DI CARRIER', smartphone)

//MODIFICA DI UNA PROPRIETA ESISTENTE
smartphone.color = 'Fluo Pink'
console.log('SMARTPHONE DOPO LA MODIFICA DI COLOR', smartphone)

//ELIMINA DI UNA PROPRIETA
delete smartphone.newModel
console.log('SMARTPHONE DOPO AVER ELIMINATO newModel', smartphone)
