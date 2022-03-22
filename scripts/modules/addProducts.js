export const addProductos =  (tBody)=>{
  const carritoModal = document.getElementById("carrito-modal");
  carritoModal.addEventListener("click", async ()=>{


    let response =  await fetch("http://localhost:4000/productos");
    let products =  await response.json();
    let arrCards = products

  // arrCards.filter(element => element.id !== )
  arrCards.forEach((element, index) => {
    // Creando tr 
    const rowCarrito = document.createElement("tr");

    // Creando tds de imagen
    const tdImg = document.createElement("td");
    const imgCarrito = document.createElement("img");
    imgCarrito.setAttribute("src", element.img);
    tdImg.appendChild(imgCarrito)
    

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
    rowCarrito.appendChild(tdImg);
    rowCarrito.appendChild(tdProduct);
    rowCarrito.appendChild(tdCantidad);
    rowCarrito.appendChild(tdButtons);
    rowCarrito.appendChild(tdPrecio);

    // Añadiendo al tBody los rows
    tBody.appendChild(rowCarrito)

  });
});
}