let numero = 0;

while (numero <= 20){
    numero++;
    console.log(numero)
}

console.log("termino el primer ciclo");


let numero2 = 1;

do{
  numero2 ++;
  console.log(numero2)
} while(numero2 < 6);

console.log("termino ciclo do while")

let numero3 = 1;

while(numero3 < 1000){
    numero3++;
    document.write(numero3);
    if(numero3 == 10){
        break;
    }
}

document.write(" se corta el ciclo por el break   //   ")

for (let numero4 = 0; numero4 < 6; numero4++){
    document.write(numero4)
}

document.write(" termina el ciclo.");

let numero5 = prompt("ingrese un numero del 1 al 15");

if (numero5 <= 15) {
    alert("hola")
} else if (numero5 > 16){
    alert("segui participando")
} else{
    alert("error")
}