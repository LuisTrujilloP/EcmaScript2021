// // // // // // // // // // // // // CLASES \\ \\ \\ \\ \\ \\ \\ \\ \\ \\ \\ \\ 
class calculator {


    // Asignar un constructor  / variables de scope global / el constructor inicializa la clase


// llamar las variables

    constructor() {
        //  variables de scope global
        this.valueA = 0;
        this.valueB = 0;

    }
// USO EL METODO DE SUMAR


// estructurar las  funciones

    sum(valueA, valueB) {
        this.valueA = valueA;
        this.valueB = valueB;
        return this.valueB + this.valueA;
    }
}

// Exportar el resultado o ejecutar las funciones asignando los valores
const calc = new calculator();
console.log(calc.sum(2, 2));



// // // // // // // // // // // //  // MODULOS \\ \\ \\ \\ \\ \\ \\ \\ \\ \\ \\ \\            

// IMPORT Y EXPORT

import { hello } from './module.js';
hello();


// GENERATORS    UNA FUNCION ESPECIAL QUE RETORNA 
// UNA SERIE DE VALORES SEGUN EL ALGORIDMO DEFINIDO

// CICLO  WHILE 


function* heloWorld(){
    if (true) {
        yield 'Hello, ';
    }
    if (true) {
        yield 'World, ';
    }
};

// aqui definimos la cantidad de pasos que daremos
const generatorHello = heloWorld(); 
console.log(generatorHello.next().value);

console.log(generatorHello.next().value);


// al llamar algo que no existe no se va a ignorar, lo definira como undefined
console.log(generatorHello.next().value);

// AQUI TERMINA ES6