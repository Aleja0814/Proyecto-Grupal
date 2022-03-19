import { menuProductos } from "./modules/menuProductos.js";
import { products } from "./modules/products.js";
import { showProduct } from "./modules/showProduct.js";

// MENU DESPLEGABLE DE FILTRAR
let menuFiltrar = document.getElementById("menu-filtrar-inicio");
let filtrar = document.getElementById("filtrar")
menuProductos(menuFiltrar, filtrar)

let table = document.getElementById("table");
let h2 = document.querySelector("h2")

let pantalon = products.filter(item => item.type == "Pantalon")
let pantaloneta = products.filter(item => item.type == "Pantaloneta")
let camisa = products.filter(item => item.type == "Camisa")
let gorra = products.filter(item => item.type == "Gorra")


menuFiltrar.addEventListener("click", (e) => {
  e.preventDefault()

  if (e.target.classList.value == "Pantalon") {
    table.innerHTML=""
    table.style.display = "flex"
    console.log("pantalon elegido")
    showProduct(pantalon, table)
    h2.style.display = "none"
    
  }
  else {
    table.style.display = "none"
    if(e.target.classList.value == "Pantaloneta"){
      table.innerHTML=""
          table.style.display = "flex"
          console.log("pantaloneta elegido")
          showProduct(pantaloneta, table)
          h2.style.display = "none"
    }
    else {
      table.style.display = "none"
      if(e.target.classList.value == "Camisa"){
        table.innerHTML=""
            table.style.display = "flex"
            console.log("camisa elegido")
            showProduct(camisa, table)
            h2.style.display = "none"
      }
      else{
        table.style.display = "none"
        if(e.target.classList.value == "Gorra"){
          table.innerHTML=""
              table.style.display = "flex"
              console.log("gorra elegido")
              showProduct(gorra, table)
              h2.style.display = "none"
        }
      }
   
  }
  
}
})











