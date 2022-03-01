// Multilineas

//antes
let Lore1 = "holsa hfawol fsdi;s wpqw djjal ahosi;cab  \n" + "gola"

// es6 

let Lore2 = `holsa hfawol fsdi;s wpqw djjal ahosi;cab 

gola`


console.log (Lore2);
console.log (Lore1);

// destructuracion de elementos


let person = {
    'name': 'oscar',
    'age': '23',
    'country': 'LO',
    'sex': 'M',
}

console.log(person.age, person.country, person.name, person.sex);

let = { name } = person;
console.log(name);

// UNIR ELEMENTOS SEPARANDOLOS EN VARIABLE

let team1 = ['Oscar', 'Julian', 'Juliana'];
let team2 = ['David', 'Adrian', 'Maria'];



let education = ['Daniel', ...team1, ...team2];
console.log(education);

// Scope global
{
    // aqui no podemos acceder a h1

    var hg = 'global let';
    

};


// scope de bloque
{
    // aqui podemos acceder a h2
    let hh = 'global let';

};

console.log(hg);
console.log(hh);


hh = 'a'; //  a let lo podemos alterar


var hola = 'hola'   //scope global
let gola = 'gola'   //scope de bloque



const a = 'a';
a = 'b';
console.log(a);