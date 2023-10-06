const express = require("express");
const app = express();
const port = 3001;

const datosDeLosAlbaranes = require('./data/AlbaranesDeEjemplo.json');

app.get("/", (req, res) => {
    res.send("Para usar la API, prueba con la URL /api/albaranes o similares...");
})

app.get("/api", (req, res) => {
    res.send(
        "<p> Aquí deberia ir algo explicando las APIs disponibles...</p>" +
        "<p> Por ahora, pondré simplemente una lista de los endpoints disponibles:</p>" +
        "<ul>" +
        "  <li>/api/albaranes</li>" +
        "</ul>"
    );
})

app.get("/api/albaranes", (req, res) => {
    res.json(datosDeLosAlbaranes);
})


app.listen(port, () => {
    console.log(`Se ha arrancado la aplicación web. Está disponible en el puerto ${port}/`);
})

