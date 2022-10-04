
function sesion(event){
    event.preventDefault();
    console.log(event);
    
    let formulario = document.querySelector("#formulario");                          //seleccionamos el formulario y lo guardamos en una variable
    let valueEmail = formulario.email.value;                               //agarra el valor del primer input
    let valuePassword = formulario.password.value;                       // agarra el valor del segundo input por su posicion index en el console.dir(formulario)
    
    const objetoUsuario = {                                // en Application muestra object
        email: valueEmail,
        password: valuePassword,
    };

    const token = generateToken(objetoUsuario.email, objetoUsuario.password);                //variable que genera el token con la funcion generateToken()
    localStorage.setItem("token", token);                            //para ingresar el token al session/localstorage con la variable donde guardamos la generacion del token

      let timerInterval

    Swal.fire({
     title: 'Cargando...',
     timer: 500,
     timerProgressBar: true,
       didOpen: () => {
         Swal.showLoading()
           const b = Swal.getHtmlContainer().querySelector('b')
           timerInterval = setInterval(() => {
           b.textContent = Swal.getTimerLeft()
    }, 100)
  },
      willClose: () => {
       clearInterval(timerInterval)
    }
})

 .then((result) => {
  /* Read more about handling dismissals below */
  if (result.dismiss === Swal.DismissReason.timer) {
    
    const iniciar = tokenExistente();
    
    if (iniciar) {
        const divPrivado = document.querySelector("#contPrivado");                      //en esta variable seleccionamos el div 
        const ocultar = document.querySelector(".conteiner-1");                    // en esta variable seleccionamos el div que contiene el formulario
        const navBar = document.querySelector(".opciones")                      //selecciona el navbar
        
        divPrivado.className = "contAbierto";                                 // aca cambiamos el nombre de la clase del div seleccionado
        ocultar.classList.replace("conteiner-1", "contPrivado");              // reemplaza la clase del div que contiene el formulario por la clase que tiene display none
        navBar.classList.replace("opciones", "navShow");                     // reemplaza la clase del nav para que aparezca
    }

  }

})

}

function generateToken(email, password) {
    const usuario = {
        email,
        password,
    };
    return JSON.stringify(usuario);
}

function tokenExistente(){                                                              // funcion para verificar si el token existe 
    if (localStorage.getItem("token") !== null){
        return true;
        } else {
        return false;
        }
}

//---------------------------------------------------------------------------------------------------------------------------------------

class alumLista {
    constructor(nombre, materia, nota1, nota2, nota3){
        this.nombre = nombre;
        this.materia = materia;
        this.nota1 = nota1;
        this.nota2 = nota2;
        this.nota3 = nota3;
    }
    
}

let alumnos = [];



const tablaAlumn = document.querySelector("#tablaNotas tbody");

listaActualizada();

function agregarAlumno(){
    const addAlumno = document.querySelector("#addAlumno");
    const newAlumno = new alumLista(
        addAlumno.nombreAlumno.value, 
        addAlumno.materia.value, 
        addAlumno.alumnoNota1.value, 
        addAlumno.alumnoNota2.value, 
        addAlumno.alumnoNota3.value
        );
    alumnos.push(newAlumno);
    listaActualizada();
}

