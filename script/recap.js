console.log('prova collegamento foglio JS')

// VARIABILI
let thisIsAVariable = 'Tommaso'
// TIPI DI DATO PRIMITIVI
// stringhe, numeri, booleani, undefined, null

console.log('thisIsAVariable', thisIsAVariable)

// le variabili assegnate con 'let'  sono ri-assegnabili
thisIsAVariable = 'EPICODE'
console.log('thisIsAVariable', thisIsAVariable)

//keyword 'const'
const newVariable = 'Via Roma 1'
// newVariable = 'Corso ITalia 100'

// OPERATORI MATEMATICI
// + - * / %
// servono per lavorare con i NUMERI, ma l'operatore '+' lavora anche con le stringhe

let myName = 'Tommaso'
let mySurname = 'Panciroli'

let nameSurname = myName + ' ' + mySurname
console.log('nameSurname', nameSurname)

// % -> l'operatore modulo torna il RESTO di una DIVISIONE
// comodo spesso per stabilire se un numero è perfettamente divisibile per un altro

let n1 = 40
console.log('Verifica che il numero n1 è pari', n1 % 2 === 0) // il resto è 0

let n2 = 77
console.log('Verifica che il numero n2 è pari', n2 % 2 === 0) // il resto è 1

// OPERATORI DI COMPARAZIONE
// < <= > >= === !== !
// una COMPARAZIONE torna un booleano

console.log(3 < 5) // true
console.log(6 === 7) // false
console.log(4 !== 5) // true
console.log(8 <= 9) // true
console.log(56 >= 56) // true

let comparazione = 6 !== 6 // false
console.log('Verifica che 6 sia diverso da 6', comparazione)

// È possibile concatenare più operazioni logiche tra di loro,
// tramite gli operatori AND (&&) OR (||) NOT(!)

console.log(
  'Inverrto comparazione, ovvero che 6 sia diverso da 6',
  !comparazione
) // true

// AND è un operatore logiche che collega più operazioni logiche alla volta

// true && true -> true
// false && true -> false
// true && false -> false
// false && false -> false

let belTempo = false
let hoIlCostumeDaBagno = true

let vadoAlMare = belTempo && hoIlCostumeDaBagno // true
console.log('Ho il costume ma piove. Vado al mare?', vadoAlMare)

// OR è un operatore logiche che collega più operazioni logiche alla volta

// true || true -> true
// false || true -> true
// true || false -> true
// false || false -> false

// state cercando di passare un esame ma il professore ha un debole per chi si chiama
// 'Mario' o per chi studia tantissimo
let oreDiStudioSufficienti = true
let tiChiamiMario = false

let esameCompletato = oreDiStudioSufficienti || tiChiamiMario // true

// TERNARY OPERATOR - OPERATORE TERNARIO -> esegue condizionalmente un'assegnazione
let myAge = 21
//operatore ternario -> condizione ? se true : se false
let entroInDiscoteca = myAge >= 18 ? 'si' : 'no'
console.log('Entrerò in discoteca?', entroInDiscoteca) 

// FINE RECAP

