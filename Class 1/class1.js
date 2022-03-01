//antes de ES6 DECLARANDO UNA ESCTRUCTURA Y UNA FUNCION QUE IMPRIMA LA ESTRUCTURA

function newFunction (name, age, country) {

    var name = name || 'oscar';
    var age =  age || '32';
    var country =  country || 'MX';
    console.log(name, age, country)
}

//despues de ES6 DECLARANDO UNA ESCTRUCTURA Y UNA FUNCION QUE IMPRIMA LA ESTRUCTURA


function newFunction2 ( name = 'oscar', age = '32', country = 'Holanda') {

    console.log(name,age,country);

}

newFunction2();
newFunction2('Rich', '23', 'CO');


// template litrals   para separar o unir varios elementos

//ANTES
let hello = "Hellow"
let World = "World"
let epic = hello + ' ' + World; 
console.log(epic);



//DESPUES DE EM6
let epic2 = `${hello} ${World} `
console.log(epic2);

