const express = require("express");
const router = express.Router();
const { getUsers, getOneUser, editOneUser, createUser, deleteUser } = require("../controllers/user.controller");
// const multer  = require('multer')
// const upload = multer({ dest: 'uploads/' })
const {upload} = require('../libs/storage')

router.get("/", async (req, res) => {
  try {
    const users = await getUsers();
    res.json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "There was an error getting the users." });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const user = await getOneUser(req.params.id);
    res.json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "There was an error getting the user." });
  }
});

router.post("/register", upload.single("foto"), async (req, res) => {
  try {
    const data = req.body;
    const photo = req.file.path;
    const newUser = await createUser(data, photo);
    res.status(200).json({message: `Welcome ${newUser.name}! Please Login`});

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "There was an error registering the user." });
  }
})

router.put("/edit/:id", async (req, res) => {
  try {
    const cambios = req.body;
    const id = req.params.id;
    const user = await editOneUser(id, cambios);
    res.json({message: 'The user was updated', user});
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "There was an error creating the user." });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const user = await deleteUser(req.params.id);
    res.json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "There was an error removing the user." });
  }
});


module.exports = router;
