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

//Declaro las variables
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
let total= 0;
let salirDeLaWeb = true;
//Comenzamos a elegir los servicios
    const servicioElegido = prompt("Ingrese el número del servicios que desea realizarse:\n1.Manicura Rusa\n2. Esmaltado semipermanente \n3. Capping \n4.Esculpidas \nSi desea salir, por favor ingrese 0:");

    if (servicioElegido) {
        case "1":
            total += precioManicuraRusa;
            alert("Eligio manicura Rusa " + precioManicuraRusa );
            break;
        case "2":
            total += precioEsmaltadoSemiLiso;
            alert("Excelente, usted ha agregado una sudadera.");
            break;
        case "3":
            total += precioGorras;
            alert("Excelente, usted ha agregado una gorra.");
            break;
        case "0":
            salirDeLaWeb = false;
            break;
        default:
            alert("Opción inválida. Por favor, elija un número válido o escriba '0' para finalizar la compra.");
    }
