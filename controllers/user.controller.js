const { User } = require("../models/user");

async function getUsers() {
  const users = await User.findAll({attributes: { exclude: ['updatedAt', 'createdAt'] }});
  return users;
}

async function getOneUser(id) {
  const user = await User.findByPk(id);
  if (user !== null) return user;
  return { message: "The user does not exists" };
}

async function createUser(data) {
  const newUser = await User.create({
    name: data.name,
    age: data.age,
  });
  return newUser;
}

async function editOneUser(id, cambios) {
  await User.update(
    {
      name: cambios.name,
      age: cambios.age,
    },
    { where: { id: id } }
  );
  userUpdated = getOneUser(id);
  return userUpdated;
}

async function deleteUser(id) {
    const user = await User.findByPk(id);
    if (user === null) {
        return { message: `The user with id ${id} does not exists` };
    };
    await User.destroy({ where: { id: id } });
    return { message: `User whit id ${id} deleted successfully` };
  
  // ! Usuairo no encontrado
}

module.exports = { getUsers, getOneUser, editOneUser, deleteUser, createUser };
