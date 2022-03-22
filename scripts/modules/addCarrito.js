import { addProductos } from "./addProducts.js";
import { getData } from "./fakeApi.js";

export const addCarrito =   (arrCard, cardNoRepeat, table)=>{

table.addEventListener("click",  async (e)=>{
  // let counter = Number(e.path[2].cells[2].innerText); 

 let products =  await getData("http://localhost:4000/productos")
 console.log(products)

  let idValueCard = e.target.attributes.id.value;
  let objCard = products.find(element => element.id == idValueCard);
  

  // Sacando los elementos repetidos de arrCard
  for(let i = 0; i < arrCard.length; i++) {
    const noRepeat = arrCard[i];
    if(!cardNoRepeat.includes(arrCard[i])) {
      cardNoRepeat.push(noRepeat)
    }
  }
  
  loadStorage(cardNoRepeat)
    
})

};

// AÑADIENDO ARRAY AL SESSIONSTORAGE 
function loadStorage (def) {

  sessionStorage.setItem("cardNoRepeat", JSON.stringify(def))
}