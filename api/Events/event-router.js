const router = require('express').Router()
const Event = require('./event-model')

router.get('/getall', (req,res,next) =>{
  Event.getAll()
  .then(data =>{
    res.json(data)
  })
})

router.post('/:user_id', (req, res, next) => {

});

module.exports = router;
