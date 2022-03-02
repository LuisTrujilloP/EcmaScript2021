// REPLACE ALL

const string = "JavaScript es maravilloso, con JavaScript puedo lograr mucho";
const replacedString = string.replace("JavaScript", "Python");

const replacedString2 = string.replaceAll("JavaScript", "Python");

console.log(replacedString2);


// METODOS PRIVADOS PARA USARLOS DENTRO DE LAS CLASES

class Message {
    
    // asi lo podemos volver privado  con el #
    #show(val) {
        console.log(val);
    };
};

const messege = new Message();
messege.show('Hola');



// PROMISE ANY

// exporta la primera promesa que se ejecute

const promise1 = new Promise((resolve,reject) => ("1"));
const promise2 = new Promise((resolve,reject) => ("2"));
const promise3 = new Promise((resolve,reject) => ("3"));

Promise.any([promise1,promise2,promise3])
    .then(response => console.log(response));


// WeakREF
// referenciar de forma debil a un objeto

class anyClass {
    constructor(element) {
        this.ref = new WeakRef(element)
    }
    {...}
}

// Comparar valores con los nuevos operadors ||=  ??=  &&=

// &&=
let isTrue = true;
let isFalse = true;
console.log(isTrue &&= isFalse);
// ||=
let isTrue = true;
let isFalse = true;
console.log(isTrue ||= isFalse);

// ??=
let isTrue = true;
let isFalse = true;
console.log(isTrue ??= isFalse);