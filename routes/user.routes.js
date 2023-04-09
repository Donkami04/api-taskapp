const express = require("express");
const router = express.Router();
const { getUsers, getOneUser, editOneUser, createUser, deleteUser } = require("../controllers/user.controller");


router.get("/users", async (req, res) => {
  try {
    const users = await getUsers();
    res.json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "There was an error getting the users." });
  }
});

router.get("/users/:id", async (req, res) => {
  try {
    const user = await getOneUser(req.params.id);
    res.json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "There was an error getting the user." });
  }
});

router.post("/create-user", async (req, res) => {
  try {
    console.log(req.body);
    const data = req.body;
    const newUser = await createUser(data);
    res.json(newUser);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "There was an error creating the user." });
  }
});

router.put("/users/:id", async (req, res) => {
  try {
    const cambios = req.body;
    const id = req.params.id;
    const user = await editOneUser(id, cambios);
    res.json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "There was an error creating the user." });
  }
});

router.delete("/users/:id", async (req, res) => {
  try {
    const user = await deleteUser(req.params.id);
    res.json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "There was an error removing the user." });
  }
});

module.exports = router;
