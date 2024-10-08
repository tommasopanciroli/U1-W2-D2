// ARRAYS
// un array è una collezione (lista) di valori

const test = [] // array vuoto

const names = ['Tommaso', 'Stefano', 'Giulia', 'Mark', 'Loreta']
const numbers = [0, 1000, 24, 67, 89]
const booleans = [true, true, false, true]
const mixed = ['Martino', true, 23, false, 90] // poco usato

const smartphones = [
  {
    brand: 'Apple',
    model: 'iPhone 16 Pro Max',
  },
  {
    brand: 'Samsung',
    model: 'S22 Ultra',
  },
  {
    brand: 'Xiaomi',
    model: 'Note 9 Pro Ultra',
  },
]

// un array non identifica i propri elementi tramite nome
// l'unica cosa che identifica gli elementi di un array è la loro POSIZIONE

// le posizioni degli array in JS partono da (0)
const firstSmartphone = smartphones[0] // iPhone
const secondSmartphone = smartphones[1] // Samsung
const thirdSmartphone = smartphones[2] // Xiaomi

console.log(smartphones[0].brand) // Apple
console.log(smartphones[2].model) // Note 9 Pro Ultra

// gli oggetti il 99% dell volte si esplorano con la DOT NOTATION (.)
// gli array si esplorano grazie all'INDICE (la posizione, che parte sempre da 0)

// il metodo toUpperCase() rende una stringa maiuscola
// come recupero il nome 'Stefano' dall'array names
// rendo infine maiuscolo la stringa con .toUpperCase
console.log(names[1].toUpperCase()) // 'STEFANO'

const complexArrayOfCars = [
  {
    name: 'Classe A',
    brand: 'Mercedes',
    colors: ['Midnight Black', 'Coral Blue', 'Light Orange'],
    interiors: {
      material: ['Leather', 'Plastic'],
      color: ['Black', 'Brown'],
    },
    engine: {
      liters: 1.5,
      hp: 180,
      manufacturer: {
        country: 'Germany',
        city: 'Berlin',
      },
    },
  },
  {
    name: 'Focus',
    brand: 'Ford',
    colors: ['Dark Black', 'Light Blue', 'Sparkling Orange'],
    interiors: {
      material: ['Leather', 'Plastic'],
      color: ['Gray', 'Brown'],
    },
    engine: {
      liters: 1.6,
      hp: 170,
      manufacturer: {
        country: 'USA',
        city: 'New York',
      },
    },
  },
]

console.log(complexArrayOfCars[1].brand) // "Ford"
console.log(complexArrayOfCars[0].colors[2]) // "Light Orange"
console.log(complexArrayOfCars[0].interiors.material[1]) // "Plastic"
console.log(complexArrayOfCars[1].engine.manufacturer.city) // "New York"

// per accedere agli elementi di un array si utilizza l'indice, che parte da 0
// OGNI array ha una lunghezza, che è determinata dal numero dei suoi elementi
// sapendo la lunghezza noi possiamo sempre trovare l'ULTIMO elemento di un array
// l'ultimo elemento avrà sempre indice [lunghezza -1]
// la lunghezza è una proprietà che si chiama 'length'

console.log(complexArrayOfCars.length) // 2
console.log(numbers.length) // 4

// aggiungere un elemento ad un array

// aggiungere in FONDO
const emptyArray = []
emptyArray.push('Sony')
emptyArray.push('LG')
emptyArray.push('Samsung')
console.log('emptyArray', emptyArray)

// aggiungere in CIMA
emptyArray.unshift('Philips')
console.log('emptyArray', emptyArray)

// elimino l'ULTIMO ELEMENTo
emptyArray.pop()
console.log('emptyArray', emptyArray)

// elimino l'elemento in SECONDA POSIZIONE
emptyArray.splice(1, 1) // elimino all'indice 1 un elemento
console.log('emptyArray', emptyArray)
