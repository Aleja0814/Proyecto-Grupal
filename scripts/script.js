import { menuProductos } from "./modules/menuProductos.js";
import { menuFiltrar } from "./modules/menuFiltrar.js";
import { addCarrito } from "./modules/addCarrito.js";
import { addProductos } from "./modules/addProducts.js"
import { counterTable } from "./modules/counterTable.js";

// SIRVE PARA DESPLEGAR EL MENU PRODUCTOS UBICADO EN EL HEADER
let menuFiltrarInicio = document.getElementById("menu-filtrar-inicio");
let filtrar = document.getElementById("filtrar");
menuProductos(menuFiltrarInicio, filtrar);

// SIRVE PARA MOSTRAR LA TABLA DE PRODUCTOS UBICADO EN EL MAIN
let table = document.getElementById("table");
let h2 = document.querySelector("h2");
menuFiltrar(menuFiltrarInicio, table, h2)

// GUARDANDO INFORMACION EN EL SESSIONSTORAGE PARA LUEGO AÑADIR AL CARRITO 
let arrCard = [];
let cardNoRepeat = [];
addCarrito(arrCard, cardNoRepeat, table)

// FUNCION DONDE PIDO INFORMACION DEL SESSIONSTORAGE PARA PINTAR LA TABLA 
let tBody = document.getElementById("t-body");
addProductos(tBody)

// SIRVE PARA DARLE FUNCIONALIDAD A LOS BOTONES DE + Y - EN EL CARRITO
counterTable(tBody)

// MODAL
const carritoModal = document.getElementById("carrito-modal");
carritoModal.addEventListener("click", () => {
  let modal = document.getElementById("modal");
  modal.style.display = "block";

})


// CERRAR MODAL 
const cerrarModal = document.getElementById("cerrar-modal");

cerrarModal.addEventListener("click", () => {

  let modal = document.getElementById("modal");
  modal.style.display = "none"

})