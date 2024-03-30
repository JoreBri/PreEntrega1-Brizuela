//Declaro las variables
let total = 0;
let seguirComprando = true;
let carrito = [];

//Array

let servicios =[ "Manicura", "Esmaltado", "Capping", "Esculpidas"]

// Definición de la clase ServicioManicura
class ServicioManicura {
    constructor(nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
    }
}

// Creación de objetos de servicio de manicura
let manicuraRusa = new ServicioManicura("Manicura Rusa", 5000);
let esmaltadoSemiLiso = new ServicioManicura("Esmaltado Semipermanente Liso", 8500);
let esmaltadoSemiDiseño = new ServicioManicura("Esmaltado Semipermanente con Diseño", 10000);
let cappingLiso = new ServicioManicura("Capping", 95000);
let cappingDiseño = new ServicioManicura("Capping con diseño", 10500);
let esculpidasLisas = new ServicioManicura("Uñas Esculpidas", 11000);
let esculpidasDiseño = new ServicioManicura ("Uñas Esculpidas con diseño", 12500);


// Método de búsqueda
function buscarServicio(nombre) {
    for (let i = 0; i < servicios.length; i++) {
        if (servicios[i].toLowerCase().includes(nombre.toLowerCase())) {
            return servicios[i];
        }
    }
    return null; // Retorna null si no se encuentra ningún servicio con el nombre dado
}

// Utilización del método de búsqueda antes de seleccionar un servicio
do {
    let nombreServicio = prompt("Ingrese el nombre del servicio que desea buscar:");
    let servicioEncontrado = buscarServicio(nombreServicio);
    
    if (servicioEncontrado) {
        // Aquí puedes continuar con el proceso de selección del servicio encontrado
        let confirmarCompra = confirm("Usted quiere realizarse " + servicioEncontrado + ". Presione Aceptar para confirmar, o Cancelar para rechazar.");
        if (confirmarCompra) {
            total += manicuraRusa.precio;
            carrito.push(  manicuraRusa.nombre + " por $" + manicuraRusa.precio);
        }
    } else {
        alert("No se encontró ningún servicio con ese nombre. Por favor, inténtelo de nuevo.");
    }

    // Preguntar si desea seguir comprando o ir al carrito
    // El código aquí puede seguir siendo el mismo que tenías antes

} while (seguirComprando);


//Le damos las opciones al cliente
    do {
    ServicioManicura = prompt("Ingrese el número de la opción que desea realizarse: \n1. Manicura Rusa \n2. Esmaltado semipermanente \n3. Capping \n4. Esculpidas \n0. Salir");
    switch(ServicioManicura) {
      //Caso 1 elije manicura Rusa y se le pasa el precio  
        case '1':
            let confirmarCompra1 = confirm("Usted quiere realizarse  "  + manicuraRusa.nombre + "  por $" + manicuraRusa.precio + ". Presione Aceptar para confirmar, o Cancelar para rechazar.");
            if (confirmarCompra1) {
                total += manicuraRusa.precio;
                carrito.push(  manicuraRusa.nombre + " por $" + manicuraRusa.precio);
            }
            break;
      //Caso 2 elije tipo de esmaltado semi y luego se le informa el precio
        case '2':
    do {
            tipoEsmaltado = prompt("Elija si quiere \n1. Esmaltado semipermanente liso \n2. Esmaltado semipermanente con diseño");
        } while (tipoEsmaltado !== '1' && tipoEsmaltado !== '2');
            if (tipoEsmaltado == '1') {
                let confirmarCompra2 = confirm("Usted quiere realizarse " + esmaltadoSemiLiso.nombre + " por $" + esmaltadoSemiLiso.precio + ". Presione Aceptar para confirmar, o Cancelar para rechazar.");
                if (confirmarCompra2) {
                    total += esmaltadoSemiLiso.precio;
                    carrito.push( esmaltadoSemiLiso.nombre + " por $" + esmaltadoSemiLiso.precio);
                }
            } else if (tipoEsmaltado == '2') {
                let confirmarCompra3 = confirm("Usted quiere realizarse " + esmaltadoSemiDiseño.nombre + " por $" + esmaltadoSemiDiseño.precio + ". Presione Aceptar para confirmar, o Cancelar para rechazar.");
                if (confirmarCompra3) {
                    total += esmaltadoSemiDiseño.precio;
                    carrito.push( esmaltadoSemiDiseño.nombre + " por $" + esmaltadoSemiDiseño.precio);
                }
            }
            break;
      //Caso 3 elije tipo de Cappong y luego se le informa el precio
        case '3':
    do {
            tipoCapping = prompt("Elija si quiere \n1. Capping liso \n2. Capping con diseño");
        } while (tipoCapping !== '1' && tipoCapping !== '2');
            if (tipoCapping == '1') {
                let confirmarCompra4 = confirm("Usted quiere realizarse " +  cappingLiso.nombre + " por $" + cappingLiso.precio + ". Presione Aceptar para confirmar, o Cancelar para rechazar.");
                if (confirmarCompra4) {
                    total += cappingLiso.precio;
                    carrito.push(cappingLiso.nombre + " por $" + cappingLiso.precio);
                }
            } else if (tipoCapping == '2') {
                let confirmarCompra5 = confirm("Usted quiere realizarse " + cappingDiseño.nombre + " por $" + cappingDiseño.precio + ". Presione Aceptar para confirmar, o Cancelar para rechazar.");
                if (confirmarCompra5) {
                    total += cappingDiseño.precio;
                    carrito.push( cappingDiseño.nombre + " por $" + cappingDiseño.precio);
                }
            }
            break;
      //Caso 4 elije el tipo de esculpidas y luego se le informa el precio
        case '4':
    do {
            tipoEsculpidas = prompt("Elija si quiere \n1. Esculpidas lisas \n2. Esculpidas con diseño");
        } while (tipoEsculpidas !== '1' && tipoEsculpidas !== '2');
            if (tipoEsculpidas == '1') {
                let confirmarCompra6 = confirm("Usted quiere realizarse " + esculpidasLisas.nombre +" por $" + esculpidasLisas.precio + ". Presione Aceptar para confirmar, o Cancelar para rechazar.");
                if (confirmarCompra6) {
                    total += esculpidasLisas.precio;
                    carrito.push(esculpidasLisas.nombre + " por $" + esculpidasLisas.precio);
                }
            } else if (tipoEsculpidas == '2') {
                let confirmarCompra7 = confirm("Usted quiere realizarse " + esculpidasDiseño.nombre +" por $" + esculpidasDiseño.precio + ".Presione Aceptar para confirmar, o Cancelar para rechazar");
                if (confirmarCompra7) {
                    total += esculpidasDiseño.precio;
                    carrito.push(esculpidasDiseño.nombre + " por $" + esculpidasDiseño.precio);
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
    if (seguirComprando && ServicioManicura >= '1' && ServicioManicura <= '4') {
        let irAlCarrito = confirm("Desea ir al carrito? Presione Aceptar para ir al carrito, o Cancelar para seguir eligiendo");
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