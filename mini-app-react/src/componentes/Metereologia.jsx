import { useState } from "react";

let CONFIGURACION;
fetch("./configuracion.json")
    .then((response) => {
        if (!response.ok) {
            alert("No se ha podido leer la configuracion:\n" + response.status + " " + response.statusText);
        }
        return response.json();
    })
    .then((jsonData) => {
        CONFIGURACION = jsonData;
    })
    .catch((error) => alert("Se ha producido un error al procesar la configuracion:\n" + error.message));

function ObtenerCoordenadasYMetereologia(poblacion, codigoPais) {
    const urlParaGeocodificacion =
        "http://api.openweathermap.org/geo/1.0/direct" +
        "?q=" +
        poblacion +
        "," +
        codigoPais +
        "&appid=" +
        CONFIGURACION["weatherAPIkey"];
    fetch(urlParaGeocodificacion)
        .then((response) => {
            if (!response.ok) {
                alert(
                    "No se ha podido obtener datos de la API de geolocalización:\n" +
                        response.status +
                        " " +
                        response.statusText
                );
            }
            return response.json();
        })
        .then((jsonData) => {
            if (jsonData.length === 1) {
                const timestamp = new Date(Date.now());
                console.log(timestamp.toISOString(), "Se ha geolocalizado ", JSON.stringify(jsonData));
                const latitud = jsonData[0]["lat"];
                const longitud = jsonData[0]["lon"];
                ObtenerMetereologia(latitud, longitud);
            } else {
                document.getElementById("contenedorRespuestaAPI").innerHTML =
                    "<p>Los datos metereológicos solo se pueden consultar en una localización concreta.</p>" +
                    "<p>Y no se ha obtenido una respuesta clara a la geolocalización de [" +
                    poblacion +
                    " , " +
                    codigoPais +
                    "]:</p>" +
                    "<p>" +
                    JSON.stringify(jsonData) +
                    "</p>";
            }
        })
        //.catch((error) => alert("Se ha producido un error en la API de geolocalización:\n" + error.message));
}

function ObtenerMetereologia(latitud, longitud) {
    const urlParaMetereologia =
        "https://api.openweathermap.org/data/2.5/weather?lat=" +
        latitud +
        "&lon=" +
        longitud +
        "&units=metric" +
        "&lang=es" +
        "&appid=" +
        CONFIGURACION["weatherAPIkey"];
    fetch(urlParaMetereologia)
        .then((response) => {
            if (!response.ok) {
                alert("No se ha podido obtener datos de la API metereologica:\n" + response.status + " " + response.statusText);
            }
            return response.json();
        })
        .then((jsonData) => {
            const temperaturaActual = jsonData["main"]["temp"];
            const humedadActual = jsonData["main"]["humidity"];
            const vientoVelocidad = jsonData["wind"]["speed"];
            const vientoDireccion = jsonData["wind"]["deg"];
            //Me salian valores raros en las horas de salida y puesta del Sol, asi es que no las uso.
            const salidaDelSol = new Date(jsonData["sys"]["sunrise"]);
            const puestaDelSol = new Date(jsonData["sys"]["sunset"]);
            const timestamp = new Date(Date.now());
            document.getElementById("contenedorRespuestaAPI").innerHTML =
                "<p>Geolocalización: latitud " +
                latitud +
                " , longitud " +
                longitud +
                "</p>" +
                "<p> Temperatura: " +
                temperaturaActual +
                "°C </p>" +
                "<p> Humedad: " +
                humedadActual +
                "% </p>" +
                "<p> Viento: " +
                vientoVelocidad +
                "m/s , soplando desde " +
                vientoDireccion +
                "°" +
                "</p>" +
                "<p><small>Consulta realizada el " +
                timestamp.toLocaleString() +
                "</small></p>";
        })
        //.catch((error) => alert("Se ha producido un error en la API metereologica:\n" + error.message));
}

export function Metereologia() {

    const [FormData, setFormData] = useState({poblacion: "", codigoPais: "ES"});

    function gestionarCambiosEnAlgunCampo(evento) {
        const {name, value} = evento.target;
        setFormData((prevFormData) => ({...prevFormData, [name]: value}));
    }

    function gestionarCambiosEnElFormulario(evento) {
        evento.preventDefault();
        document.getElementById("contenedorRespuestaAPI").innerHTML = "";
        ObtenerCoordenadasYMetereologia(FormData.poblacion, FormData.codigoPais);
    }

    return (
        <>
        <h2>Interacción con APIs externas</h2>
        <p>Este es un frontend para utilizar un par de servicios:</p>
        <ul>
            <li>
                <a href="https://openweathermap.org/api/geocoding-api" target="_blank">
                    https://openweathermap.org/api/geocoding-api
                </a>
            </li>
            <li>
                <a href="https://openweathermap.org/current" target="_blank">
                    https://openweathermap.org/current
                </a>
            </li>
        </ul>
        <form onSubmit={gestionarCambiosEnElFormulario} class="enmarcado_dentro_de_una_caja">
            <p>
                <label for="poblacion">
                    Población: 
                    <input type="text" 
                           value={FormData.poblacion}
                           onChange={gestionarCambiosEnAlgunCampo} 
                           id="poblacion"
                           name="poblacion"
                           required/>
                </label>
            </p>
            <p>
                <label for="codigoPais">
                    Código de pais:
                    <input
                        type="text"
                        pattern="[a-zA-Z][a-zA-Z]"
                        value={FormData.codigoPais}
                        id="codigoPais"
                        name="codigoPais"
                        size="2"
                        required
                    />
                    (2 letras)
                </label>
                <br />
                <a href="https://es.wikipedia.org/wiki/ISO_3166-1#C%C3%B3digos_oficialmente_asignados" target="_blank">
                    <small>(consultar los códigos oficiales)</small>
                </a>
            </p>
            <p>
                <button type="submit">Obtener coordenadas y metereologia"</button>
            </p>
        </form>
        <div id="contenedorRespuestaAPI"></div>
        </>
    )

}
