export const counterTable = (tBody)=>{

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
}