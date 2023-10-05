const express = require("express");
const app = express();
const port = 3000;

const datosDeLosAlbaranes = require('./data/AlbaranesDeEjemplo.json');

app.get("/", (req, res) => {
    res.send("Para usar la API, prueba con la URL /albaranes");
})

app.get("/albaranes", (req, res) => {
    res.json(datosDeLosAlbaranes);
})


app.listen(port, () => {
    console.log(`Se ha arrancado la aplicación web. Está disponible en el puerto ${port}/`);
})

