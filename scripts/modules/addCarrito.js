import { addProductos } from "./addProducts.js";
// import { fakeApi } from "./fakeApi.js";
import { products } from "./products.js";

export const addCarrito = (cardNoRepeat, table, tBody, totalCantidad, totalPrecio, counterTotalCantidad, counterTotalPrecio) => {
  // Escuchando el click en el boton de la carta por medio de la tabla (mala practica)
  let counterValue = 0;
  // let totalCantidad = document.getElementById("total-cantidad");
  table.addEventListener("click", async (e)=>{
    // console.log(totalCantidad)
    // let products = await fakeApi("http://localhost:4000/productos")
    // console.log(products)
    // capturando contador ubicado en la tarjeta
    const counterSpan = e.path[1].childNodes[1].childNodes[2].childNodes[1];
    
    
    let idCounterCard = counterSpan.attributes[0].value;

    let objCard = products.find(element => `counter-card-${element.id}` == idCounterCard);
    // console.log ( objCard)
    // Sacando los elementos repetidos de arrCard
    
    if(!cardNoRepeat.includes(objCard) || cardNoRepeat.length === 0) {
      cardNoRepeat.push(objCard);
      counterValue = Number(counterSpan.innerText) + 1
      counterSpan.innerHTML = counterValue;
      addProductos(tBody, counterValue, objCard);
      // sumando al total de las cantidades
      counterTotalCantidad += 1;
      counterTotalPrecio += objCard.price;
      // console.log(tdPrecio.innerText)
      } else {
        counterSpan.innerHTML = Number(counterSpan.innerText) + 1;
        let td = document.getElementById(objCard.id);
        td.innerHTML = Number(counterSpan.innerText);
        let tdPrecio = document.getElementById(`precio-${objCard.id}`)
        counterValue += 1
        tdPrecio.innerHTML = counterValue * objCard.price;
        // sumando al total de las cantidades
        counterTotalCantidad += 1;
        // console.log()
        counterTotalPrecio += objCard.price;
    }
    totalCantidad.innerHTML = counterTotalCantidad;
    totalPrecio.innerHTML = counterTotalPrecio;
  })
};