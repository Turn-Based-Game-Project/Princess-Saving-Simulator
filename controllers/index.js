const router = require('express').Router();

const apiRoutes = require('./api/index');
const classEnemyRoutes = require('./class-enemy-routes.js');


router.use('/battle', classEnemyRoutes);
router.use('/api', apiRoutes);

module.exports = router;
