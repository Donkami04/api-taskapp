const express = require("express");
const app = express();
const port = 3000;
const tasks = require('./tasks')
const sequelize = require('./db/conection');
const userRoutes = require('./routes/user.routes');

app.use(express.json());
app.use('/users', userRoutes);

// app.use('/api/v1', tasks)

app.listen(port, () => {
    console.log(`Escuchando el puerto ${port}`)
})