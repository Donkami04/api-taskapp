const { Model, DataTypes } = require("sequelize");
const sequelize = require("../db/conection");
const bcrypt = require("bcrypt");

class LoginUsers extends Model {
  static associate(models) {
    LoginUsers.hasOne(models.User, { foreignKey: "userId" });
  }
}

LoginUsers.init(
  {
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
    modelName: "LoginUsers",
    timestamps: false
  }
);

module.exports = { LoginUsers };
