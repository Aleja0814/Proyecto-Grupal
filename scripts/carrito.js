// CODIGO DE ALEJA 
import { menuFiltrarCarrito } from "./modules/menuFiltrar.js";
import { menuProductos } from "./modules/menuProductos.js";
import { addProductos } from "./modules/addProducts.js" 
import { counterTable } from "./modules/counterTable.js";


let table = document.getElementById("table");
let menuFiltrar = document.getElementById("menu-filtrar-carrito");
let filtrar = document.getElementById("filtrar")
// SIRVE PARA DESPLEGAR EL MENU PRODUCTOS UBICADO EN EL HEADER
menuProductos(menuFiltrar, filtrar)


let titulo = document.getElementById("title-carrito")
let total = document.getElementById("total")
let tabla = document.querySelector("table")
// SIRVE PARA MOSTRAR LA TABLA DE PRODUCTOS UBICADO EN EL MAIN
menuFiltrarCarrito(menuFiltrar, table, titulo, total, tabla)


// CODIGO DE PABLO 
let tBody = document.getElementById("t-body");
// FUNCION DONDE PIDO INFORMACION DEL SESSIONSTORAGE PARA PINTAR LA TABLA 
addProductos(tBody)


counterTable(tBody)
// tBody.addEventListener("click", (e)=>{
//   let counter = Number(e.path[2].cells[2].innerText); 
//   // let resultCounter = counter + 
//   // Capturando id del td cantidad dando click en los botones de sumar o restar
//   const signRow = e.path[2].cells[2].attributes.id.value;

//   // Capturando la etiqueta td cantidad 
//   let tdCantidad = document.getElementById(signRow);

//   // Capturando el + o el - 
//   let sign = e.target.innerText;

//   // Si da en el boton + suma, si da en el boton - resta 
//   if(sign == "+") {
//     counter += 1;
//     tdCantidad.innerHTML = counter
//   } else if(sign == "-" && counter > 1) {
//     counter -= 1;
//     tdCantidad.innerHTML = counter
//   }

  
// })