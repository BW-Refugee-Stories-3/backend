const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const Users = require('./auth-model');
const Token = require('./auth-helpers.js');

router.post('/register', (req, res) => {
  
  let { username, password } = req.body;

  Users.findBy({ username })
    .first()
    .then(user => {

      if (user && bcrypt.compareSync(password, user.password)) {
        
        const token = Token.getJwt(user.username);

        res.status(200).json({
          id: user.id,
          username: user.username,
          token
        });
      } else {
        res.status(401).json({ message: 'Invalid credentials' });
      }
    })
    .catch(error => {
      res.status(500).json(error);
    });
})

router.post('/login', (req, res) => {

  let user = req.body;

  const validateResult = validateUser(user);

  if (validateResult.isSuccessful === true) {
    
    const hash = bcrypt.hashSync(user.password, 10);
    user.password = hash;

    const token = Token.getJwt(user.username);

    Users.add(user)
      .then(saved => {
        res.status(201).json({ id: saved.id, username: saved.username, token: token });
      })
      .catch(error => {
        res.status(500).json(error);
      })

  } else {

    res.status(400).json({
      message: 'Invalid user info, see errors',
      errors: validateResult.errors
    });
  }
})



module.exports = router;