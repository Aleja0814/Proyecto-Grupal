export const addProductos = (tBody, counterValue)=>{
  console.log(counterValue)
  const carritoModal = document.getElementById("carrito-modal");

    tBody.innerHTML = ""
  let arrCards = JSON.parse(sessionStorage.getItem("cardNoRepeat"))
  // console.log(arrCards)

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
    tdCantidad.setAttribute("id", `counter-${element.id}`);

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

}