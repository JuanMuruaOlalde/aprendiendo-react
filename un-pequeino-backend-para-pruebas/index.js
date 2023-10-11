import express from "express";

import {getUltimosAlbaranes, getAlbaran} from "./data/manejoDeAlbaranes.js";

const app = express();
const port = 3001;

app.get("/", (req, res) => {
    res.send("Para usar la API, prueba con la url /api");
})

app.get("/api", (req, res) => {
    res.send(
        "<p> Aquí deberia ir algo explicando las APIs disponibles: endpoints, datos a enviar a cada enpoint,...</p>" +
        "<br/>" +
        "<p> Por ahora, pondré simplemente una lista de los endpoints disponibles:</p>" +
        "<ul>" +
        "  <li>GET /api/albaranes : da los últimos albaranes introducidos al sistema.</li>" +
        "  <li>GET /api/albaranes/numeroDeAlbaran : da el albarán solicitado.</li>" +
        "</ul>" +
        "<br/><br/><br/>" +
        "<p> Y una lista de los que aún no están disponibles, pero que es posible que en un futuro estén:</p>" +
        "<ul>" +
        "  <li>POST /api/albaranes : crea un nuevo albarán.</li>" +
        "  <li>PUT /api/albaranes/numeroDeAlbaran : guarda el albarán indicado (es decir, lo sustituye con (nuevos)datos).</li>" +
        "  <li>PATCH /api/albaranes/numeroDeAlbaran : añade una linea al albarán indicado.</li>" +
        "  <li>DELETE /api/albaranes/numeroDeAlbaran : elimina el albarán indicado.</li>" +
        "</ul>"
    );
})

app.get("/api/albaranes", (req, res) => {
    res.json(getUltimosAlbaranes());
})

app.get("/api/albaranes/:numeroDeAlbaran", (req, res) => {
    res.json(getAlbaran(req.params["numeroDeAlbaran"]));
})

app.post("/api/albaranes", (req, res) => {
    res.send("<p>La opción de crear un nuevo albarán, no está disponible todavia...");
})

app.patch("/api/albaranes/:numeroDeAlbaran", (req, res) => {
    res.send("<p>La opción de añadir una linea a un albarán existente, no está disponible todavia...");
})

app.put("/api/albaranes/:numeroDeAlbaran", (req, res) => {
    res.send("<p>La opción de reemplazar un albarán con nuevos datos (es decir, modificar un albarán existente), no está disponible todavia...");
})

app.delete("/api/albaranes/:numeroDeAlbaran", (req, res) => {
    res.send("<p>La opción de eliminar un albarán, no está disponible todavia...");
})

app.listen(port, () => {
    console.log(`Se ha arrancado la aplicación web. Está disponible en el puerto ${port}/`);
})

