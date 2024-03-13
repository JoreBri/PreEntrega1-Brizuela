//Declaro las variables
let servicio; 
let precioManicuraRusa = 5000;
let precioEsmaltadoSemiLiso = 8500;
let precioEsmaltadoSemiDiseño = 10000;
let precioCappingLiso = 9500;
let precioCappingdiseño = 10500;
let precioEsculpidasLisas = 11000;
let precioEsclpidasDiseño = 12500;
let total = 0;
let salirDeLaWeb = true;
//POR FAVOR SEBA AYUDAME ;(

// Al entrar la página, se muestra un prompt que pide el nombre del cliente
let nombreIngresado = prompt("Ingrese su nombre");

while (nombreIngresado == null || !(nombreIngresado.length >= 3)) {
    nombreIngresado = prompt("Por favor, ingrese un nombre,para brindarle la mejor atención!");
 }
 // Si el usuario introduce un nombre, se guarda en la variable nombreIngrasado
// Si el usuario cancela el prompt, la variable nombreIngresado es null

//Al ingresar el nombre se saluda al cliente y se le informa lo que debe hacer
alert("Bienvenido " + nombreIngresado +  " a ¡Unicornio Nails!");

alert("¡A continuación podrás elegir el servicio que quieras realizarte!");

//Comenzamos a elegir los servicios
//Primero ofrecemos las 4 opciones
do {
    servicio = prompt("Ingrese el número de la opción que desea realizarce: \n1.Manicura Rusa\n2. Esmaltado semipermanente \n3. Capping \n4.Esculpidas \n0. Salir");
//Nos aseguramos de que elija una opcion valida 
    if (isNaN(servicio)) {
      alert("Opcion invalida. Por favor seleccione una opcion entre 1 y 4 para un servicio a realizarse y 0 para salir");
      continue;
    } else {
      servicio = parseInt(servicio);
      if ((servicio < 0) || (servicio > 4)) {
        alert("Opcion invalida. Por favor seleccione una opcion entre 1 y 4 para un servicio a realizarse y 0 para salir");
        continue;
      }
    }
//Si elije 1 le pasamos el precio
    switch (servicio) {
      case 1:
        alert("Usted quiere realizarse Manicura Rusa por $" + precioManicuraRusa);
        break;
//Si elije 2, 3 0 4 le damos opciones
      case 2:
        servicio = parseInt(prompt("Elija si quiere \n1. esmaltado liso \n2.esmaltado con deseño"));
        if (isNaN(servicio)) {
          alert("Opcion invalida. Por favor seleccione una opcion entre 1 y 2 para un servicio a realizarse y 0 para salir");
          continue;
        } else {
          servicio = parseInt(servicio);
          if ((servicio < 0) || (servicio > 4)) {
            alert("Opcion invalida. Por favor seleccione una opcion entre 1 y 2 para un servicio a realizarse y 0 para salir");
            continue;
          }
        }
        if (servicio === 1) {
            alert( "Usted quiere realizarse Esmaltado Semipermanente liso por $" + precioEsmaltadoSemiLiso)
          }
          else (servicio === 2);{
            alert( "Usted quiere realizarse Esmaltado Semipermanente con diseño por $" + precioEsmaltadoSemiDiseño)
          }
      case 3:
        servicio = parseInt(prompt("Elija si quiere \n1. Capping liso \n2.Capping con deseño"));
        if (isNaN(servicio)) {
          alert("Opcion invalida. Por favor seleccione una opcion entre 1 y 2 para un servicio a realizarse y 0 para salir");
          continue;
        } else {
          servicio = parseInt(servicio);
          if ((servicio < 0) || (servicio > 4)) {
            alert("Opcion invalida. Por favor seleccione una opcion entre 1 y 2 para un servicio a realizarse y 0 para salir");
            continue;
          }
        }
        if (servicio === 1) {
            alert( "Usted quiere realizarse Capping liso por $" + precioCappingLiso)
          }
          else (servicio === 2);{
            alert( "Usted quiere realizarse Capping con diseño por $" + precioCappingdiseño)
          }
        break;
      case 4:
        servicio = parseInt(prompt("Elija si quiere \n1. Esculpidas lisas \n2.Esculpidas con deseño"));
        if (isNaN(servicio)) {
          alert("Opcion invalida. Por favor seleccione una opcion entre 1 y 2 para un servicio a realizarse y 0 para salir");
          continue;
        } else {
          servicio = parseInt(servicio);
          if ((servicio < 0) || (servicio > 4)) {
            alert("Opcion invalida. Por favor seleccione una opcion entre 1 y 2 para un servicio a realizarse y 0 para salir");
            continue;
          }
        }
        if (servicio === 1) {
            alert( "Usted quiere realizarse Esculpidas lisas por $" + precioEsculpidasLisas)
          }
          else (servicio === 2);{
            alert( "Usted quiere realizarse Esculpidas con diseño por $" + precioEsclpidasDiseño)
          }
      case 0:
        alert("Saliendo...");
        break;
      default:
        alert("Opción inválida. Por favor, seleccione nuevamente.");
    }
  } while (opcion !== 0);
  alert("Gracias por elegirnos. Vuelva pronto.");
