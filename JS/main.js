//Declaro las variables
let servicio; 
let precioManicuraRusa = 5000;
let precioEsmaltadoSemiLiso = 8500;
let precioEsmaltadoSemiDiseño = 10000;
let precioCappingLiso = 9500;
let precioCappingDiseño = 10500;
let precioEsculpidasLisas = 11000;
let precioEsclpidasDiseño = 12500;
let total = 0;
let seguirComprando = true;
let carrito = [];

//Primer funcion
function saludar () {
    let nombreIngresado = prompt("Hola! Por favor, Ingrese su nombre");
    while (nombreIngresado == null || !(nombreIngresado.length >= 3)) {
            nombreIngresado = prompt("Por favor, ingrese un nombre,para brindarle la mejor atención!");
        }
        // Si el usuario introduce un nombre, se guarda en la variable nombreIngrasado
        // Si el usuario cancela el prompt, la variable nombreIngresado es null
    return alert("Bienvenido " + nombreIngresado + " a ¡Unicornio Nails!");
}

saludar ();
//Le damos las opciones al cliente
do {
    servicio = prompt("Ingrese el número de la opción que desea realizarce: \n1. Manicura Rusa \n2. Esmaltado semipermanente \n3. Capping \n4  Esculpidas \n0. Salir");
    switch(servicio) {
      //Caso 1 elije manicura Rusa y se le pasa el precio  
      case '1':
            let confirmarCompra1 = confirm("Usted quiere realizarse Manicura Rusa por $" + precioManicuraRusa + ". Presione Aceptar para confirmar, o Cancelar para rechazar.");
            if (confirmarCompra1) {
                total += precioManicuraRusa;
                carrito.push("Manicura Rusa por $" + precioManicuraRusa);
            }
            break;
      //Caso 2 elije tipo de esmaltado semi y luego se le informa el precio
        case '2':
          do {
            tipoEsmaltado = prompt("Elija si quiere \n1. Esmaltado semipermanente liso \n2. Esmaltado semipermanente con diseño");
        } while (tipoEsmaltado !== '1' && tipoEsmaltado !== '2');
            if (tipoEsmaltado == '1') {
                let confirmarCompra2 = confirm("Usted quiere realizarse Esmaltado Semipermanente liso por $" + precioEsmaltadoSemiLiso + ". Presione Aceptar para confirmar, o Cancelar para rechazar.");
                if (confirmarCompra2) {
                    total += precioEsmaltadoSemiLiso;
                    carrito.push("Esmaltado Semipermanente liso por $" + precioEsmaltadoSemiLiso);
                }
            } else if (tipoEsmaltado == '2') {
                let confirmarCompra3 = confirm("Usted quiere realizarse Esmaltado Semipermanente con diseño por $" + precioEsmaltadoSemiDiseño + ". Presione Aceptar para confirmar, o Cancelar para rechazar.");
                if (confirmarCompra3) {
                    total += precioEsmaltadoSemiDiseño;
                    carrito.push("Esmaltado Semipermanente con diseño por $" + precioEsmaltadoSemiDiseño);
                }
            }
            break;
      //Caso 3 elije tipo de Cappong y luego se le informa el precio
        case '3':
          do {
            tipoCapping = prompt("Elija si quiere \n1. Esmaltado semipermanente liso \n2. Esmaltado semipermanente con diseño");
        } while (tipoCapping !== '1' && tipoCapping !== '2');
            if (tipoCapping == '1') {
                let confirmarCompra4 = confirm("Usted quiere realizarse Capping liso por $" + precioCappingLiso + ". Presione Aceptar para confirmar, o Cancelar para rechazar.");
                if (confirmarCompra4) {
                    total += precioCappingLiso;
                    carrito.push("Capping liso por $" + precioCappingLiso);
                }
            } else if (tipoCapping == '2') {
                let confirmarCompra5 = confirm("Usted quiere realizarse Capping con diseño por $" + precioCappingDiseño + ". Presione Aceptar para confirmar, o Cancelar para rechazar.");
                if (confirmarCompra5) {
                    total += precioCappingDiseño;
                    carrito.push("Capping con diseño por $" + precioCappingDiseño);
                }
            }
            break;
      //Caso 4 elije el tipo de esculpidas y luego se le informa el precio
        case '4':
          do {
            tipoEsculpidas = prompt("Elija si quiere \n1. Esmaltado semipermanente liso \n2. Esmaltado semipermanente con diseño");
        } while (tipoEsculpidas !== '1' && tipoEsculpidas !== '2');
            if (tipoEsculpidas == '1') {
                let confirmarCompra6 = confirm("Usted quiere realizarse Esculpidas lisas por $" + precioEsculpidasLisas + ". Presione Aceptar para confirmar, o Cancelar para rechazar.");
                if (confirmarCompra6) {
                    total += precioEsculpidasLisas;
                    carrito.push("Esculpidas lisas por $" + precioEsculpidasLisas);
                }
            } else if (tipoEsculpidas == '2') {
                let confirmarCompra7 = confirm("Usted quiere realizarse Esculpidas con diseño por $" + precioEsclpidasDiseño + ".Presione Aceptar para confirmar, o Cancelar para rechazar");
                if (confirmarCompra7) {
                    total += precioEsclpidasDiseño;
                    carrito.push("Esculpidas con diseño por $" + precioEsclpidasDiseño);
                }
            }
            break;
        case '0':
            seguirComprando = false;
            break;
        default:
            alert("Opcion invalida. Por favor seleccione una opcion entre 1 y 4 para un servicio a realizarse y 0 para salir");
    }
    //Le pasamos las opciones del carrito
    if (seguirComprando && servicio >= '1' && servicio <= '4') {
        let irAlCarrito = confirm("Desea ir al carrito? Presione Aceptar para ir al carrito, o Cancelar para seguir eligiento");
        if (irAlCarrito) {
            let comprarCarrito = confirm("Desea comprar su carrito? \n" + carrito.join(", ")  + " Presione Aceptar para confirmar, o Cancelar para seguir eligiendo");
            if (comprarCarrito) {
                alert("El total de su compra es: $" + total.toFixed(2)  +  " Muchas gracias por su compra");
                seguirComprando = false;
            } else {
                seguirComprando = confirm("Desea adquirir otro servicio mas? Presione Aceptar para ver su carrito, o Cancelar para seguir eligiendo");
            }
        } else {
            seguirComprando = confirm("Desea adquirir otro servicio mas? Presione Aceptar para seguir eligiendo, o Cancelar  para ver su carrito");
        }
    }
} while (seguirComprando);