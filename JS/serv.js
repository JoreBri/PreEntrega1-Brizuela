let ServicioManicura = [
    { nombre: "Manicura Rusa", precio: 5000},
    {
        nombre: "Esmaltado Semipermanente", 
        opciones: [
            { nombre: "Esmaltado Semipermanente Liso", precio: 8500},
            { nombre: "Esmaltado Semipermanente con Diseño", precio: 10000},
        ]
    },
    {
        nombre: "Capping",
        opciones: [
            { nombre: "Capping", precio: 9500},
            { nombre: "Capping con Diseño", precio: 10500},
        ]
    },
    {
        nombre: "Uñas Esculpidas",
        opciones: [
            { nombre: "Uñas Esculpidas", precio: 11000},
            { nombre: "Uñas Esculpidas con Diseño", precio: 12500},
        ]
    }
];



let carrito = [];

function agregarAlCarrito(servicio) {
    carrito.push(servicio);
}

function mostrarCarrito() {
    let total = 0;
    let descripcionCarrito = "Productos en su carrito:\n";

    for (let i = 0; i < carrito.length; i++) {
        descripcionCarrito += `${carrito[i].nombre} - $${carrito[i].precio}\n`;
        total += carrito[i].precio;
    }

    descripcionCarrito += `Total a pagar: $${total}, Muchas gracias por elegirnos te esperamos.`;
    alert(descripcionCarrito);
}

function elegirServicio() {
    let opciones = "";
    for (let i = 0; i < ServicioManicura.length; i++) {
        opciones += `${i + 1}. ${ServicioManicura[i].nombre}\n`;
    }

    let eleccion = prompt(`¿Qué servicio desea adquirir?\n${opciones}`);
    let indiceEleccion = parseInt(eleccion);

    if (!isNaN(indiceEleccion) && indiceEleccion > 0 && indiceEleccion <= ServicioManicura.length) {
        let servicioElegido = ServicioManicura[indiceEleccion - 1];

        if (servicioElegido.opciones) {
            let subopciones = "";
            for (let i = 0; i < servicioElegido.opciones.length; i++) {
                subopciones += `${i + 1}. ${servicioElegido.opciones[i].nombre}\n`;
            }

            let eleccionSubopcion = prompt(`¿Qué opción desea para ${servicioElegido.nombre}?\n${subopciones}`);
            let indiceSubopcion = parseInt(eleccionSubopcion);

            if (!isNaN(indiceSubopcion) && indiceSubopcion > 0 && indiceSubopcion <= servicioElegido.opciones.length) {
                let subopcionElegida = servicioElegido.opciones[indiceSubopcion - 1];
                agregarAlCarrito(subopcionElegida);
            } else {
                alert("Opción inválida.");
            }
        } else {
            agregarAlCarrito(servicioElegido);
        }

        let respuesta = prompt("¿Desea comprar otro producto?\n1. Sí\n2. No");
        if (respuesta === "1") {
            elegirServicio();
        } else if (respuesta === "2") {
            mostrarCarrito();
        } else {
            alert("Opción inválida.");
        }
    } else if (eleccion === "5") {
        consultarPrecio();
    } else if (eleccion === "0") {
        salir();
    } else {
        alert("Opción inválida.");
    }
}

function mostrarSubopciones(servicio) {
    let subopciones = "";
    for (let i = 0; i < servicio.opciones.length; i++) {
        subopciones += `${i + 1}. ${servicio.opciones[i].nombre}\n`;
    }

    let eleccionSubopcion = prompt(`Elija una opción para ${servicio.nombre}:\n${subopciones}`);
    let indiceSubopcion = parseInt(eleccionSubopcion);

    if (!isNaN(indiceSubopcion) && indiceSubopcion > 0 && indiceSubopcion <= servicio.opciones.length) {
        let subopcionElegida = servicio.opciones[indiceSubopcion - 1];
        alert(`El precio de ${subopcionElegida.nombre} es $${subopcionElegida.precio}.`);
    } else {
        alert("Opción inválida.");
    }
}

function salir() {
    alert("Gracias por su visita.");
}

elegirServicio();