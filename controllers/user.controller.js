const { User } = require("../models/user");

async function getUsers() {
  const users = await User.findAll({attributes: { exclude: ['password', 'imgUrl'] }});
  return users;
}

async function getOneUser(id) {
  const user = await User.findByPk(id, {
    attributes: { exclude: ['password', 'imgUrl'] }
  });
  if (user !== null) return user;
  return { message: "The user does not exists" };
}

async function createUser(data, photo) {
  try {
    const newUser = await User.create({
      name: data.name,
      age: data.age,
      email: data.email,
      password: data.password,
      imgUrl: photo,
    });
    return newUser;
  } catch (error) {
    console.error(error);
    return { message: "Something went wrong" };
  }
}

async function editOneUser(id, cambios) {
  try {
    await User.update(
      {
        name: cambios.name,
        age: cambios.age,
        email: cambios.email,
        password: cambios.password,
      },
      { where: { id: id } }
    );
    userUpdated = getOneUser(id);
    return userUpdated;
  } catch (error) {
    console.error(error);
    return { message: "Unknow Error" };
  }
};

async function deleteUser(id) {
  const user = await User.findByPk(id);
  if (user === null) {
    return { message: `The user with id ${id} does not exists` };
  }
  await User.destroy({ where: { id: id } });
  return { message: `User whit id ${id} deleted successfully` };
}

module.exports = { getUsers, getOneUser, editOneUser, deleteUser, createUser };
