// let servicios = []
const URL = "https://637167ec07858778617c11eb.mockapi.io/Servicios"


const activarBotonesAdd = ()=> { //asigno evento click en todos los botones de las cards
    const botonesAdd = document.querySelectorAll(".button.button-outline.button-add")
        botonesAdd.forEach(btn => btn.addEventListener("click", (e) =>agregarAlCarrito(e)))
}
const loader = ()=>`<img src="../img/loading-gif.gif" alt="">`

const cargarServicios2 = async () => {
    contenedor.innerHTML = loader()
        let armoHTML = ""
        let activoBotones = true
            try {
            const response = await fetch(URL)
                servicios = await response.json()
                servicios.forEach(servicio => armoHTML += retornoTarjeta(servicio))
            } catch (error) {
            armoHTML = retornoError()
            activoBotones = false
            } finally {
            contenedor.innerHTML = armoHTML
                activoBotones && activarBotonesAdd()
            }
}

cargarServicios2()

const toast = (mensaje) => {
    Toastify({
        text: mensaje,
        duration: 3000,
        destination: "./carrito.html",
        close: true, // iconito
        gravity: "top", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: "linear-gradient(to right, #1515f2, #5fd3e9)",
        }
      }).showToast();
}

const agregarAlCarrito = (e) => { // agregar al carrito je
    let resultado = servicios.find(serv => serv.nombre === e.target.id)
        if (resultado !== undefined){
            carrito.push(resultado)
            guardarCarrito()
            toast(`Has agregado ${e.target.id} al carrito`)
        }
}

const guardarCarrito = () => {
    carrito.length > 0 && localStorage.setItem("carrito", JSON.stringify(carrito))
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