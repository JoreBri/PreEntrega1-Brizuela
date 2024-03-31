
let nombreIngresado; //El nombre ingresado por el usuario se almacena aca.

do {
    nombreIngresado = prompt("Por favor, ingrese un nombre,para brindarle la mejor atención!");
}   while (!nombreIngresado || !isNaN(nombreIngresado));

if (!nombreIngresado || !isNaN(nombreIngresado)) {
    alert("Por favor, ingrese un nombre,para brindarle la mejor atención!");
}   

alert("Hola " + nombreIngresado + " te doy la bienvenida a ¡Unicornio Nails!");

console.log(nombreIngresado);