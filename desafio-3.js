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

agregarAlumno(alumnos);

console.log(alumnos);