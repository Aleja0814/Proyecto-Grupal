 let type = [
  "Pantalon",
  "Pantaloneta",
  "Camisa",
  "Gorra", 
]

export let menuProductos=(menuFiltrar,filtrar)=>{
    let openclose = true
    filtrar.addEventListener("click", function() {
    
      if (openclose) {
        menuFiltrar.innerHTML = ""
        
        type.forEach(product => {
          let optionMenu = document.createElement("div");
          let categoria=document.createElement("a");
          categoria.setAttribute("class", product);
          
          categoria.textContent = product
          optionMenu.appendChild(categoria)
          menuFiltrar.appendChild(optionMenu)
    
        })
        menuFiltrar.style.display = "block";
        openclose=!openclose
      }
      else{
        menuFiltrar.style.display = "none"
        openclose=!openclose
      }
    
    })
}