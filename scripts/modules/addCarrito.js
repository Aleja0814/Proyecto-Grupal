import { addProductos } from "./addProducts.js";
import { products } from "./products.js";

export const addCarrito = (arrCard, cardNoRepeat, table, tBody)=>{
  // Escuchando el click en el boton de la carta por medio de la tabla (mala practica)
  table.addEventListener("click", (e)=>{

    // let tdCantidad = e.path[3].childNodes[3].childNodes[1].childNodes[7].childNodes[1].childNodes;
    // capturando contador ubicado en la tarjeta
    const counterSpan = e.path[1].childNodes[1].childNodes[2].childNodes[1];
    const counterValue = Number(counterSpan.innerText)
    
    let idValueCard = e.target.attributes.id.value;
    let objCard = products.find(element => element.id == idValueCard);
    arrCard.push(objCard);
    
    // Sacando los elementos repetidos de arrCard
    for(let i = 0; i < arrCard.length; i++) {
      const noRepeat = arrCard[i];
      if(!cardNoRepeat.includes(arrCard[i])) {
        cardNoRepeat.push(noRepeat);    
      } 
      
    }
    loadStorage(cardNoRepeat)

    addProductos(tBody, counterValue)


    // let tdCantidad = document.getElementById(`counter-${objCard.id}`)
    // tdCantidad.innerHTML = counterValue + 1

    // Añadiendo una unidad al contador en cada click
    counterSpan.innerHTML = counterValue + 1;
    // .innerHTML = counterValue + 1;
    // console.log(tdCantidad)

  
    // loadStorage(cardNoRepeat)
    
  })

};

// AÑADIENDO ARRAY AL SESSIONSTORAGE 
function loadStorage (def) {

  sessionStorage.setItem("cardNoRepeat", JSON.stringify(def))
}