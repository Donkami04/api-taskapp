const express = require("express");
const userRoutes = require("./user.routes");
const tasksRoutes = require("./task.routes");
const loginRoutes = require("./login.routes");
const router = express.Router();

const allRoutes = (app) => {
  app.use("/api-tasks", router);
  router.use("/users", userRoutes);
  router.use("/tasks", tasksRoutes);
  router.use("/auth", loginRoutes);
  router.use("/uploads", express.static("uploads"));
};

module.exports = { allRoutes };
