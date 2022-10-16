
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
// login()

const crearID = () => parseInt(Math.random() * 100000)

const agregarServicio = () => {
    let id = crearID()
    let nombre = prompt("Ingrese nuevo servicio")
    let plista = parseFloat(prompt("Ingrese su precio de lista"))

    servicios.push(new Servicios(id, nombre, plista))

    listarServicios()
}

const listarServicios = () => console.table(servicios)

function generarServicios() {
    servicios.push(new Servicio(crearID(),"Diseño de sitio -One Page-".toUpperCase(),20000))
    servicios.push(new Servicio(crearID(),"Maquetación de sitio -One Page-".toUpperCase(),50000))
    servicios.push(new Servicio(crearID(),"Diseño de sitio -Estándar-".toUpperCase(),30000))
    servicios.push(new Servicio(crearID(),"Maquetación de sitio -Estándar-".toUpperCase(),80000))
    servicios.push(new Servicio(crearID(),"Diseño de sitio -Completo-".toUpperCase(),40000))
    servicios.push(new Servicio(crearID(),"Maquetación de sitio -Completo-".toUpperCase(),110000))
    servicios.push(new Servicio(crearID(),"Sección adicional".toUpperCase(),10000))
    servicios.push(new Servicio(crearID(),"Diseño de sitio -UX/UI-".toUpperCase(),130000))
    servicios.push(new Servicio(crearID(),"Mailing publicitario / Newsletter".toUpperCase(),18000))
}

generarServicios()

function generarCarrito(){
    carrito.push(new Servicio(0001,"Diseño de sitio -One Page-".toUpperCase(),20000))
    carrito.push(new Servicio(0002,"Maquetación de sitio -One Page-".toUpperCase(),50000))
    carrito.push(new Servicio(0003,"Diseño de sitio -Estándar-".toUpperCase(),30000))

}

// function recorrerServicios() {
//     servicios.forEach(elemento => {
//         console.log(elemento)
//     })
// }

function filtrarServicios() {
    let buscar = prompt("¿Qué servicio busca?").toUpperCase()
    let resultado = servicios.filter(elemento => elemento.nombre.includes(buscar))
        if (resultado === undefined) {
            console.error("No se encontró el producto.")
        } else {
            console.table(resultado)
        }

}

function proyeccion(porcentaje = (prompt("Ingrese porcentaje de aumento estimado"))){
    let descuento = prompt("ingrese su descuento")
    let resultadoproyeccion = servicios.map(elemento => {
        return{
            nombre: elemento.nombre,
            plista: elemento.plista,
            proyeccion: elemento.plista * (1 + porcentaje/100),
            descuento: elemento.plista * (1 - descuento/100)
        }
    })
    console.table(resultadoproyeccion)
}

function totalCarrito (){
    let total = carrito.reduce((acc, elemento) => acc + (elemento.plista), 0)
    console.log("El precio final del carrito es: ", total*(1+IVA))
    alert("El precio final del carrito es: ", total*(1+IVA))
}

function ordenar () {
    let ordenarServicios = servicios.sort ((a, b) => {
        if (a.nombre > b.nombre){
            return 1
        }
        if (a.nombre < b.nombre){
            return -1
        }
        return 0
    })
    console.table(ordenarServicios)
}