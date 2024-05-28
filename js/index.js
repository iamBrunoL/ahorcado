var usuarios=[];
window.addEventListener('load', ()=>{
    var validarLS =localStorage.getItem('usuarios');
    if(validarLS == null){
        usuarios = [];
    } else{
        usuarios = JSON.parse(validarLS);
    }
})
var users = document.getElementById("nombreUsuario");
var score;

function registroUsuario(){
    
    if (users===""){
        alert("Tienes que ingresar con un usuario");
    }

    else if (users.value!=""){  

        location.href ='Categorias.html'; 
        
        var obj={
            user : users.value,
            score: 0,
        }
            usuarios.push(obj)
        for (let i = 0; i < usuarios.length; i++) {           
        }
        users.value="";
        
        } 
        localStorage.setItem('usuarios', JSON.stringify(usuarios));
        let nombreUsuario = usuarios1 => usuarios1.user;
        let nombreCompleto = usuarios.map(nombreUsuario);
        console.log(nombreCompleto)
}
