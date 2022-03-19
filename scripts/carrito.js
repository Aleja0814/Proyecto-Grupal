import { menuProductos } from "./modules/menuProductos.js";
import { products } from "./modules/products.js";
import { showProduct } from "./modules/showProduct.js";

// // PINTANDO LAS CARTAS DE CADA PRENDA EN LA TABLA
let table = document.getElementById("table");
let menuFiltrar = document.getElementById("menu-filtrar-carrito");
let filtrar = document.getElementById("filtrar")



// MENU DESPLEGABLE DE FILTRAR
menuProductos(menuFiltrar, filtrar)
let pantalon = products.filter(item => item.type == "Pantalon")
let pantaloneta = products.filter(item => item.type == "Pantaloneta")
let camisa = products.filter(item => item.type == "Camisa")
let gorra = products.filter(item => item.type == "Gorra")

let h1 = document.querySelector("h1")
let titulo = document.getElementById("title-carrito")
let total = document.getElementById("total")
let tabla = document.querySelector("table")



menuFiltrar.addEventListener("click", (e) => {
  e.preventDefault()

  if (e.target.classList.value == "Pantalon") {
    table.innerHTML = ""
    table.style.display = "flex"
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
      table.style.display = "flex"
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
        table.style.display = "flex"
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
          table.style.display = "flex"
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