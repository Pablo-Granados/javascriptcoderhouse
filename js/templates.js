titulo.innerText = "Cotizador servicios desarrollo web"
parrafo.innerText = "Cotiza tus servicios."

const retornoTarjeta = (servicio) =>{
    return `<div class="card">
                <div class="card-id">[${servicio.id}]</div>
                <div class="card-imagen">${servicio.imagen}</div>
                <div class="card-nombre">${servicio.nombre}</div>
                <div class="card-precio">$ ${servicio.precio}</div>
                
                <div class="card-button">
                    <button class="button button-outline button-add" id="${servicio.nombre}" title="Clic para agregar '${servicio.nombre}' al carrito">+</button>
                </div>
            </div>`
}

const retornoError = () =>{
    return `<div class="card-error">
                <h2>Ha ocurrido un error.</h2>
                <h3>No pudimos cargar los productos</h3>
                <h4>Intente nuevamente en unos instantes...</h4>
            </div>`
}
