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

 let pregunta = prompt("seleccionar cuanto alumnos desea agregar 1, 2 o 3");
 
 if (pregunta == 1) {
    agregarAlumno(alumnos);   
 } else if (pregunta == 2) {
    agregarAlumno(alumnos);
    agregarAlumno(alumnos);
 } else if (pregunta == 3) {
    agregarAlumno(alumnos);
    agregarAlumno(alumnos);
    agregarAlumno(alumnos);
 } else {
    alert("no se puede agregar mas de 3 alumnos")
 }
     

console.log(alumnos);