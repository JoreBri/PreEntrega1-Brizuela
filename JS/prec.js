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
function consultarPrecio() {
    let opcionesConsulta = "";
    for (let i = 0; i < ServicioManicura.length; i++) {
        opcionesConsulta += `${i + 1}. ${ServicioManicura[i].nombre}\n`;
    }

    let continuar = true;
    while (continuar) {
        let eleccionConsulta = prompt(`Elija el servicio por el cual quiere consultar el precio:\n${opcionesConsulta}`);
        let indiceConsulta = parseInt(eleccionConsulta);

        if (!isNaN(indiceConsulta) && indiceConsulta > 0 && indiceConsulta <= ServicioManicura.length) {
            let servicioConsulta = ServicioManicura[indiceConsulta - 1];
            if (servicioConsulta.opciones) {
                mostrarSubopciones(servicioConsulta);
            } else {
                alert(`El precio de ${servicioConsulta.nombre} es $${servicioConsulta.precio}.`);
            }
        } else {
            alert("Opción inválida.");
        }

        let respuesta = prompt("¿Desea realizar otra consulta? (Sí/No)").toLowerCase();
        continuar = respuesta === "sí" || respuesta === "si";
    }
}

function mostrarSubopciones(ServicioManicura) {
    let opcionesSubconsulta = "";
    for (let i = 0; i < ServicioManicura.opciones.length; i++) {
        opcionesSubconsulta += `${i + 1}. ${ServicioManicura.opciones[i].nombre}\n`;
    }

    let eleccionSubconsulta = prompt(`Elija una opción para ${ServicioManicura.nombre}:\n${opcionesSubconsulta}`);
    let indiceSubconsulta = parseInt(eleccionSubconsulta);

    if (!isNaN(indiceSubconsulta) && indiceSubconsulta > 0 && indiceSubconsulta <= ServicioManicura.opciones.length) {
        let subopcionConsulta = ServicioManicura.opciones[indiceSubconsulta - 1];
        alert(`El precio de ${subopcionConsulta.nombre} es $${subopcionConsulta.precio}.`);
    } else {
        alert("Opción inválida.");
    }
}

consultarPrecio();
