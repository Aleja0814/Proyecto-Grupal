let form =document.getElementById('loginForm');


form.addEventListener('submit', (e) => {
    e.preventDefault();
    let emailUser=document.getElementById("email").value
    let nameUser=document.getElementById("name").value
    let phoneUser=document.getElementById("number").value

    fetch("  http://localhost:4000/usuarios",{
        method:"POST",
        body: JSON.stringify({
                userEmail:emailUser,
                userName:nameUser,
                userPhone:phoneUser
        }),
        
        headers:{
            "Content-Type": "application/json; charset=UTF-8"
        }
    } ).then(()=>{
        // alert("La información se envió correctamente")
        window.location.href = "../index.html"
        
        
    }).catch((error)=>{
        alert(error)
    })

    })