//Acceder al titulo principal
const titulo = document.getElementById("titulo")

//Acceder al parrafo
const parrafo = document.getElementById("parrafo")

/*Leer el contenido de texto de un elemento HTML
utilizar - innerText
utilizar - textContent
*/

titulo.innerText = "Cotizador servicios desarrollo web"
parrafo.innerText = "Lamento no haber cumplido con el punto de la correccion pasada, estoy con mucho trabajo en la semana cubriendo vacaciones. Prometo mejorar todo para la 3er entrega ♥"


// querySelector()

const listadoServicios = document.querySelector("ul")

//Escribir el HTML
// function mostrarServicios() {

//     servicios.forEach(servicios => {
//         listadoServicios.innerHTML += "<li>" + servicios.nombre + "<li>"
//     })
// }

// mostrarServicios()
//Desde JS - CreateElement()
//ver desarrollo no esta correcto
// function mostrarServicios() {

//     servicios.forEach(servicios => {
//         const liServicios = document.createElement
//                 liServicios.id = "id-" + servicios
//                 liServicios.innerText = servicios
//                 listadoServicios.append(liServicios)
//     });
// }

const tbody = document.querySelector("tbody")

function armarHTML(servicio) {
    return `<tr>
                <td id="serviceID">${servicio.id}</td>
                <td>${servicio.nombre}</td>
                <td>${servicio.plista}</td>
                <td>${servicio.precioFinal()}</td>
            </tr>`
}

function recorrerServicios() {
    tbody.innerHTML = ""
    if (servicios.length > 0) {
        servicios.forEach(servicio => tbody.innerHTML += armarHTML(servicio))
        generarListenerID()
    }
}
recorrerServicios()

function generarListenerID() {
    const IDdeServicios = document.querySelectorAll("td#serviceID")    
        if (IDdeServicios.length > 0) {
            IDdeServicios.forEach(serviceID => {
                serviceID.addEventListener("dblclick", (e)=> {
                    carrito.push(e.target.innerText)
                })
            })
        }
}
