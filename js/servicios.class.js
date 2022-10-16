class Servicio {
    constructor (id, nombre, plista){
        this.id = id
        this.nombre = nombre
        this.plista = plista
    }
    precioFinal(){
        return parseFloat((this.plista * (1+IVA).toFixed(2)))
    }
}