import { products } from "./products.js";

export const addCarrito = (arrCard, cardNoRepeat, table)=>{
  table.addEventListener("click", (e)=>{
    // capturando contador ubicado en la tarjeta
    const counterSpan = e.path[1].childNodes[1].childNodes[2].childNodes[1];
    // const counterString = e.path[1].childNodes[1].childNodes[2].childNodes[1].innerText;
  const counterValue = Number(counterSpan.innerText)
  console.log(typeof(counterValue))
  
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
  
  // Añadiendo una unidad al contador en cada click
  counterSpan.innerHTML = counterValue + 1
  
  loadStorage(cardNoRepeat)
    
})

};

// AÑADIENDO ARRAY AL SESSIONSTORAGE 
function loadStorage (def) {

  sessionStorage.setItem("cardNoRepeat", JSON.stringify(def))
}