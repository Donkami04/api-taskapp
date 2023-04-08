const express = require("express");
const router = express.Router();


router.get("/tarea1", function (req, res) {
  res.send("Esta es la ruta de tareas");
});

module.exports = router;
