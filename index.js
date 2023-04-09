const express = require("express");
const app = express();
const port = 3000;
const sequelize = require('./db/conection');
const userRoutes = require('./routes/user.routes');
const tasksRoutes = require('./routes/task.routes');

app.use(express.json());


app.use('/api-tasks', userRoutes);
app.use('/api-tasks', tasksRoutes);


app.listen(port, () => {
    console.log(`Escuchando el puerto ${port}`)
})