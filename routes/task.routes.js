const express = require("express");
const router = express.Router();
const { getTasks, getOneTask, editOneTask, createTask, deleteTask } = require("../controllers/task.controller");

router.get("/tasks", async (req, res) => {
  try {
    const tasks = await getTasks();
    res.json(tasks);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "There was an error getting the tasks." });
  }
});

router.get("/tasks/:id", async (req, res) => {
  try {
    const task = await getOneTask(req.params.id);
    res.json(task);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "There was an error getting the task" });
  }
});

router.post("/create-task", async (req, res) => {
  try {
    console.log(req.body);
    const data = req.body;
    const newTask = await createTask(data);
    res.json(newTask);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "There was an error creating the task" });
  }
});

router.put("/tasks/:id", async (req, res) => {
  try {
    const cambios = req.body;
    const id = req.params.id;
    const task = await editOneTask(id, cambios);
    res.json(task);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "There was an error updating the task" });
  }
});

router.delete("/tasks/:id", async (req, res) => {
  try {
    const task = await deleteTask(req.params.id);
    res.json(task);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "There was an error removing the task" });
  }
});

module.exports = router;
