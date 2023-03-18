const router = require('express').Router();
const { User } = require('../../models/User');


router.post('/', async (req, res) => {
  try {
    const dbUserData = await User.create({
      email: req.body.email,
      password: req.body.password,
    });
    res.status(200).json("User created successfully!");
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});


router.post('/login', async (req, res) => {
  try {
    const userData = await User.findOne({ where: { email: req.body.email } });

    if (!userData) {
      return res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
    }

    const validPassword = userData.checkPassword(req.body.password);
    console.log(validPassword)
    if (!validPassword) {
      return res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
    }

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;
      console.log('You are now logged in!')
      res.json({ user: userData, message: 'You are now logged in!' });
    });

  } catch (err) {
    console.error(err)
    res.status(400).json(err);
  }
});

router.post('/logout', (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;

