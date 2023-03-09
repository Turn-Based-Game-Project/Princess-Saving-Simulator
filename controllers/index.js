const router = require('express').Router();
const { Class } = require('../models/Class');


router.get('/', async (req, res) => {
    try {
        const classData = await Class.findAll({
            attributes: {exclude: ['createdAt', 'updatedAt']}
        });
        const classes = classData.map(x=>x.get({ plain:true }))
        console.log(classes);
        res.render('homepage', { classes })
    }
    catch { (err) => {
        console.log(err);
        res.status(500).json(err);
    }}
});

module.exports = router;