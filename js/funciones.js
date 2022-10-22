
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

const activarBotonesAdd = ()=> { //asigno evento click en todos los botones de las cards
    const botonesAdd = document.querySelectorAll(".button.button-outline.button-add")
        botonesAdd.forEach(btn => btn.addEventListener("click", (e) =>agregarAlCarrito(e)))
}

const cargarServicios = () => { //armo las cards en pantalla
    contenedor.innerHTML = ""
    servicios.forEach(servicio =>
        contenedor.innerHTML += retornoTarjeta(servicio))
        activarBotonesAdd()
}

cargarServicios()

const agregarAlCarrito = (e) => { // agregar al carrito je
    let resultado = servicios.find(serv => serv.nombre === e.target.id)
        if (resultado !== undefined){
            carrito.push(resultado)
            guardarCarrito()
            alert("Has agregado " + resultado.nombre + " a tu carrito")
            console.clear()
            console.table(carrito)
        }
}

const guardarCarrito = () => {
    if (carrito.length > 0) {
        localStorage.setItem("carrito", JSON.stringify(carrito))
    }
}

const recuperarCarrito = () => {
    if (localStorage.getItem("carrito")) {
        let carritoRecuperado = JSON.parse(localStorage.getItem("carrito"))
            carritoRecuperado.forEach(servicio => carrito.push(servicio))
    } else {
        console.warn("No se ha encontrado carrito guardado")
    }
}
recuperarCarrito()

function filtrarServicios() {
    let buscar = prompt("¿Qué servicio busca?").toUpperCase()
    let resultado = servicios.filter(elemento => elemento.nombre.includes(buscar))
        if (resultado === undefined) {
            console.error("No se encontró el producto.")
        } else {
            console.table(resultado)
        }

}

document.addEventListener("DOMContentLoaded", recuperarCarrito)

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

