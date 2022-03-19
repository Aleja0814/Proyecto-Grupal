import { type } from "./products.js"

export let menuProductos=(menuFiltrar,filtrar)=>{
    let openclose = true
    filtrar.addEventListener("click", function() {
    
      if (openclose) {
        menuFiltrar.innerHTML = ""
        
        type.forEach(product => {
          let optionMenu = document.createElement("div")
          let categoria=document.createElement("a")
          categoria.setAttribute("class",product)
          if(menuFiltrar.getAttribute("id")=="menu-filtrar-inicio"){
            categoria.setAttribute("href","./pages/filtrar.html")
          }
          else if (menuFiltrar.getAttribute("id")=="menu-filtrar-carrito"){
            categoria.setAttribute("href","../pages/filtrar.html")
          }
          
          categoria.textContent = product
          optionMenu.appendChild(categoria)
          menuFiltrar.appendChild(optionMenu)
    
        })
        menuFiltrar.style.display = "block"
      //  console.log(menuFiltrar)
        openclose=!openclose
      }
      else{
        menuFiltrar.style.display = "none"
        openclose=!openclose
      }
    
    })
}