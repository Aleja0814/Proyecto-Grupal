import { addProductos } from "./addProducts.js";
// import { fakeApi } from "./fakeApi.js";
import { products } from "./products.js";

export const addCarrito = (cardNoRepeat, table, tBody) => {
  // Escuchando el click en el boton de la carta por medio de la tabla (mala practica)
  table.addEventListener("click", async (e)=>{
    // let products = await fakeApi("http://localhost:4000/productos")
    // capturando contador ubicado en la tarjeta
    const counterSpan = e.path[1].childNodes[1].childNodes[2].childNodes[1];

    let counterValue = 0;
    
    // let idCounterCard = counterSpan.attributes[0].value;
    let idCounterCard = counterSpan.attributes[0].value;

    let objCard = products.find(element => `counter-card-${element.id}` == idCounterCard);

    // Sacando los elementos repetidos de arrCard

    if(!cardNoRepeat.includes(objCard) || cardNoRepeat.length === 0) {
      cardNoRepeat.push(objCard);
      counterValue = Number(counterSpan.innerText) + 1
      counterSpan.innerHTML = counterValue;
      addProductos(tBody, counterValue, idCounterCard, objCard, cardNoRepeat);

    } else {
        counterSpan.innerHTML = Number(counterSpan.innerText) + 1;
        let td = document.getElementById(objCard.id);
        td.innerHTML = Number(counterSpan.innerText);
    }  
  })

};