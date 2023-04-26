const express = require("express");
const router = express.Router();
const { validateLogin } = require("../controllers/login.controller");

router.post("/login", async (req, res) => {
  try {
    const data = req.body;
    loginUser = await validateLogin(data);
    if (loginUser === false) {
      res.status(400).json({ message: "Email or Password incorrect.", pass: false });
      return
    }
    res.status(200).json({ message: "You are logged in" , pass: true});
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "There was an error unknown." });
  }
});

module.exports = router;
