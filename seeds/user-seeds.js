const { User } = require('../models/User.js');
const sequelize = require('../config/connection');

const userData = [
    {
        user_name: "test",
        email: "email@email.com",
        password: "notagoodone",
    }
];

const seedUsers = async () => { 
    await sequelize.sync({ force: true })
    await User.bulkCreate(userData, {
        individualHooks: true,
        returning: true,
    });
    process.exit();
};

seedUsers();