// Async Await   promesas, una nueva caracteristicas de las mas importantes






const helloWorld = () => {
    return new Promise ((resolve,reject) => {

(true)
  ? setTimeout(() => resolve('Hello World'), 3000)
  : reject(new Error('TestError'))

    })
};




//  asi se llama antes

const helloAsyng = async () => {

    const hello = await helloWorld();
    console.log(hello);

}
helloAsyng();




// forma correcta de ejecutar los errores

const anotherFunction = async () => {
    try{
        const hello = await helloWorld();
        console.log(hello);
    } catch(error) {
        console.log(error);
    }
};
anotherFunction();