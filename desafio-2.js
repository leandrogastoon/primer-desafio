function buscarAlumno(nombre) {
 
if ( nombre == "Leandro") {
    for (let i = 0; i <= 10; i++) {
        console.log(i);
    } console.log("El alumno ingresado es el correcto")
} else {
    console.log("El alumno ingresado no esta registrado")
}
return console.log(nombre);
}

buscarAlumno(prompt("Introducir nombre del Alumno"));