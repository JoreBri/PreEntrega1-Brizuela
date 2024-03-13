// Al entrar la página, se muestra un prompt que pide el nombre del cliente
let nombreIngresado = prompt("Ingrese su nombre");
//Declaro las variables
let servicio; 
let precioManicuraRusa = 5000;
let precioEsmaltadoSemiLiso = 8500;
let precioEsmaltadoSemiDiseño = 10000;
let precioCappingLiso = 9500;
let precioCappingdiseño = 10500;
let precioEsculpidas = 10000;
let precioEsclpidastalleLlisas = 10500;
let precioEsculpidasTalleMLisas = 11000;
let precioEsclpidastalleLDiseño = 12000;
let precioEsclpidastalleMDiseño = 12500;
let total = 0;
let salirDeLaWeb = true;

while (nombreIngresado == null || !(nombreIngresado.length >= 3)) {
    nombreIngresado = prompt("Por favor, ingrese un nombre,para brindarle la mejor atención!");
 }
 // Si el usuario introduce un nombre, se guarda en la variable nombreIngrasado
// Si el usuario cancela el prompt, la variable nombreIngresado es null

//Al ingresar el nombre se saluda al cliente y se le informa lo que debe hacer
alert("Bienvenido " + nombreIngresado +  " a ¡Unicornio Nails!");

alert("¡A continuación podrás elegir el servicio que quieras realizarte!");

//Comenzamos a elegir los servicios


do {
    servicio = prompt("Ingrese el número de la opción que desea comprar: \n1.Manicura Rusa\n2. Esmaltado semipermanente \n3. Capping \n4.Esculpidas \n0. Salir");

    if (isNaN(servicio)) {
      alert("Opcion invalida. Por favor seleccione una opcion entre 1 y 4 para un servicio a realizarse y 0 para salir");
      continue;
    } else {
      servicio = parseInt(servicio);
      if ((servicio < 0) || (servicio > 4)) {
        alert("Opcion invalida. Por favor seleccione una opcion entre 1 y 4 para un servicio a realizarsey 0 para salir");
        continue;
      }
    }

    if (servicio !== 1) {
      do {
        cantidad = parseInt(prompt("Ingrese la cantidad de prendas que desea comprar:"));
        if (isNaN(cantidad) || cantidad < 0) {
          alert("Por favor, ingrese un número válido y mayor o igual a cero.");
        }
      } while (isNaN(cantidad) || cantidad < 0)
    }

    switch (opcion) {
      case 1:
        totalGastado += remera * cantidad;
        alert("Ha comprado " + cantidad + " remeras por $" + remera * cantidad);
        break;
      case 2:
        totalGastado += buzo * cantidad;
        alert("Ha comprado " + cantidad + " buzos por $" + buzo * cantidad);
        break;
      case 3:
        totalGastado += campera * cantidad;
        alert("Ha comprado " + cantidad + " camperas por $" + campera * cantidad);
        break;
      case 4:
        totalGastado += pantalon * cantidad;
        alert("Ha comprado " + cantidad + " camperas por $" + pantalon * cantidad);
        break
      case 5:
        totalGastado += zapatillas * cantidad;
        alert("Ha comprado " + cantidad + " camperas por $" + zapatillas * cantidad);
        break
      case 0:
        alert("Saliendo...");
        break;
      default:
        alert("Opción inválida. Por favor, seleccione nuevamente.");
    }
  } while (opcion !== 0);

  alert("El total gastado es de $" + totalGastado + ".");
  alert("Gracias por elegirnos. Vuelva pronto.");


carritoDeCompras();

// while () {
//     const servicioElegido = prompt("Ingrese el número del servicios que desea realizarse:\n1.Manicura Rusa\n2. Esmaltado semipermanente \n3. Capping \n4.Esculpidas \nSi desea salir, por favor ingrese 0:");

//     switch (servicioElegido) {
//         case "1":
            
//         case "2":
//             total += precioEsmaltadoSemiLiso;
//             alert("Excelente, usted ha agregado una sudadera.");
//             break;
//         case "3":
//             total += precioGorras;
//             alert("Excelente, usted ha agregado una gorra.");
//             break;
//         case "0":
//             salirDeLaWeb = false;
//             break;
//         default:
//             alert("Opción inválida. Por favor, elija un número válido o escriba '0' para finalizar la compra.");
//     }
// }
