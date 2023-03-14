const router = require('express').Router();
const { Class } = require('../models/Class');
const { Enemy } = require('../models/Enemy');


router.get('/', async (req, res) => {
    try {
        const classData = await Class.findAll({
            attributes: { exclude: ['createdAt', 'updatedAt'] }
        });
        console.log(classData);
        const enemyData = await Enemy.findAll({
            attributes: { exclude: ['createdAt', 'updatedAt'] }
        });
        const classes = classData.map(x=>x.get({ plain:true }));
        const enemies = enemyData.map(x=>x.get({ plain:true }));
        console.log(classes);
        console.log(enemies);
        res.render('homepage', { classes, enemies });
    }
    catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

module.exports = router;