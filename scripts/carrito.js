// CODIGO DE ALEJA 
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





// CODIGO DE PABLO 
let tBody = document.getElementById("t-body");

document.addEventListener("DOMContentLoaded", ()=>{

  let arrCards = JSON.parse(sessionStorage.getItem("cardNoRepeat"))

  // arrCards.filter(element => element.id !== )
  arrCards.forEach((element, index) => {
    // Creando tr 
    const rowCarrito = document.createElement("tr");

    // Creando tds de #
    const tdNum = document.createElement("td");
    tdNum.textContent = index + 1;

    // Crando tds de Item
    const tdProduct = document.createElement("td");
    tdProduct.textContent = `${element.type} de talla ${element.talla}`;

    // creando tds de Cantidad 
    const tdCantidad = document.createElement("td");
    tdCantidad.setAttribute("id", index + 1);
    tdCantidad.textContent = 1;

    // Creando tds de Acción
    const tdButtons = document.createElement("td");
    const buttonSum = document.createElement("button");
    const buttonRes = document.createElement("button");
    tdButtons.appendChild(buttonSum);
    tdButtons.appendChild(buttonRes);
    buttonSum.textContent = "+";
    buttonRes.textContent = "-";

    // Creando tds  de Total
    const tdPrecio = document.createElement("td");
    tdPrecio.setAttribute("id", `precio${index + 1}`)
    tdPrecio.textContent = element.price;

    // Añadiendo todos los td al tr 
    rowCarrito.appendChild(tdNum);
    rowCarrito.appendChild(tdProduct);
    rowCarrito.appendChild(tdCantidad);
    rowCarrito.appendChild(tdButtons);
    rowCarrito.appendChild(tdPrecio);

    // Añadiendo al tBody los rows
    tBody.appendChild(rowCarrito)

  });
});



tBody.addEventListener("click", (e)=>{
  let counter = Number(e.path[2].cells[2].innerText); 
  // let resultCounter = counter + 
  // Capturando id del td cantidad dando click en los botones de sumar o restar
  const signRow = e.path[2].cells[2].attributes.id.value;

  // Capturando la etiqueta td cantidad 
  let tdCantidad = document.getElementById(signRow);

  // Capturando el + o el - 
  let sign = e.target.innerText;

  // Si da en el boton + suma, si da en el boton - resta 
  if(sign == "+") {
    counter += 1;
    tdCantidad.innerHTML = counter
  } else if(sign == "-" && counter > 1) {
    counter -= 1;
    tdCantidad.innerHTML = counter
  }

  
})