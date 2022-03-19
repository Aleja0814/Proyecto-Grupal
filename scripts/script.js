import { menuProductos } from "./modules/menuProductos.js";
import { products } from "./modules/products.js";
import { showProduct } from "./modules/showProduct.js";

// MENU DESPLEGABLE DE FILTRAR
let menuFiltrar = document.getElementById("menu-filtrar-inicio");
let filtrar = document.getElementById("filtrar");
menuProductos(menuFiltrar, filtrar);

let table = document.getElementById("table");
let h2 = document.querySelector("h2")

let pantalon = products.filter(item => item.type == "Pantalon");
let pantaloneta = products.filter(item => item.type == "Pantaloneta");
let camisa = products.filter(item => item.type == "Camisa");
let gorra = products.filter(item => item.type == "Gorra");

menuFiltrar.addEventListener("click", (e) => {
  if (e.target.classList.value == "Pantalon") {
    table.innerHTML="";
    table.style.display = "block"
    showProduct(pantalon, table)
    h2.style.display = "none"
  } else {
    table.style.display = "none"
    if(e.target.classList.value == "Pantaloneta"){
      table.innerHTML=""
      table.style.display = "block"
      showProduct(pantaloneta, table)
      h2.style.display = "none"
    } else {
      table.style.display = "none"
      if(e.target.classList.value == "Camisa"){
        table.innerHTML=""
        table.style.display = "block"
        showProduct(camisa, table)
        h2.style.display = "none"
      } else{
        table.style.display = "none"
        if(e.target.classList.value == "Gorra"){
          table.innerHTML=""
          table.style.display = "block"
          showProduct(gorra, table)
          h2.style.display = "none"
        }
      }
   
    }
  }
  })

// BOTON FUNCINAL PARA AÑADIR AL CARRITO
// let objValidacionGlobal = objValidacion;
let arrCard = [];
let cardNoRepeat = [];
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
    
});
  
  
  // AÑADIENDO ARRAY AL SESSIONSTORAGE 
  function loadStorage (def) {

  sessionStorage.setItem("cardNoRepeat", JSON.stringify(def))
}