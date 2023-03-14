const router = require('express').Router();
const { User } = require('../../models/User');

router.post('/', async (req, res) => {
  try {
    const userData = await User.create({
     class_name: req.body.class_name,
     hp: req.body.hp,
     attack: req.body.attack,
     defense: req.body.defense,
     move_1: req.body.move_1,
     move_2: req.body.move_2,
     move_3: req.body.move_3,
     move_4: req.body.move_4,
    });
   
  res.status(200).json(userData)
} catch (err) {
  res.status(400).json(err);
}
});

// TODO: According to MVC, what is the role of this action method?
router.put('/:id', async (req, res) => {
  // TODO: Where is this action method sending the data from the body of the fetch request? Why?
  try {
    const user = await User.update(
      {
      class_name: req.body.class_name,
      hp: req.body.hp,
      attack: req.body.attack,
      defense: req.body.defense,
      move_1: req.body.move_1,
     move_2: req.body.move_2,
     move_3: req.body.move_3,
     move_4: req.body.move_4,
      },
   {
      where: {
        id: req.params.id,
      },
    });
    // TODO: If the database is updated successfully, what happens to the updated data below?
    res.status(200).json(dish);
  } catch (err) {
      res.status(500).json(err);
    };
});
    

module.exports = router;
