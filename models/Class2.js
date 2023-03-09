const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Class2 extends Model {}

Class2.init(
    {
        id:  {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
          },
        hp: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 100,
            validate: {
                isNumeric: true,
            },
        },
        attack: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 10,
            validate: {
                isNumeric: true,
            },
        },
        defense: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 10,
            validate: {
                isNumeric: true,
            },
        },
        move_1: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        move_2: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        move_3: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        move_4: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'Class1',
    },
)

module.exports = Class2;