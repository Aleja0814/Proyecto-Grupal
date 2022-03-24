export const addProductos = (tBody, counterValue, objCard)=>{

  let ids = objCard
    // Creando tr 
    const rowCarrito = document.createElement("tr");
    rowCarrito.setAttribute("id", `row-${ids.id}`)
    rowCarrito.classList.add("row-carrito")

    // Creando tds de imagen
    const tdImg = document.createElement("td");
    const imgCarrito = document.createElement("img");
    imgCarrito.setAttribute("src", ids.img);
    tdImg.appendChild(imgCarrito)
    

    // Crando tds de Item
    const tdProduct = document.createElement("td");
    tdProduct.textContent = `${ids.type} de talla ${ids.talla}`;

    // creando tds de Cantidad 
    const tdCantidad = document.createElement("td"); 
    tdCantidad.setAttribute("id", ids.id);
    tdCantidad.innerHTML = counterValue

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
    tdPrecio.setAttribute("id", `precio-${ids.id}`)
    tdPrecio.textContent = ids.price 
    

    // Añadiendo todos los td al tr 
    rowCarrito.appendChild(tdImg);
    rowCarrito.appendChild(tdProduct);
    rowCarrito.appendChild(tdCantidad);
    rowCarrito.appendChild(tdButtons);
    rowCarrito.appendChild(tdPrecio);
    
        const fragment = document.createDocumentFragment();
        fragment.appendChild(rowCarrito);
        tBody.appendChild(fragment)





  
}
