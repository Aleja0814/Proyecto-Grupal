export const counterTable = (tBody, totalCantidad, totalPrecio, counterTotalCantidad, counterTotalPrecio)=>{

  tBody.addEventListener("click", (e)=>{
    let counter = Number(e.path[2].cells[2].innerText); 

    // Capturando id del td cantidad dando click en los botones de sumar o restar
    const signRow = e.path[2].cells[2].attributes.id.value;
  
    // Capturando la etiqueta td cantidad 
    let tdCantidad = document.getElementById(signRow);
    // console.log(signRow)

    // Capturando la etiqueta del precio total de cada producto 
    let productTotal = document.getElementById(`precio-${signRow}`) 

    // Capturando la etiqueta del contador de cada tarjeta en la tabla de produdctos 
    

    // Capturando el + o el - 
    let sign = e.target.innerText;

  

    // Si da en el boton + suma, si da en el boton - resta 
    if(sign == "+") {
      let precioUnidad = Number(productTotal.innerText) / counter;
      counter += 1;
      tdCantidad.innerHTML = counter;
      productTotal.innerHTML = precioUnidad * counter;
      // Sumando al total de cantidades en la tabla del carrito 
      counterTotalCantidad = 1
      counterTotalPrecio = precioUnidad
      // console.log(precioUnidad)
    } else if(sign == "-" && counter > 1) {

      let precioUnidad = Number(productTotal.innerText) / counter;
      
      counter -= 1;
      tdCantidad.innerHTML = counter;
      productTotal.innerHTML = precioUnidad * counter;
      // Restando al total de cantidades en la tabla del carrito 
      counterTotalCantidad = -1
      counterTotalPrecio = -precioUnidad
    }
    // console.log(num)

      let numPrecio = Number(totalPrecio.innerText)
      totalPrecio.innerHTML = counterTotalPrecio + numPrecio


    let numCantidad = Number(totalCantidad.innerText)
    totalCantidad.innerHTML = numCantidad + counterTotalCantidad
  })
}