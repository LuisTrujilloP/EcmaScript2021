// Object.entries IMPRIMES EL OBJETO .  .LENGTH SACAS LA CANTIDAD DE OBJETOS

// const data = {
//     frontent : 'Oscar',
//     backtent : 'Luis',
//     desing : 'Santiago',
// }

// const entries = Object.entries(data); {
//     console.log(entries);
//     console.log(entries.length);

// } 

// Object.values  ME DEVUELVE LOS VALORES DE UN OBJETO EN UN ARREGLO, lo que quiere decir 
// que no va a mostrar la categoria, solo saldra el valor asignado a la ausente catergoria


const data = {
    frontend : 'Oscar',
    backtend : 'Luis',
    desing : 'Santiago',
}
const values = Object.values(data);
console.log(values);
console.log(values.length);


const string = 'hello';
console.log(string.padStart(7,'hi'));
console.log(string.padEnd(12,'  ------'));
console.log('food'.padEnd(12,'   -------'));

// no es mala practica dejar la coma al final

const obj = {
    obj : '23',
}