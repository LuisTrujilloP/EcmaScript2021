// Async Await   promesas, una nueva caracteristicas de las mas importantes


//  asi se llama antes

const helloAsyng = async () => {

    const hello = await helloWorld();
    console.log(hello);

}
helloAsyng();





const helloWorld = () => {
    return new Promise ((resolve,reject) => {

(true)  // and false
  ? setTimeout(() => resolve('Hello World'), 3000)
  : reject(new Error('TestError'))

    })
};




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