function listaActualizada(){
    tablaAlumn.innerHTML="";

fetch('https://rickandmortyapi.com/api/character/7,8')               //API Rick y Morty
  .then((character) => character.json()
  .then((res) => {
    aparecerImagen(res);
    })
  );
  
    
  function aparecerImagen(res){                           //al seleccionar en la url los personajes 7 y 8, nos lo muestra en un array, entonces hay que llamarlos con sus posiciones dentro de ese array
    let image = res[1].image;
    let image2 = res[0].image;
    
    alumnos.forEach(alumno => {
        const tablaHTML = document.createElement("tr")
        
        tablaHTML.innerHTML = 
        `<td id="nombreAlum">${alumno.nombre}</td>
        <td id="materiaAlum">${alumno.materia}</td>
        <td>${parseInt(alumno.nota1)}</td>
        <td>${parseInt(alumno.nota2)}</td>
        <td>${parseInt(alumno.nota3)}</td>
        <td>${(parseInt(alumno.nota1) + parseInt(alumno.nota2) + parseInt(alumno.nota3)) / 3}</td>
        `
        if((parseInt(alumno.nota1) + parseInt(alumno.nota2) + parseInt(alumno.nota3)) / 3 >= 7){
            tablaHTML.innerHTML = `
            <td id="nombreAlum">${alumno.nombre}</td>
            <td id="materiaAlum">${alumno.materia}</td>
            <td>${parseInt(alumno.nota1)}</td>
            <td>${parseInt(alumno.nota2)}</td>
            <td>${parseInt(alumno.nota3)}</td>
            <td>${(parseInt(alumno.nota1) + parseInt(alumno.nota2) + parseInt(alumno.nota3)) / 3}</td>
            <td class="aprobado">APROBADO<img class="image" src="${image}" alt=""></td>`
        } else {
            tablaHTML.innerHTML = `
            <td id="nombreAlum">${alumno.nombre}</td>
            <td id="materiaAlum">${alumno.materia}</td>
            <td>${parseInt(alumno.nota1)}</td>
            <td>${parseInt(alumno.nota2)}</td>
            <td>${parseInt(alumno.nota3)}</td>
            <td>${(parseInt(alumno.nota1) + parseInt(alumno.nota2) + parseInt(alumno.nota3)) / 3}</td>
            <td class="desaprobado">DESAPROBADO<img class="image" src="${image2}" alt=""></td>`
        };

        

        tablaAlumn.appendChild(tablaHTML); 
        
        
    });
  }
}
 

const tablaNueva = document.querySelector(".tablaNueva"); //lo hice para limpiar la tabla , el evento onclick esta en el html del boton

 function btnTabla(event){
            tablaNueva.innerHTML="";

            Toastify({
                text: "Tabla Limpia",               
                duration: 3000,
                gravity: "top",
                position: "center", 
                style: {
                    background: "linear-gradient(to right, #6a11cb 0%, #2575fc 100%);",
                  },
                offset: {
                    x: 50,
                    y: 100
                  }  
                }).showToast();
        } 


//--------------------------Formulario Nuevos Estudiantes-------------------//

class nuevosAlum {
  constructor(nombre, apellido, telefono, localidad, division, edad, dni){
   this.nombre = nombre;
   this.apellido = apellido;
   this.telefono = telefono;
   this.localidad = localidad;
   this.division = division;
   this.edad = edad;
   this.dni = dni;
  }
}
     
let formNuevo = [];

function saveForm(){
  const formAlum = document.querySelector('#formNuevosAlumnos');
  const newAlum = new nuevosAlum(
      formAlum.alNuevo.value,
      formAlum.apNuevo.value,
      formAlum.tel.value,
      formAlum.local.value,
      formAlum.divisionNueva.value,
      formAlum.edad.value,
      formAlum.dni.value,
      );
      formNuevo.push(newAlum);
      console.log(formNuevo);
      agregarTarjetas();
}

const tarjetas = document.querySelector(".contenido");

function agregarTarjetas(){
  tarjetas.innerHTML="";

  formNuevo.forEach(tarjeta => {
    const tarjHTML = document.createElement("div");

    tarjHTML.innerHTML = 
    `<div class="contIcono">
        <div class="cont2">
        <i class="fa fa-4x fa-user-circle icono" aria-hidden="true"></i>    
        </div> 
        <div>
          <h3>Nom:${tarjeta.nombre}</h3>
          <h3>Apell:${tarjeta.apellido}</h3>
          <h3>tel:${tarjeta.telefono}</h3>
          <h3>Loc:${tarjeta.localidad}</h3>
          <h3>Div:${tarjeta.division}</h3>
          <h3>edad:${tarjeta.edad}</h3>
          <h3>dni:${tarjeta.dni}</h3>
        </div>
    </div>`
    
        tarjetas.appendChild(tarjHTML);
  })
}