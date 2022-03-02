// Arrow Functions, Promesas y Parámetros en objetos




// OBJETOS MEJORADOS en ESC6


let name = 'oscar';
let age = 'oscar';


//ES5
obj = {name: name, age : age};

// ES6
obj2 = {name, age};  
console.log(obj2);


const names = [
    {name : 'Oscar', age :  32  },
    {name : 'Luis', age :  22  }
];


// con funcion anonima antes de ES5
let ListNamesES5 = names.map(function (item) {
    console.log(item.name);
})
// ES6

    // OPTION1
let ListNamesES6_1 = names.map(item => console.log(item.name));

    // OPTION2
const ListNamesES6_2 = (names, age, country) => {

        // aqui va el codigo de la arrow function

}

    // OPTION3 cuando solo voy a pasar solo 1 item a la funcion
const ListNamesES6_3 = names => {

        // aqui va el codigo de la arrow function

}

    // OPTION4 sintaxis completa con el return de num elevado al cuadrado
const square = num => num * num;




// PROMESAS
// en algun momento va a pasar algo que queremos
 
// basicamente un if y la ejecucion de el return de ese if con then or catch

const helloPromise = () => {
    return new Promise ((resolve, reject) => {
        if (true) {
            resolve('Positivo');
        } else {
            reject('Negativo');
        }
    });

}
// EJECUTARLA PROMESA

helloPromise()
    .then(response => console.log(response))
    .then(response => console.log('golas'))
    .catch(response => console.log(error));

let obj = 'oscar';
let obj2 = 32;
