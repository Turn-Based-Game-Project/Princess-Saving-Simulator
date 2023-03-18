const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

class User extends Model {  
  checkPassword(loginPw) {
  return bcrypt.compareSync(loginPw, this.password)}
};

User.init(
    {
      id:  {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        },
      user_name: {
        type: DataTypes.STRING,
        allowNull: true,
        unique: true,
        validate: {
          isAlphanumeric: true,
        },
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          isEmail: true,
        },
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          isAlphanumeric: true,
          len: [8],
        },
      },
    },
    {    hooks: {
      beforeCreate: async (newUserData) => {
        newUserData.password = await bcrypt.hash(newUserData.password, 10);
        return newUserData;
      },
    },
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'User',
    },
);

module.exports = { User };