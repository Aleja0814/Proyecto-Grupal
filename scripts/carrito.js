// CODIGO DE ALEJA 
import { menuFiltrarCarrito } from "./modules/menuFiltrar.js";
import { menuProductos } from "./modules/menuProductos.js";
import { addProductos } from "./modules/addProducts.js" 
import { counterTable } from "./modules/counterTable.js";
import { addCarrito } from "./modules/addCarrito.js"


let table = document.getElementById("table");
let menuFiltrar = document.getElementById("menu-filtrar-carrito");
let filtrar = document.getElementById("filtrar")
// SIRVE PARA DESPLEGAR EL MENU PRODUCTOS UBICADO EN EL HEADER
menuProductos(menuFiltrar, filtrar)


let titulo = document.getElementById("title-carrito")
let total = document.getElementById("total")
let tableCarrito = document.querySelector("table")
// SIRVE PARA MOSTRAR LA TABLA DE PRODUCTOS UBICADO EN EL MAIN
menuFiltrarCarrito(menuFiltrar, table, titulo, total, tableCarrito)


// CODIGO DE PABLO 
let tBody = document.getElementById("t-body");
// FUNCION DONDE PIDO INFORMACION DEL SESSIONSTORAGE PARA PINTAR LA TABLA 
addProductos(tBody)

// SIRVE PARA DARLE FUNCIONALIDAD A LOS BOTONES DE + Y - EN EL CARRITO
counterTable(tBody)

let arrCard = [];
let cardNoRepeat = [];
// GUARDANDO INFORMACION EN EL SESSIONSTORAGE PARA LUEGO AÑADIR AL CARRITO 
addCarrito(arrCard, cardNoRepeat, table)