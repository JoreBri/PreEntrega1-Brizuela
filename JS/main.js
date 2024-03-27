
//Primer funcion
function saludar () {
    let nombreIngresado = prompt("Hola! Por favor, Ingrese su nombre");
    while (nombreIngresado == null || !(nombreIngresado.length >= 3)) {
            nombreIngresado = prompt("Por favor, ingrese un nombre,para brindarle la mejor atención!");
        }
        // Si el usuario introduce un nombre, se guarda en la variable nombreIngrasado
        // Si el usuario cancela el prompt, la variable nombreIngresado es null
    return alert("Hola " + nombreIngresado + " te doy la bienvenida a ¡Unicornio Nails!");
}
saludar ();