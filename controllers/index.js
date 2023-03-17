<<<<<<< HEAD
const router = require('express').Router();

const apiRoutes = require('./api/index');
const classEnemyRoutes = require('./class-enemy-routes.js');

<<<<<<< HEAD

router.use('/battle', classEnemyRoutes);
=======
router.use('/', classEnemyRoutes);
>>>>>>> main
router.use('/api', apiRoutes);

module.exports = router;
=======
>>>>>>> 336180a8f81d3c1eb9eb7e742d3e903709f79f00
