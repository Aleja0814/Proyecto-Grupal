import { menuProductos } from "./modules/menuProductos.js";
import { menuFiltrar } from "./modules/menuFiltrar.js";
import { addCarrito } from "./modules/addCarrito.js";
import { counterTable } from "./modules/counterTable.js";

// SIRVE PARA DESPLEGAR EL MENU PRODUCTOS UBICADO EN EL HEADER
let menuFiltrarInicio = document.getElementById("menu-filtrar-inicio");
let filtrar = document.getElementById("filtrar");
menuProductos(menuFiltrarInicio, filtrar);

// SIRVE PARA MOSTRAR LA TABLA DE PRODUCTOS UBICADO EN EL MAIN
let table = document.getElementById("table");
let picturesMedellin = document.getElementById("pictures-medellin");
menuFiltrar(menuFiltrarInicio, table, picturesMedellin)

// GUARDANDO INFORMACION EN EL SESSIONSTORAGE PARA LUEGO AÑADIR AL CARRITO 
let tBody = document.getElementById("t-body");
let cardNoRepeat = [];
addCarrito(cardNoRepeat, table, tBody)

// FUNCION DONDE PIDO INFORMACION DEL SESSIONSTORAGE PARA PINTAR LA TABLA 
// addProductos(tBody, table)

// SIRVE PARA DARLE FUNCIONALIDAD A LOS BOTONES DE + Y - EN EL CARRITO
counterTable(tBody)

  // MODAL
  const carritoModal = document.getElementById("carrito-modal");
  carritoModal.addEventListener("click", ()=>{
    let modal = document.getElementById("modal");
    modal.style.display = "block";

  })
  

// CERRAR MODAL 
  const cerrarModal = document.getElementById("cerrar-modal");

  cerrarModal.addEventListener("click", ()=>{

    let modal = document.getElementById("modal");
    modal.style.display = "none"

  })