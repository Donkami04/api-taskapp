const bcrypt = require("bcrypt");

async function comparePassword(password, hash) {
  try {
    const result = await bcrypt.compare(password, hash);
    return result;
  } catch (error) {
    console.log(error);
    return {message: "Something went wrong"};
  }
}

module.exports = { comparePassword };
