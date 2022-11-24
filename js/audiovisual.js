const URLA = "https://637167ec07858778617c11eb.mockapi.io/Audiovisuales"


const activarBotonesAdd = ()=> { //asigno evento click en todos los botones de las cards
    const botonesAdd = document.querySelectorAll(".button.button-outline.button-add")
        botonesAdd.forEach(btn => btn.addEventListener("click", (e) =>agregarAlCotizador(e)))
}
const loader = ()=>`<img src="../img/loading-gif.gif" alt="">`

const cargarServicios2 = async () => {
    contenedor.innerHTML = loader()
        let armoHTML = ""
        let activoBotones = true
            try {
            const response = await fetch(URLA)
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
        destination: "../secciones/carrito.html",
        close: true, // iconito
        gravity: "top", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: "linear-gradient(to right, #1515f2, #5fd3e9)",
        }
      }).showToast();
}

const agregarAlCotizador = (e) => {
    let resultado = servicios.find(serv => serv.nombre === e.target.id)
        if (resultado !== undefined){
            cotizador.push(resultado)
            guardarCotizacion()
            toast(`Has agregado ${e.target.id} al cotizador`)
        }
}

const guardarCotizacion = () => {
    cotizador.length > 0 && localStorage.setItem("cotizador", JSON.stringify(cotizador))
    }

const recuperarCotizador = () => {
    if (localStorage.getItem("cotizador")) {
        let cotizadorRecuperado = JSON.parse(localStorage.getItem("cotizador"))
        cotizadorRecuperado.forEach(servicio => cotizador.push(servicio))
    } else {
        console.warn("No se ha encontrado cotización guardada")
    }
}
recuperarCotizador()