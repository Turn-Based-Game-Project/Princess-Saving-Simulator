const router = require('express').Router();

router.get('start', async (req,res) =>{
    res.render('startScreen')
});

module.exports = router;