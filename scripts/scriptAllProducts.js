import { showProduct } from "./modules/showProduct.js";

let table = document.getElementById("table")



document.addEventListener("DOMContentLoaded",async ()=>{
    let capturar = await fetch("http://localhost:4000/productos")
    let products = await capturar.json()
    showProduct(products,table)
})