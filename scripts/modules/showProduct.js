// PINTANDO LAS CARTAS DE CADA PRENDA EN LA TABLA
export let showProduct = (product,container)=>{
    
    
product.forEach(item=>{
    let {img,price,talla}=item
 // creando contenedor
 let card = document.createElement("div");
 card.setAttribute("class", "card");
  // Creando etiqueta img
 let imagen = document.createElement("img");
  imagen.setAttribute("src", img);

   //creando contenedor para talla y precio
   let containerTP = document.createElement("div");

   // Creando etiqueta para talla y precio
   let tallaje = document.createElement("span");
   tallaje.textContent = "Talla: " + talla;
   
  let precio = document.createElement("span");
   precio.textContent = "Precio: $" + price;

   // Añadiendo las equitas al contenedor
   let button = document.createElement("button");
   button.textContent = "Agregar";

   // Añadiendo contenedor a la tabla
   card.appendChild(imagen);
   containerTP.appendChild(tallaje);
   containerTP.appendChild(precio);
   card.appendChild(containerTP)
   card.appendChild(button);
   container.appendChild(card);
})
};



   
   

   


    

   

    

  