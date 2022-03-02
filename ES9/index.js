// OPERADOR DE REPOSO, QUE PUEDE EXTRAER LAS PROPIEDADES DE UN OBJETO QUE AUN NO SE HA CONSTRUIDO
// es una forma de seleccionar los elementos dentro de un objeto en grupos, como el ejemplo, 
// separamos frontend
const obj = {
    frontend : 'Oscar',
    backtent : 'Luis',
    desing : 'Santiago',
};

// separamos frontend de el resto
let { frontend, ...all } = obj;

// por lo que al imprimir all se descarta frontent
console.log(all);


const Obj = {
    frontend : 'Oscar',
    backtent : 'Luis',
};

// anidar los elementos del objeto superior con el inferior
// para esto usamos ... seguido del nombre del objeto
const Obj1 = {
    ...Obj,
    desing : 'Santiago',
};
console.log(Obj1);



// PROMISE.FINALY 

// Ejecutar funciones sengun sea el caso sabiendo cuando a finalizado el llamdo y 
// ejecutamos acciones consiguientes al final dependiendo del resultado

// basicamente un if y la ejecucion de el return de ese if con then or catch


const helloWorld = () => {
    return new Promise ((resolve,reject) => {

        (true)  // and false
        ? setTimeout(() => resolve('Hello World'), 3000)
        : reject(new Error('TestError'))

    })
};

// EJECUTARLA PROMESA

helloWorld()
    .then(response => console.log(response))
    .catch(error => console.log(error))
    .finally(() => console.log('finish'))



// para manejar las fechas

const   regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/
const   match = regexData.exec('2018-04-20');
const   year = match[1];
const   month = match[2];
const   day = match[3];

console.log(year, month);

