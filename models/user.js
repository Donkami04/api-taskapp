const { Model, DataTypes } = require("sequelize");
const sequelize = require("../db/conection");

class User extends Model {
  static associate(models) {
    User.hasMany(models.Task);
  }
}

User.init(
  {
    name: DataTypes.STRING,
    age: DataTypes.INTEGER,
  },
  {
    sequelize,
    modelName: "User",
  }
);

module.exports = { User };
