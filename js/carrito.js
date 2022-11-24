const btnCotizar = document.querySelector("#btnCotizar")

titulo.innerText = "Cotizador servicios desarrollo web"
parrafo.innerText = "Cotiza tus servicios."

const recuperarCotizador = () =>{
    if (localStorage.getItem("cotizador")) {
        let cotizadorRecuperado = JSON.parse(localStorage.getItem("cotizador"))
        cotizadorRecuperado.forEach(servicio => cotizador.push(servicio))
        } else {
            console.warn("No se encontraron servicios añadidos al cotizador.")
        }
}

const cargarCotizador = () => {
    let tablaHTML = ""
    const tbody = document.querySelector("tbody")
        tbody.innerHTML = ""
        cotizador.forEach(servicio => {
            tablaHTML += `<tr>
                            <td class="centrar">${servicio.imagen}</td>
                            <td class="centrar">${servicio.nombre}</td>
                            <td class="centrar">$ ${servicio.precio}</td>
                            <td class="centrar"><div class="boton-delete"><button id="${servicio.nombre}" class="button-delete button-small" title="Eliminar servicios"><div class="boton-deleteimg"><img src="../img/Vaciar Carrito.png" alt="eliminar articulo carrito"></div></button></div></td>
                        </tr>`
        })
        tbody.innerHTML = tablaHTML

        let totalCotizador = cotizador.reduce((acc, servicio) => acc + servicio.precio, 0 ) //acc toma el "0" como valor inicial y a partir de ahi empieza a sumar todo
        tbody.innerHTML += `<tr>
                            <td class="centrar"></td>
                            <td class="centrar">TOTAL</td>
                            <td class="centrar">$ ${totalCotizador}</td>
                            <td class="centrar"></td>
                            </tr>`
        activoBotonesDelete() // ctivo el click en los botones DELETE 
}

const activoBotonesDelete = ()=> { //ARMO ARRAY DE BOTONES DELETE
    const btnsDelete = document.querySelectorAll(".button-delete.button-small")
          btnsDelete.forEach(btn => {
            btn.addEventListener("click", (e)=> { //LES ASIGNO EL EVENTO CLICK 
                //BUSCO INDEX DE UN PRODUCTO EN CARRITO Y LO ELIMINO CON SPLICE() 
                let aEliminar = cotizador.findIndex(servicio => servicio.nombre === e.target.id) 
                cotizador.splice(aEliminar, 1)
                    localStorage.setItem("cotizador", JSON.stringify(cotizador)) //ACTUALIZO CARRITO EN LOCALSTORAGE 
                    cargarCotizador() //RECARGO CARRITO EN TABLE Y SE ACTUALIZAN LOS PRODUCTOS 
            })
          })
}

const alertaCotizador = (titulo, precio, textoBotonYes, textoBotonNo) => {
    return Swal.fire({icon:"question", title: titulo, text: precio, confirmButtonText: textoBotonYes, confirmButtonColor: "#07A44D", cancelButtonText: textoBotonNo, showCancelButton: true, cancelButtonColor: "#AE0000"})
}

const alerta = (titulo, texto) => {
    return Swal.fire({icon:"warning", title: titulo, confirmButtonText: texto, confirmButtonColor: "#0B0BA9"})
}

// si el carrito es 0 - no deja comprar
// si el carrito es > 0 (agradecemos la compra)}
//vaciamos el carrito y volvemos a inicio

const cotizadorVacio = () => {
    alerta("El cotizador esta vacio!", "Añade algo").then(result => {
    if (result.isConfirmed){
        location.href = "../index.html"
    }})
} 

const finalizarCotizacion = () => {
    alertaCotizador("Su cotización hasta el momento es: ","$ "+(totalCotizador = cotizador.reduce((acc, servicio) => acc + servicio.precio, 0 )),"Aceptar cotización","Aún no estoy seguro").then(result => {
        if (result.isConfirmed) {
            localStorage.removeItem("cotizador")
            location.href = "../index.html"
        }
    })
}

btnCotizar.addEventListener("click", () => cotizador.length === 0 ? cotizadorVacio() : finalizarCotizacion() )

/*
Swal.fire({
  title: 'Error!',
  text: 'Do you want to continue',
  icon: 'error',
  confirmButtonText: 'Cool'
})
*/

// Cuando carga la pagina
recuperarCotizador()
cotizador.length > 0 && cargarCotizador()