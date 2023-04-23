const express = require("express");
const router = express.Router();
const { validateLogin, createLogin } = require("../controllers/login.controller");
const { upload } = require("../libs/storage");

router.post("/register", upload.single("foto"), async (req, res) => {
  try {
    const data = req.body;
    const photo = req.file.path;

    const newLoginUser = await createLogin(data, photo);
    res.status(200).json({message: "The user was registered successfully"});
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "There was an error registering the user." });
  }
});

router.post("/login", async (req, res) => {
  try {
    const data = req.body;
    loginUser = await validateLogin(data);
    if (loginUser === false) {
      res.status(400).json({ message: "Email or Password incorrect." });
    }
    res.status(200).json({ message: "The user password is correct" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "There was an error unknown." });
  }
});

module.exports = router;
