import { fakeApi } from "./modules/fakeApi.js";
import { showProduct } from "./modules/showProduct.js";

let table = document.getElementById("table")



document.addEventListener("DOMContentLoaded", async ()=>{
    let products = await fakeApi("http://localhost:4000/productos")
    showProduct(products,table)
})