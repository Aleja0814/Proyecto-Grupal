import { products } from "./modules/products.js";

// PINTANDO LAS CARTAS DE CADA PRENDA EN LA TABLA
let table = document.getElementById("table");

document.addEventListener("DOMContentLoaded", () => {

  products.forEach(product => {
    // creando contenedor
    let card = document.createElement("div");
    card.setAttribute("class", "card");
    // Creando etiqueta img
    let img = document.createElement("img");
    img.setAttribute("src", product.img);

    //creando contenedor para talla y precio
    let containerTP = document.createElement("div");


    // Creando etiqueta para talla y precio
    let talla = document.createElement("span");
    talla.textContent = "Talla: " + product.talla;

    let price = document.createElement("span");
    price.textContent = "Precio: $" + product.price;

    // Añadiendo las equitas al contenedor
    let button = document.createElement("button");
    button.textContent = "Agregar";

    // Añadiendo contenedor a la tabla
    card.appendChild(img);
    containerTP.appendChild(talla);
    containerTP.appendChild(price);
    card.appendChild(containerTP)
    card.appendChild(button);

    table.appendChild(card);

  });


})

// MENU DESPLEGABLE DE FILTRAR
let menuFiltrar = document.getElementById("menu-filtrar");

menuFiltrar.addEventListener("click", ()=> {

  // products.forEach(product => {
    let optionMenu = document.createElement("img");
    console.log(optionMenu)
    // optionMenu.classList.add("menu-filtrar");
    // optionMenu.textContent = product.type
    // menuFiltrar.appendChild(optionMenu)
  // });



  

})
