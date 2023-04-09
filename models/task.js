const { Model, DataTypes } = require("sequelize");
const sequelize = require("../db/conection");

class Task extends Model {
  static associate(models) {
    Task.belongsTo(models.User);
  }
}

Task.init(
  {
    tittle: DataTypes.STRING,
    description: DataTypes.STRING,
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "Users",
        key: "id",
      },
    },
  },
  {
    sequelize,
    modelName: "Task",
  }
);

module.exports = { Task };
