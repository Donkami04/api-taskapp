const express = require("express");
const app = express();
const port = 3000;
const {allRoutes} = require('./routes/index.routes')
const cors = require('cors');

app.use(cors());

app.use(express.json());

allRoutes(app)

app.listen(port, () => {
    console.log(`Escuchando el puerto ${port}`)
})