import { products } from "./products.js";

export const addCarrito = (arrCard, cardNoRepeat, table)=>{

table.addEventListener("click", (e)=>{
  // let counter = Number(e.path[2].cells[2].innerText); 
  let idValueCard = e.target.attributes.id.value;
  let objCard = products.find(element => element.id == idValueCard);
  arrCard.push(objCard);

  // Sacando los elementos repetidos de arrCard
  for(let i = 0; i < arrCard.length; i++) {
    const noRepeat = arrCard[i];
    if(!cardNoRepeat.includes(arrCard[i])) {
      cardNoRepeat.push(noRepeat)
    }
  }
  console.log(counterInicio)
  
  loadStorage(cardNoRepeat)
    
})

};

// AÑADIENDO ARRAY AL SESSIONSTORAGE 
function loadStorage (def) {

  sessionStorage.setItem("cardNoRepeat", JSON.stringify(def))
}