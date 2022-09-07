class alumno {
    constructor(nombre,apellido,edad){
        this.nombre = nombre,
        this.apellido = apellido,
        this.edad = edad
    }
}

let alumnos = [];

function agregarAlumno(alumnos){
    let nom = prompt("escribir primer nombre");
    let lastName = prompt("escribir apellido");
    let age = parseInt(prompt("escribir edad"));
    
    alumnos.push(new alumno (nom,lastName,age));
    }



let boton = document.getElementById("boton");

boton.addEventListener("click", respuestaClick());


function respuestaClick(){
    cantAlumnos();
}


function cantAlumnos(){
    let pregunta = prompt("seleccionar cuanto alumnos desea agregar 1, 2 o 3");    

  if (pregunta == 1) {
      agregarAlumno(alumnos);
      cantidad.innerText = "se ingreso un solo alumno"
   } else if (pregunta == 2) {
      agregarAlumno(alumnos);
      agregarAlumno(alumnos);
      cantidad.innerText = "se ingresaron dos alumnos"
   } else if (pregunta == 3) {
      agregarAlumno(alumnos);
      agregarAlumno(alumnos);
      agregarAlumno(alumnos);
      cantidad.innerText = "se ingresaron 3 alumnos"
   } else {
     cantidad.innerText = "Todavia no se han ingresado alumnos"
   }
}
