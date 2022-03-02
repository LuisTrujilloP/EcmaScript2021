// DINAMIC IMPORT  LLAMAR PIEZAS DE CODIGO 


const button = document.getElementById("btn");

button.addEventListener("click", async () => {
    const module = await import("./file.js");
    module.h();
})