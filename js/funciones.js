
function saludar() {
    console.log("🤖Hola, " + usuario + " 👾")
}

function login() {
    
    if (usuario !== "" & usuario.length > 5) {
        saludar(usuario)
    } else {
        console.warn("Usuario no reconocido")
    }
    alert("🤖Hola, " + usuario + " 👾")
}
login()

function verServicios() {
    let servicios = "Productos disponibles: \n" +
        "1) Diseño de sitio -One Page- \n" +
        "2) Maquetación de sitio -One Page- \n" +
        "3) Diseño de sitio -Estándar-\n" +
        "4) Maquetación de sitio -Estándar- \n" +
        "5) Diseño de sitio -Completo- \n" +
        "6) Maquetación de sitio -Completo- \n" +
        "7) Sección adicional- \n" +
        "8) Opción de sitio multilenguaje \n" +
        "9) Diseño de sitio -UX/UI- \n" +
        "10) Mailing publicitario / Newsletter"

    let eleccion = prompt("Ingresa el Nro de servicio a adquirir para cotizar: \n" + servicios)
    switch (parseInt(eleccion)) {
        case 1:
            console.log("Servicio elegido 'Diseño de sitio -One Page-'. Su precio es de $ 20.000")
            alert("Servicio elegido 'Diseño de sitio -One Page-'. Su precio es de $ 20.000")
            break;
        case 2:
            console.log("Producto elegido 'Maquetación de sitio -One Page-'. Su precio es de $ 50.000")
            alert("Producto elegido 'Maquetación de sitio -One Page-'. Su precio es de $ 50.000")
            break;
        case 3:
            console.log("Producto elegido 'Diseño de sitio -Estándar-'. Su precio es de $ 30.000")
            alert("Producto elegido 'Diseño de sitio -Estándar-'. Su precio es de $ 30.000")
            break;
        case 4:
            console.log("Producto elegido 'Maquetación de sitio -Estándar-'. Su precio es de $ 80.000")
            alert("Producto elegido 'Maquetación de sitio -Estándar-'. Su precio es de $ 80.000")
            break;
        case 5:
            console.log("Producto elegido 'Diseño de sitio -Completo-'. Su precio es de $ 40.000")
            alert("Producto elegido 'Diseño de sitio -Completo-'. Su precio es de $ 40.000")
            break;
        case 6:
            console.log("Producto elegido 'Maquetación de sitio -Completo-'. Su precio es de $ 110.000")
            alert("Producto elegido 'Maquetación de sitio -Completo-'. Su precio es de $ 110.000")
            break;
        case 7:
            console.log("Producto elegido 'Sección adicional-'. Su precio es de $ 10.000")
            alert("Producto elegido 'Sección adicional-'. Su precio es de $ 10.000")
            break;
        case 8:
            console.log("Producto elegido 'Opción de sitio multilenguaje'. Actualmente no disponible")
            alert("Producto elegido 'Opción de sitio multilenguaje'. Actualmente no disponible")
            break;
        case 9:
            console.log("Producto elegido 'Diseño de sitio -UX/UI-'. Su precio es de $ 130.000")
            alert("Producto elegido 'Diseño de sitio -UX/UI-'. Su precio es de $ 130.000")
            break;
        case 10:
            console.log("Producto elegido 'Mailing publicitario / Newsletter'. Su precio es de $ 15.000")
            alert("Producto elegido 'Mailing publicitario / Newsletter'. Su precio es de $ 15.000")
            break;
        default:
            console.error("No se reconoce el servicio ingresado.")
            alert("No se reconoce el servicio ingresado")
    }

    let continuar = confirm("¿Desea consultar el valor de otro servicio?")
    if (continuar) {
        verServicios()
    } else {
        precioMasIva()
    }
}

