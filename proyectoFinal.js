
function sesion(event){
    event.preventDefault();
    console.log(event);
    
    let formulario = document.querySelector("#formulario");                          //seleccionamos el formulario y lo guardamos en una variable
    let valueEmail = formulario.email.value;                               //agarra el valor del primer input
    let valuePassword = formulario.password.value;                       // agarra el valor del segundo input por su posicion index en el console.dir(formulario)
    
    const token = generateToken(valueEmail, valuePassword);                //variable que genera el token con la funcion generateToken()
    sessionStorage.setItem("token", token);                            //para ingresar el token al session/localstorage con la variable donde guardamos la generacion del token

    const iniciar = tokenExistente();
    if (iniciar) {
        const divPrivado = document.querySelector("#contPrivado");                      //en esta variable seleccionamos el div 
        const ocultar = document.querySelector(".conteiner-1");                    // en esta variable seleccionamos el div que contiene el formulario
        divPrivado.className = "contAbierto";                                 // aca cambiamos el nombre de la clase del div seleccionado
        ocultar.classList.replace("conteiner-1", "contPrivado");              // reemplaza la clase del div que contiene el formulario por la clase que tiene display none
    }
}

function generateToken(email, password) {
    return email + password
}

function tokenExistente(){                                                              // funcion para verificar si el token existe 
    if (sessionStorage.getItem("token") !== null){
        return true;
        } else {
            return false;
        }
}