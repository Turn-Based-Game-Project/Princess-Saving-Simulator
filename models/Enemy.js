const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Enemy extends Model {}

Enemy.init(
    {
        id:  {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
          },
        enemy_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        max_hp: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 100,
            validate: {
                isNumeric: true,
            } ,
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
        modelName: 'Enemy',
    },
)

module.exports = { Enemy };