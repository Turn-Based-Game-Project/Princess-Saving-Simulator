const { Class } = require('../models/Class');
const sequelize = require('../config/connection');

const classData = [
    {
        class_name: "Dwarf",
        hp: 100,
        attack: 20,
        defense: 20,
        move_1: "Slash",
        move_2: "Ranged",
        move_3: "Special",
        move_4: "Heal",
    },
    {
        class_name: "Elf",
        hp: 150,
        attack: 10,
        defense: 10,
        move_1: "Slash",
        move_2: "Ranged",
        move_3: "Special",
        move_4: "Heal",
    },
    {
        class_name: "Man",
        hp: 120,
        attack: 15,
        defense: 15,
        move_1: "Slash",
        move_2: "Ranged",
        move_3: "Special",
        move_4: "Heal",
    },
];

 const seedClass = async () => { 
     await sequelize.sync({ force: true })
     await Class.bulkCreate(classData);
     process.exit();
};

seedClass();

