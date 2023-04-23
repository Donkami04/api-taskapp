const { Model, DataTypes } = require("sequelize");
const sequelize = require("../db/conection");

class User extends Model {
  static associate(models) {
    User.hasMany(models.Task, { foreignKey: "userId" });
    User.belongsTo(models.LoginUsers, { foreignKey: 'userId' });
  }
}

User.init(
  {
    name: DataTypes.STRING,
    age: DataTypes.INTEGER,
    imgUrl: DataTypes.STRING,
  },
  {
    sequelize,
    modelName: "User",
    timestamps: false
  }
);

module.exports = { User };
