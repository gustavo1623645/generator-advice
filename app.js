const id=document.getElementById("advice-number");
const adviceId=document.getElementById("advice.content");
const button=document.getElementById("button");


 const cargarAdvice=async()=>{   //se crea una funcion asincrona es importamte que sea de ese tipo para usar el await osea la espera

    try{                           
        const respuesta= await fetch("https://api.adviceslip.com/advice");
        
        if(respuesta.status===200){   
              console.log(respuesta)
              //acceder a la informacion obtenida json
              const datos=await respuesta.json();
             let consejo=datos.slip.advice
             console.log(datos.slip.advice) 
             let idC=datos.slip.id;
             console.log(idC)
             adviceId.textContent=consejo;
             id.textContent=idC;

        } else if(respuesta.status===404){
            console.log("la pagina no fue encontrada")
    
        }else if(respuesta.status===401){
          console.log("error la llave de acceso es incorrecta")
        }
        
       }catch(error){   
           console.log(error+"error de conexion");
    
       }
    
}
window.addEventListener('load', function() {
        cargarAdvice()

    });


button.addEventListener("click",function(){
    cargarAdvice()
   
})

