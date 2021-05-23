const router = require('express').Router()
const Auth = require('./auth-model')
const bcrypt = require('bcryptjs')
const buildToken = require('./token-builder')

router.post('/register', (req, res, next) => {
  let user = req.body
  const hash = bcrypt.hashSync(user.password, 8)
  user.password = hash
  Auth.Add(user)
  .then(saved =>{
    res.status(201).json(saved)
  })
  .catch(next)
});

router.post('/login', (req, res, next) => {
  const {username, password} = req.body
  Auth.findBy({username})
  .then(user =>{
    if(user && bcrypt.compareSync(password, user.password)){
      const token = buildToken(user)
      res.status(200).json({
        message: `${user.username} is back`,
        token
      })
    } else {
      next({
        status: 401,
        message: 'invalid credentials'
      })
    }
  })
  .catch(next)
});

module.exports = router;
