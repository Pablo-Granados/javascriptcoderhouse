const iva = parseFloat(prompt("Ingrese el impuesto de su pais")/"100")

class Servicio {
    constructor(precio) {
        this.precio = precio
    }
    masIva() {
        return this.precio * iva
    }
    verComisionProd() {
        return this.precio * comision
    }
}

function precioMasIva() {
    let precio = parseInt(prompt("Ingresa el valor total de su compra"))
    const conIva = new Servicio(precio)
        console.log("El precio final del servicio a adquirir es de $"+ conIva.masIva())
        alert("El precio final del servicio a adquirir es de $"+ parseFloat(precio+conIva.masIva()))
}