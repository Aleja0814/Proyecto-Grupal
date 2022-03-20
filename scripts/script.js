import { menuProductos } from "./modules/menuProductos.js";
import { menuFiltrar } from "./modules/menuFiltrar.js";
import { addCarrito } from "./modules/addCarrito.js";


let menuFiltrarInicio = document.getElementById("menu-filtrar-inicio");
let filtrar = document.getElementById("filtrar");
// SIRVE PARA DESPLEGAR EL MENU PRODUCTOS UBICADO EN EL HEADER
menuProductos(menuFiltrarInicio, filtrar);

let table = document.getElementById("table");
let h2 = document.querySelector("h2");
// SIRVE PARA MOSTRAR LA TABLA DE PRODUCTOS UBICADO EN EL MAIN
menuFiltrar(menuFiltrarInicio, table, h2)

let arrCard = [];
let cardNoRepeat = [];
// GUARDANDO INFORMACION EN EL SESSIONSTORAGE PARA LUEGO AÑADIR AL CARRITO 
addCarrito(arrCard, cardNoRepeat, table)