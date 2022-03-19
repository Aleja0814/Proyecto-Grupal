let tBody = document.getElementById("t-body");

document.addEventListener("DOMContentLoaded", ()=>{

  let arrCards = JSON.parse(sessionStorage.getItem("arrCards"))
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

    // Creando tds de Accion
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



let counter = 1;
tBody.addEventListener("click", (e)=>{

  // id del td cantidad dando click en los botones de sumar o restar
  const signRow = e.path[2].cells[2].attributes.id.value;

  // Capturando la etiqueta td=cantidad 
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

  let total = Number(e.path[2].cells[4].innerText);
  
})