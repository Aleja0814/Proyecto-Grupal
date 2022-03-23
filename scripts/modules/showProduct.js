// PINTANDO LAS CARTAS DE CADA PRENDA EN LA TABLA
export let showProduct = (product,container)=>{
    
    
   product.forEach((item, index)=>{
       let {img,price,talla, id}=item
      // creando contenedor
      const card = document.createElement("div");
      card.setAttribute("class", "card");

      // Creando etiqueta img
      const imagen = document.createElement("img");
      imagen.setAttribute("src", img);
   
      //creando contenedor para talla y precio
      const containerTP = document.createElement("div");
   
      // Creando etiqueta para talla, precio y cantidad
      // talla 
      const tallaje = document.createElement("span");
      tallaje.textContent = "Talla: " + talla;
      // precio 
      const precio = document.createElement("span");
      precio.textContent = "Precio: $" + price;
      // cantidad
      const containerCounter = document.createElement("div");
      const counterText = document.createElement("span");
      counterText.textContent = `En el carrito: `;
      
      const counterValue = document.createElement("span");
      counterValue.setAttribute("id", `counter-card-${id}`)
      counterValue.textContent = 0;

      // Creando etiqueta Button 
      const button = document.createElement("button");
      button.setAttribute("id", `button-${id}`)
      button.textContent = "Agregar";
   
      // Añadiendo contenedor a la tabla
      card.appendChild(imagen);

      containerTP.appendChild(tallaje);
      containerTP.appendChild(precio);
      containerCounter.appendChild(counterText);
      containerCounter.appendChild(counterValue);
      containerTP.appendChild(containerCounter)
      card.appendChild(containerTP)

      card.appendChild(button);
      container.appendChild(card);

   })
   };