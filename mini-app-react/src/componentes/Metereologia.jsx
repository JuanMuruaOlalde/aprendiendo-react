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

function getCoordenadas(poblacion, codigoPais) {
    return new Promise((resolve) => {
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
                //const timestamp = new Date(Date.now());
                //console.log(timestamp.toISOString(), "Se ha geolocalizado ", JSON.stringify(jsonData));
                if (jsonData.length === 1) {
                    const latitud = jsonData[0]["lat"];
                    const longitud = jsonData[0]["lon"];
                    resolve({latitud, longitud});
                } else {
                    resolve(jsonData);
                }
            })
            .catch((error) => alert("Se ha producido un error en la API de geolocalización:\n" + error.message));
    });
}

function getMetereologia(latitud, longitud) {
    return new Promise((resolve) => {
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
                //const timestamp = new Date(Date.now());
                //console.log(timestamp.toISOString(), "Se ha obtenido metereologia ", JSON.stringify(jsonData));
                const temperaturaActual = jsonData["main"]["temp"];
                const humedadActual = jsonData["main"]["humidity"];
                const vientoVelocidad = jsonData["wind"]["speed"];
                const vientoDireccion = jsonData["wind"]["deg"];
                const salidaDelSol = new Date(jsonData["sys"]["sunrise"]);
                const puestaDelSol = new Date(jsonData["sys"]["sunset"]);
                //Me salian valores raros en las horas de salida y puesta del Sol, asi es que no las uso.
                resolve({temperaturaActual, humedadActual, vientoVelocidad, vientoDireccion});
            })
            .catch((error) => alert("Se ha producido un error en la API metereologica:\n" + error.message));
    });
}

export function Metereologia() {

    const [formData, setFormData] = useState({poblacion: "",
                                              codigoPais: "ES"
                                             });

    const [coordenadas, setCoordenadas] = useState({latitud: "", 
                                                    longitud: ""
                                                   });

    const [metereologia, setMetereologia] = useState({temperaturaActual: 0,
                                                      humedadActual: 0,
                                                      vientoVelocidad: 0,
                                                      vientoDireccion: 0
                                                     });
    const [geolocalizacionMultiple, setGeolocalizacionMultiple] = useState("");

    function gestionarCambiosEnAlgunCampoDelFormulario(evento) {
        const {name, value} = evento.target;
        setFormData((prevFormData) => ({...prevFormData, [name]: value}));
    }

    async function buscarDatosMetereologicos() {
        getCoordenadas(formData.poblacion, formData.codigoPais)
        .then((coordenadasObtenidas) => {
            //console.log("Tengo coordenadas!!", coordenadasObtenidas);
            setCoordenadas(coordenadasObtenidas);
            getMetereologia(coordenadasObtenidas.latitud, coordenadasObtenidas.longitud)
            .then((metereologiaObtenida) => {
                //console.log("Tengo metereologia!!", metereologiaObtenida)
                setMetereologia(metereologiaObtenida);
            })
            .catch((error) => alert("Se ha producido un error al buscar metereologia:\n" + error.message));
        })
        .catch((error) => alert("Se ha producido un error al buscar coordenadas:\n" + error.message));
    }

   
    function PresentarGeolocalizacionYMetereologia() {
        const timestamp = new Date(Date.now());
        return ( 
            <>
            <p>Geolocalización: latitud {coordenadas.latitud}, longitud {coordenadas.longitud}</p>
            <p> Temperatura: {metereologia.temperaturaActual}°C </p>
            <p> Humedad: {metereologia.humedadActual}% </p>
            <p> Viento: {metereologia.vientoVelocidad} m/s , soplando desde {metereologia.vientoDireccion}°</p>
            <p><small>Consulta realizada el {timestamp.toLocaleString()}</small></p>
            </>
        )
    
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
        <form class="enmarcado_dentro_de_una_caja">
            <p>
                <label for="poblacion">
                    Población: 
                    <input type="text" 
                           value={formData.poblacion}
                           onChange={gestionarCambiosEnAlgunCampoDelFormulario} 
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
                        value={formData.codigoPais}
                        onChange={gestionarCambiosEnAlgunCampoDelFormulario} 
                        id="codigoPais"
                        name="codigoPais"
                        size="2"
                        required
                    />
                    <small>(2 letras)</small>
                </label>
                <br />
                <a href="https://es.wikipedia.org/wiki/ISO_3166-1#C%C3%B3digos_oficialmente_asignados" target="_blank">
                    <small>(consultar los códigos oficiales)</small>
                </a>
            </p>
            <p>
                <button type="button" onClick={buscarDatosMetereologicos}>Obtener coordenadas y metereologia"</button>
            </p>
        </form>
        {(coordenadas.latitud != "") && 
            <PresentarGeolocalizacionYMetereologia coordenadas={coordenadas} metereologia={metereologia}/>
        }
        </>
    )

}
