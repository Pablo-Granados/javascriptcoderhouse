const carrito = []
const btnComprar = document.querySelector("#btnComprar")

titulo.innerText = "Cotizador servicios desarrollo web"
parrafo.innerText = "Cotiza tus servicios."

const recuperarCarrito = () =>{
    if (localStorage.getItem("carrito")) {
        let carritoRecuperado = JSON.parse(localStorage.getItem("carrito"))
        carritoRecuperado.forEach(servicio => carrito.push(servicio))
        } else {
            console.warn("No se encontraron servicios añadidos al carrito.")
        }
}

const cargarCarrito = () => {
    let tablaHTML = ""
    const tbody = document.querySelector("tbody")
        tbody.innerHTML = ""
        carrito.forEach(servicio => {
            tablaHTML += `<tr>
                            <td class="centrar">${servicio.imagen}</td>
                            <td class="centrar">${servicio.nombre}</td>
                            <td class="centrar">$ ${servicio.precio}</td>
                            <td class="centrar"><button id="${servicio.nombre}" class="button-delete button-small">x</button></td>
                        </tr>`
        })
        tbody.innerHTML = tablaHTML

        let totalCarrito = carrito.reduce((acc, servicio) => acc + servicio.precio, 0 ) //acc toma el "0" como valor inicial y a partir de ahi empieza a sumar todo
        tbody.innerHTML += `<tr>
                            <td class="centrar"></td>
                            <td class="centrar">TOTAL</td>
                            <td class="centrar">$ ${totalCarrito}</td>
                            <td class="centrar"></td>
                            </tr>`
        activoBotonesDelete() // ctivo el click en los botones DELETE 
}

const activoBotonesDelete = ()=> { //ARMO ARRAY DE BOTONES DELETE
    const btnsDelete = document.querySelectorAll(".button-delete.button-small")
          btnsDelete.forEach(btn => {
            btn.addEventListener("click", (e)=> { //LES ASIGNO EL EVENTO CLICK 
                //BUSCO INDEX DE UN PRODUCTO EN CARRITO Y LO ELIMINO CON SPLICE() 
                let aEliminar = carrito.findIndex(servicio => servicio.nombre === e.target.id) 
                    carrito.splice(aEliminar, 1)
                    localStorage.setItem("carrito", JSON.stringify(carrito)) //ACTUALIZO CARRITO EN LOCALSTORAGE 
                    cargarCarrito() //RECARGO CARRITO EN TABLE Y SE ACTUALIZAN LOS PRODUCTOS 
            })
          })
}

const alerta = (titulo, textoBoton) => {
    return Swal.fire({title: titulo, confirmButtonText: textoBoton})
}
// si el carrito es 0 - no deja comprar
// si el carrito es > 0 (agradecemos la compra)}
//vaciamos el carrito y volvemos a inicio

const carritoVacio = () => {
    alerta("El carrito esta vacio!", "Añade algo")
} 

const finalizarCompra = () => {
    alerta("Muchas gracias por su compra!", "Finalizar").then(result => {
        if (result.isConfirmed) {
            localStorage.removeItem("carrito")
            location.href = "index.html"
        }
    })
}

btnComprar.addEventListener("click", () => carrito.length === 0 ? carritoVacio() : finalizarCompra() )

/*
Swal.fire({
  title: 'Error!',
  text: 'Do you want to continue',
  icon: 'error',
  confirmButtonText: 'Cool'
})
*/

// Cuando carga la pagina
recuperarCarrito()
carrito.length > 0 && cargarCarrito()