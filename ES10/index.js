let array = [1,4,6,7,1,[1,4,4,[13,31,4,5],4],1,[2,3],]
console.log (array.flat(1));




// ejecutar funciones a los elementos
let array1 = [1,2,3,4,5];
console.log(array1.flatMap(value => [value, value * 2]));


let hello = '              hello world';
console.log(hello);


// ELIMINIAS LOS ESPACIOS ANTERIORES AL TEXTO, LO MISMO CON END
console.log(hello.trimStart());


// NUEVA FORMA PARA MANEJAR EL CATCH

const anotherFunction = async () => {
    try{
        const hello = await helloWorld();
        console.log(hello);
    } catch {

        // YA NO ES NECESARIO LLAMAR EL OBJETO CATCH EN EL SCOMPE DE LA FUNCION YA EST[A INCLUIDO]
        console.log(error);
    }
};
anotherFunction();


// CREAR UN OBJETO EN BASE A LOS ELEMENTOS DE UN ARRAY

let entries = [["name", "Oscar"],["age", 32],]
console.log(Object.fromEntries(entries));


let mySymbol = `My Symbol`;
let symbol = Symbol(mySymbol);
console.log(symbol.description);