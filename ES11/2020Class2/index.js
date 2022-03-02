//  BIG INT nos permite trabajar con numeros enteros mayores a 2**53 

const bignumber = 9007199254740991n;
const anotherBignumber = BigInt(90071992547409910);

console.log(bignumber, anotherBignumber);


// PROMISE allSettled
// devuelve una promesa que se resuelva al finalizar todas las promesas en file

const promise1 = new Promise((resolve, reject) => reject("reject"))
const promise2 = new Promise((resolve, reject) => resolve("resolve"))
const promise3 = new Promise((resolve, reject) => resolve("resolve 1"))

Promise.allSettled ([promise1,promise2,promise3])
    .then(response => console.log(response));

// GLOCAL DISK
// PROPORCIONA UN ACCESO AL SCOPE GLOBAL, NO SOLO EN EL NAVEGADOR PERO TAMBIEN EN LAS APLICACIONES
// EN  NODE
console.log(window);
console.log(globalThis);

// OPERADOR DE NULL, OPERADOR LOGICO QUE NOS DEVUELVE NUESTRO 
const fooo = null ?? 'default';
console.log(fooo);

// OPTIONAL CHANGING


const user = {};
console.log(user?.profile?.email);


if (user?.profile?.email) {
    console.log('email')
} else{
    console.log('fail')
};