const { Task } = require("../models/task");

async function getTasks() {
  const tasks = await Task.findAll({attributes: { exclude: ['updatedAt', 'createdAt'] }});
  return tasks;
}

async function getOneTask(id) {
  const task = await Task.findByPk(id);
  if (task !== null) return task;
  return { message: "The Task does not exists" };
}

async function createTask(data) {
  const newTask = await Task.create({
    tittle: data.tittle,
    description: data.description,
    userId: data.userId,
  });
  return newTask;
}

async function editOneTask(id, cambios) {
  await Task.update(
    {
      tittle: cambios.tittle,
      description: cambios.description,
      userId: cambios.userId,
    },
    { where: { id: id } }
  );
  taskUpdated = getOneTask(id);
  return taskUpdated;
}

async function deleteTask(id) {
  const task = await Task.findByPk(id);
  if (task === null) {
    return { message: `The task with id ${id} does not exists` };
  }
  await Task.destroy({ where: { id: id } });
  return { message: `Task whit id ${id} deleted successfully` };
}

module.exports = { getTasks, getOneTask, editOneTask, deleteTask, createTask };
