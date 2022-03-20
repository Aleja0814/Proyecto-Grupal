import { showProduct }  from "./showProduct.js";
import { products } from "./products.js";

let pantalon = products.filter(item => item.type == "Pantalon");
let pantaloneta = products.filter(item => item.type == "Pantaloneta");
let camisa = products.filter(item => item.type == "Camisa");
let gorra = products.filter(item => item.type == "Gorra");
export const menuFiltrar = (menuFiltrar, table, h2)=>{


// MENU FILTRAR DEL INICIO 
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

};

// MENU FILTRAR DEL CARRITO 
export const menuFiltrarCarrito = (menuFiltrar, table, titulo, total, tabla)=>{
  menuFiltrar.addEventListener("click", (e) => {

    if (e.target.classList.value == "Pantalon") {
      table.innerHTML = ""
      table.style.display = "block"
      console.log("pantalon elegido")
      showProduct(pantalon, table)
      titulo.style.display = "none"
      total.style.display = "none"
      tabla.style.display = "none"
  
    }
    else {
      table.style.display = "none"
      if (e.target.classList.value == "Pantaloneta") {
        table.innerHTML = ""
        table.style.display = "block"
        console.log("pantaloneta elegido")
        showProduct(pantaloneta, table)
        titulo.style.display = "none"
        total.style.display = "none"
        tabla.style.display = "none"
      }
      else {
        table.style.display = "none"
        if (e.target.classList.value == "Camisa") {
          table.innerHTML = ""
          table.style.display = "block"
          console.log("camisa elegido")
          showProduct(camisa, table)
          titulo.style.display = "none"
          total.style.display = "none"
          tabla.style.display = "none"
        }
        else {
          table.style.display = "none"
          if (e.target.classList.value == "Gorra") {
            table.innerHTML = ""
            table.style.display = "block"
            console.log("gorra elegido")
            showProduct(gorra, table)
            titulo.style.display = "none"
            total.style.display = "none"
            tabla.style.display = "none"
          }
        }
  
      }
  
    }
  })
  
}

