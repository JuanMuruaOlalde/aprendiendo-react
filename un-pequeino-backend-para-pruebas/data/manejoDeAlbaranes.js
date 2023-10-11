import { datosIniciales } from "./albaranesDeEjemplo.js";

export function getUltimosAlbaranes() {
    //como por ahora hay pocos, devuelvo todos los que hay
    return datosIniciales;
}

export function getAlbaran(numeroDeAlbaran) {
    return datosIniciales.filter( (x) => x["numeroDeAlbaran"] == numeroDeAlbaran );
}

//TODO -pendiente- de incorporar las funciones guardarAlbaran(), añadirLineaAAlbaran() y eliminarAlbaran()
