const { Enemy } = require('../models/Enemy');
const sequelize = require('../config/connection');

const enemyData = [
    {
        class_name: "Dwarf",
        hp: 100,
        attack: 20,
        defense: 20,
        move_1: "Slash",
        move_2: "Ranged",
        move_3: "Special",
        move_4: "Heal",
    }
];

 const seedClass = async () => { 
     await sequelize.sync({ force: true })
     await Enemy.bulkCreate(enemyData);
     process.exit();
};

seedClass();

