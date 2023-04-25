const { Model, DataTypes } = require("sequelize");
const sequelize = require("../db/conection");
const bcrypt = require("bcrypt");

class User extends Model {
  static associate(models) {
    User.hasMany(models.Task, { foreignKey: "userId" });
  }
}

User.init(
  {
    name: DataTypes.STRING,
    age: DataTypes.INTEGER,
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      set(value) {
        const saltRounds = 10;
        const hash = bcrypt.hashSync(value, saltRounds);
        this.setDataValue("password", hash);
      },
    },
    imgUrl: DataTypes.STRING,
  },
  {
    sequelize,
    modelName: "User",
    timestamps: false
  }
);

module.exports = { User };
