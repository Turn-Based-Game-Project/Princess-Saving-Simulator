const { Class } = require('../models/Class');
const sequelize = require('../config/connection');

const classData = [
    {
        class_name: "Dwarf",
        hp: 200,
        attack: 10,
        defense: 20,
        move_1: "Mash",
        move_2: "Charge",
        move_3: "Stone Armor",
        move_4: "Block",
    },
    {
        class_name: "Elf",
        hp: 150,
        attack: 15,
        defense: 12,
        move_1: "Fire Arrow",
        move_2: "Stab",
        move_3: "Attack Elixir",
        move_4: "Dodge",
    },
    {
        class_name: "Magician",
        hp: 75,
        attack: 20,
        defense: 10,
        move_1: "Fireball",
        move_2: "Wand Smack",
        move_3: "Ice Wall",
        move_4: "Invisibility",
    },
];

 const seedClass = async () => { 
     await sequelize.sync({ force: true })
     await Class.bulkCreate(classData);
     process.exit();
};

seedClass();
