const { User } = require("../models/user");
const { comparePassword } = require("../libs/bcrypt");

async function validateLogin(data) {
  try {
    const user = await User.findOne({
      where: { email: data.email },
    });
    if (user !== null) {
      const validatePassword = await comparePassword(
        data.password,
        user.password
      );
      return validatePassword;
    }
    return false;
  } catch (error) {
    throw new Error("Unknown Error");
  }
}

module.exports = { validateLogin };
