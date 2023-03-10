const { Enemy } = require('../models/Enemy');
const sequelize = require('../config/connection');

const enemyData = [
    {
        enemy_name: "Orc",
        hp: 300,
        attack: 8,
        defense: 20,
        move_1: "Chop",
        move_2: "Bite",
        move_3: "Charge",
        move_4: "Rage",
    }, 
    {
        enemy_name: "Goblin",
        hp: 200,
        attack: 6,
        defense: 15,
        move_1: "Leer",
        move_2: "Scratch",
        move_3: "Cry",
        move_4: "Kick",
    },
    {
        enemy_name: "Dragon God",
        hp: 1000,
        attack: 20,
        defense: 20,
        move_1: "Slash",
        move_2: "Ranged",
        move_3: "Special",
        move_4: "Heal",
    }
];

 const seedEnemies = async () => { 
     await sequelize.sync({ force: true })
     await Enemy.bulkCreate(enemyData);
     process.exit();
};

seedEnemies();


