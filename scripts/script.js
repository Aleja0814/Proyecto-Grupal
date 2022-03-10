import { products } from "./modules/products.js";


let table = document.getElementById("table");

document.addEventListener("DOMContentLoaded", ()=>{
  
  products.forEach(product => {
    // creando contenedor
    let card = document.createElement("div");
    card.setAttribute("class", "card");
    // Creando etiqueta img
    let img = document.createElement("img");
    img.setAttribute("src", product.img);  
    
    // Creando etiqueta span
    let talla = document.createElement("span");
    talla.textContent = product.talla;

    let price = document.createElement("span");
    price.textContent = product.price;

    // Añadiendo las equitas al contenedor
    let button = document.createElement("button");

    // Añadiendo contenedor a la tabla
    card.appendChild(img);
    card.appendChild(talla);
    card.appendChild(price);
    card.appendChild(button);

    table.appendChild(card);

  });

console.log(table)

  
})