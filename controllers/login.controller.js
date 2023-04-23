const { LoginUsers } = require("../models/login");
const { createUser} = require('../controllers/user.controller')
const { comparePassword } = require("../libs/bcrypt");

async function createLogin(data, photo) {
    try {
        const newUser = await createUser(data, photo)
        const newLoginUser = await LoginUsers.create({
            email: data.email,
            password: data.password,
            userId: newUser.id
        })
        return newLoginUser
    } catch (error) {
        console.log(error)
    }

}

async function validateLogin(data) {
  try {
    const loginUser = await LoginUsers.findOne({
      where: {
        email: data.email,
      },
    });

    if (loginUser !== null) {
      const validatePassword = await comparePassword(data.password, loginUser.password);
      if (validatePassword === true) {
        return true;
      } else {
        return false;
      }
    }
    return {message: "Email or Password incorrect."};

  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "There was an error." });
  }
}

module.exports = { validateLogin, createLogin };
